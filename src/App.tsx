import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { toPng } from "html-to-image";
// @ts-ignore
import download from "downloadjs";
import axios from "axios";
const defaultContent = ``;
const defaultFooter = "鲁迅";
const API_URL = import.meta.env.VITE__API_URL__;
const API_KEY = import.meta.env.VITE__API_KEY__;

function App() {
    const [content, setContent] = useState(defaultContent);
    const [author, setAuthor] = useState(defaultFooter);
    const [result, setResult] = useState("");
    const onDownload = () => {
        toPng(document.querySelector(".card") as HTMLElement)
            .then((dataUrl) => {
                const filename = window.prompt("请输入文件名", `${author}.png`);
                download(dataUrl, filename);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onGenerate = () => {
        if (content.length === 0) {
            return alert("请输入内容");
        }
        if (author.length === 0) {
            return alert("请输入作家名");
        }
        axios
            .post(`${API_URL}?key=${API_KEY}`, {
                contents: [
                    {
                        parts: [
                            {
                                text: `请将以下内容用作家${author}的笔迹仿写，内容如下：${content}`,
                            },
                        ],
                    },
                ],
            })
            .then((res) => {
                setResult(res.data.candidates[0].content.parts[0].text);
            });
    };
    return (
        <div className="app">
            <Card content={result} footer={author} />

            <div className="textarea-container">
                <textarea
                    className="textarea"
                    placeholder="请输入内容"
                    value={content}
                    onChange={(e) => {
                        if (e.target.value.length > 140) {
                            return alert("最多140字");
                        }
                        setContent(e.target.value);
                    }}
                ></textarea>
                {content.length === 0 && (
                    <label className="limit">最多140字</label>
                )}

                <div className="author-input-container">
                    <input
                        type="text"
                        placeholder="请输入作家名"
                        className="author-input"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                    />
                </div>
            </div>
            <button className="generate-button" onClick={onGenerate}>
                生成
            </button>
            <button className="generate-button" onClick={onDownload}>
                下载
            </button>
        </div>
    );
}

export default App;
