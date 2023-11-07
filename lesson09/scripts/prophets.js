const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);  //almacena la respuesta con el metodo tech
    const data = await response.json();   //convierte la respuesta a un objeto JSON
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

// getProphetData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //crear elementos para agregar al div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');

        let birth = document.createElement('p');  //añadimos fecha de nacimiento
        let placeB = document.createElement('p'); //y su lugar de nacimiento
        let death = document.createElement('p');  //y su fecha de muerte

        let portrait = document.createElement('img');

        // darle valos al nombre completo de los h2
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //contruir la imagen 
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //le damos valor a la ingormacion adicional (fecha y lugar de nacimiento)
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeB.textContent = `${prophet.birthplace}`;
        death.textContent = `Date of Death: ${prophet.death}`;

        // Append the section(card) with the created elements
        card.appendChild(fullName);

        // append la informacion adicional que agregamos
        card.appendChild(birth);  //fecha de cumpleaños
        card.appendChild(placeB); //lugar de nacimiento


        card.appendChild(portrait);

        card.appendChild(death);  //dia de muerte

        cards.appendChild(card);
    });
}

getProphetData();