import axios from "axios";
export function getDataFromLocalStroage(key: string) {
    const str = localStorage.getItem(key);
    if (!str) {
        return "";
    }
    return str;
}

export function setDataToLocalStroage(key: string, data: string) {
    localStorage.setItem(key, data);
}

const DEEPSEEK_URL = "https://api.deepseek.com/chat/completions";
const GOOGLE_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const DEEPSEEK_API_KEY = import.meta.env.VITE__DEEPSEEK_API_KEY__;
const API_KEY = import.meta.env.VITE__API_KEY__;

export function aiRequest(
    type: "google" | "deepseek",
    { author, content }: { author: string; content: string },
) {
    const question = `请将以下内容用作家${author}的笔迹仿写，并将仿写的结果返回给我，不要返回多余的内容，如果你仿写不了，就将原文返回即可。内容如下：${content}。`;
    if (type === "google") {
        return axios.post(`${GOOGLE_URL}?key=${API_KEY}`, {
            contents: [
                {
                    parts: [
                        {
                            text: question,
                        },
                    ],
                },
            ],
        });
    } else {
        return axios.post(
            DEEPSEEK_URL,
            {
                model: "deepseek-chat",
                messages: [
                    {
                        role: "system",
                        content:
                            "你是一个学富五车熟读世界各国作家书籍的顶尖学者，具备非常强的模仿各个作家的写作风格写作的能力。",
                    },
                    {
                        role: "user",
                        content: question,
                    },
                ],
                stream: false,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
                },
            },
        );
    }
}
