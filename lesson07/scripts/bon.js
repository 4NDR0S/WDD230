const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;

// chaperArray
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// button.addEventListener('click', () => {
//     if (input.value != '') {  // make sure the input is not empty
//         displayList(input.value); // call the function that outputs the submitted chapter
//         chaptersArray.push(input.value);  // add the chapter to the array

//         setChapterList(); // update the localStorage with the new array
//         input.value = ''; // clear the input
//         input.focus(); // set the focus back to the input
//     }
// });

function displayList(item) {
    let li = document.createElement('li');  //crea un elemento li
    let deletebutton = document.createElement('button');  //crea un boton para eliminar
    li.textContent = item;
    deletebutton.textContent = '✖️';  //le da valor al boton
    deletebutton.classList.add('delete');  // this references the CSS rule .delete{width:fit-content;} to size the delete button

    li.append(deletebutton);  //agrega el boton eliminar al elemento li
    list.append(li);  //agrega li a la lista en html

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();  // solo te envia el elemento de entrada (input)
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1); // corta el ultimo caracter 
// vocabulario:   slice = cortar
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

// chaperArray
button.addEventListener('click', () => {
    if (input.value != '') { // si el valos es diferente de ''

        displayList(input.value); // llama la funcion que genera el capitulo agregado
        chaptersArray.push(input.value);  // agrega el capitulo al array

        setChapterList(); // actualiza el almacenamiento local al nuevo array
        input.value = ''; // limpia el input
        input.focus(); // envia el elemento de entrada (input)
    }
});







// primer codigo de BOM (esto es para comprar el nuevo codigo con el primer codigo qwue use)


// button.addEventListener('click', () => {


//     // si el valor de input es diferente de ''
//     if (input.value != '') {
//         input.focus();
//         if (listCount < 10) {
//             // agregamos un filter para poder filtrar los espacios y cambiarlos por "+" (Tarren's hyperlink)
//             const filter = input.value.split(" ").join("+");

//             // entonces crea un elemento li y un boton para eliminar
//             const li = document.createElement('li');
//             const deleteButton = document.createElement('button');

//             // valores para li y el boton de eliminar
//             li.textContent = input.value;

//             // volver el elemento li en a para que se nos genere un link (Tarren's hyperlink)
//             li.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
//             deleteButton.textContent = '✖️';

//             // agrega el boton eliminar al elemento li
//             li.append(deleteButton);

//             // agregar li a la lista en HTML
//             list.append(li);

//             listCount += 1;

//             // eliminar li con el boton de eliminar
//             deleteButton.addEventListener('click', () => {
//                 list.removeChild(li);
//                 input.focus();
//                 listCount -= 1;
//             })

//             // solo te envia el elemento de entrada (input)
//             input.focus()

//             // cambia el valor de input para que se muestre vacio
//             input.value = '';
//         }
//         else {
//             window.alert("The maximum number of elements is 10, Please remove one from the list, to add a new one");
//         }
//     }

// });