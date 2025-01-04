import { useRef, useEffect } from "react";
import "./Card.css";
import pencil from "./assets/pencil.png";
import { QRCodeCanvas } from "qrcode.react";
import { getDataFromLocalStroage, setDataToLocalStroage } from "./utils";
interface CardProps {
    content: string;
    footer: string;
    origionalContent: string;
    showAvatar: boolean;
}
const AVATAR_FILE = "AVATAR_FILE";
export default function Card({
    showAvatar,
    content,
    footer,
    origionalContent,
}: CardProps) {
    const inputRef = useRef();
    const onUploadAvatar = () => {
        (inputRef.current as unknown as HTMLInputElement).click();
    };
    const handleFileChange = (e: Event) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file && !file.type.startsWith("image/")) {
            alert("请上传图片文件");
            return;
        }
        // 处理图片文件的逻辑
        const reader = new FileReader();
        reader.onload = (e) => {
            const avatar = document.querySelector(".avatar") as HTMLElement;
            if (
                avatar &&
                e.target?.result &&
                typeof e.target.result === "string"
            ) {
                avatar.style.backgroundImage = `url(${e.target.result})`;
                setDataToLocalStroage(AVATAR_FILE, e.target.result);
            }
        };
        reader.readAsDataURL(file!);
    };
    useEffect(() => {
        const avatarFile = getDataFromLocalStroage(AVATAR_FILE);
        if (avatarFile) {
            const avatar = document.querySelector(".avatar") as HTMLElement;
            if (avatar) {
                avatar.style.backgroundImage = `url(${avatarFile})`;
            }
        }
        (inputRef.current as unknown as HTMLInputElement).addEventListener(
            "change",
            handleFileChange,
        );
        return () => {
            (
                inputRef.current as unknown as HTMLInputElement
            ).removeEventListener("change", handleFileChange);
        };
    }, []);
    return (
        <div className="card">
            {showAvatar && (
                <div className="avatar" onClick={onUploadAvatar}></div>
            )}
            <input
                // @ts-ignore
                ref={inputRef}
                type="file"
                name="avatar"
                id="avatar"
                accept="image/*"
                multiple={false}
                style={{ display: "none" }}
            />
            <div className="content">{content}</div>
            {origionalContent && (
                <div className="origional-content">{origionalContent}</div>
            )}
            <div className="footer">
                <label className="footer-author-name">仿 · {footer}</label>
                <div className="pencil-container">
                    <img src={pencil} alt="pencil" width={60} height={30} />
                </div>
            </div>
            <QRCodeCanvas
                value={window.location.href}
                style={{
                    width: 40,
                    height: 40,
                    position: "absolute",
                    bottom: "1rem",
                }}
            />
            <div className="footer-author">@妙笔生花</div>
        </div>
    );
}
