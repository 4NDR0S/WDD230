const form = document.querySelector('form');
const timestamp = document.getElementById("timestamp");

// guarda el tiempo al precionar el submit button
form.addEventListener('submit', (event) => {
    const timenow = new Date().toISOString();
    timestamp.value = timenow;
})

