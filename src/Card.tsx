import "./Card.css";
import pencil from "./assets/pencil.png";
import { QRCodeCanvas } from "qrcode.react";
interface CardProps {
    content: string;
    footer: string;
}

export default function Card({ content, footer }: CardProps) {
    return (
        <div className="card">
            <div className="content">{content}</div>
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
