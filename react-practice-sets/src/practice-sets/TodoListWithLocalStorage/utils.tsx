export const setLocalStorageData = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getLocalStorageData = (key: string) => {
    return localStorage.getItem(key) ?? '';
}