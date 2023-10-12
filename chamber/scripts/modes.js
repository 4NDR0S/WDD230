const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        main.style.background = "#000";
        body.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🌕";
    } else {
        main.style.background = "#eee";
        body.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🌑";
    }
});
