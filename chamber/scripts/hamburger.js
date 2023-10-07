const hamButton = document.querySelector('#menu_chamber');
const navigation = document.querySelector('.chamber_navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});