const form = document.querySelector('form');
const timestamp = document.getElementById("timestamp");

// to save time at press submit button
form.addEventListener('submit', (event) => {
    const timenow = new Date().toISOString();
    timestamp.value = timenow;
})

