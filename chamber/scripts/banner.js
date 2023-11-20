var banner = document.querySelector('.banner');
const closeBanner = document.querySelector('.close-banner');

closeBanner.addEventListener("click", () => {
    banner.style.display = 'none';
});

var currentDate = new Date();
var currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = 'block';  //aca va block (cambiar los valores para hacer visual el banner)
} else {
    banner.style.display = 'none';  //aca va none
}

console.log(currentDay);