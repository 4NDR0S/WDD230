const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    // si el valor de input es diferente de ''
    if (input.value != '') {
        input.focus();

        // entonces crea un elemento li y un boton para eliminar
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // valores para li y el boton de eliminar
        li.textContent = input.value;
        deleteButton.textContent = '✖️';

        // agrega el boton eliminar al elemento li
        li.append(deleteButton);

        // agregar li a la lista en HTML
        list.append(li);

        // eliminar li con el boton de eliminar
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        })

        // solo te envia el elemento de entrada (input)
        input.focus()

        // cambia el valor de input para que se muestre vacio
        input.value = '';
    }
});