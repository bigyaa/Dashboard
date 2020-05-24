const setTheme = (themeName) => {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName;
};

const toggleTheme = () => {
	const theme = localStorage.getItem("theme");

	if (theme === "theme-dark") {
		setTheme("");
	} else {
		setTheme("theme-dark");
	}
};

const loader = document.getElementById("loader");
const main = document.getElementById("mainContainer");

window.addEventListener("load", () => {
	setTheme('theme-dark');
	
	loader.style.display = "none";
	main.style.display = "block";
});
