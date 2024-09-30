const element = document.body;
const setLightTheme = () => {
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
    console.log(`Light theme set`);
}

const setDarkTheme = () => {
    element.classList.remove("light-mode");
    element.classList.add("dark-mode");
    console.log(`Dark theme set`);
}

export { setLightTheme, setDarkTheme };