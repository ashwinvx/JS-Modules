async function loadConfig() {
    const themeModule = await import('./theme.mjs');
    const getCurrentHour = new Date().getHours();
    getCurrentHour >= 18 ? themeModule.setDarkTheme() : themeModule.setLightTheme();
}

loadConfig();