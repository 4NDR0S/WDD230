// Obtner el elemento del año actual y establece su valor
var year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Obtener el elemento de última modificación y establece su valor
var lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;

