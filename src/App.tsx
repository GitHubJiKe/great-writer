import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { toPng } from "html-to-image";
// @ts-ignore
import download from "downloadjs";
import axios from "axios";
import { getDataFromLocalStroage, setDataToLocalStroage } from "./utils";
import Loading from "./Loading";
const defaultContent = ``;
const API_URL = import.meta.env.VITE__API_URL__;
const API_KEY = import.meta.env.VITE__API_KEY__;

const STROAGE_AUTHORS = "STROAGE_AUTHORS";

function App() {
    const [content, setContent] = useState(defaultContent);
    const [author, setAuthor] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAvatar, setShowAvatar] = useState(() => {
        const val = getDataFromLocalStroage("SHOW_AVATAR");
        return val === "true" ? true : false;
    });
    const [authors, setAuthors] = useState(() => {
        const authors =
            getDataFromLocalStroage(STROAGE_AUTHORS).split(",") || [];
        return Array.from(new Set(authors.filter((v) => !!v)));
    });

    const onDownload = () => {
        if (content.length === 0) {
            return alert("请输入内容");
        }
        if (author.length === 0) {
            return alert("请输入作家名");
        }
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

        const newAuthors = [...authors, author];

        setAuthors(Array.from(new Set(newAuthors)));

        setDataToLocalStroage(STROAGE_AUTHORS, newAuthors.join(","));
        setLoading(true);
        axios
            .post(`${API_URL}?key=${API_KEY}`, {
                contents: [
                    {
                        parts: [
                            {
                                text: `请将以下内容用作家${author}的笔迹仿写，并将仿写的结果返回给我，不要返回多余的内容，如果你仿写不了，就将原文返回即可。内容如下：${content}，`,
                            },
                        ],
                    },
                ],
            })
            .then((res) => {
                setResult(res.data.candidates[0].content.parts[0].text);
            })
            .catch((err) => {
                alert(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="app">
            {loading && <Loading />}
            <Card
                showAvatar={showAvatar}
                origionalContent={content}
                content={result}
                footer={author}
            />
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
                <div className="author-tags">
                    {authors.map((value: unknown, index: number) => {
                        return (
                            <div
                                key={index}
                                className="author-tag"
                                onClick={() => {
                                    setAuthor(value as string);
                                }}
                            >
                                {value as string}
                            </div>
                        );
                    })}
                </div>
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

                    <label htmlFor="showAvatar">
                        <input
                            type="checkbox"
                            name="showAvatar"
                            id="showAvatar"
                            checked={showAvatar}
                            onChange={(e) => {
                                setShowAvatar(e.target.checked);

                                setDataToLocalStroage(
                                    "SHOW_AVATAR",
                                    `${e.target.checked}`,
                                );
                            }}
                        />
                        开启头像
                    </label>
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
