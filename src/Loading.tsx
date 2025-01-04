import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">生成中...</div>
        </div>
    );
}
