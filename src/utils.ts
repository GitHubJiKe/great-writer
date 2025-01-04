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
