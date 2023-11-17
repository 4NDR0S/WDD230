var banner = document.querySelector('.banner');
const closeBanner = document.querySelector('.close-banner');

closeBanner.addEventListener("click", () => {
    banner.style.display = 'none';
});

var currentDate = new Date();
var currentDay = currentDate.getDate();

if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = 'none';  //aca va block
} else {
    banner.style.display = 'block';  //aca va none
}