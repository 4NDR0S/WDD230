const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
var listCount = 0;

button.addEventListener('click', () => {


    // si el valor de input es diferente de ''
    if (input.value != '') {
        input.focus();
        if (listCount < 10) {
            // agregamos un filter para poder filtrar los espacios y cambiarlos por "+" (Tarren's hyperlink)
            const filter = input.value.split(" ").join("+");

            // entonces crea un elemento li y un boton para eliminar
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            // valores para li y el boton de eliminar
            li.textContent = input.value;

            // volver el elemento li en a para que se nos genere un link (Tarren's hyperlink)
            li.innerHTML = `<a href="https://www.churchofjesuschrist.org/search?lang=eng&query=${filter}&page=1&facet=scriptures" target="_blank">${input.value}</a>`
            deleteButton.textContent = '✖️';

            // agrega el boton eliminar al elemento li
            li.append(deleteButton);

            // agregar li a la lista en HTML
            list.append(li);

            listCount += 1;

            // eliminar li con el boton de eliminar
            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
                listCount -= 1;
            })

            // solo te envia el elemento de entrada (input)
            input.focus()

            // cambia el valor de input para que se muestre vacio
            input.value = '';
        }
        else {
            window.alert("The maximum number of elements is 10, Please remove one from the list, to add a new one");
        }
    }

});