const hamButton = document.querySelector('#menu_scoots');
const navigation = document.querySelector('.scoot_navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});