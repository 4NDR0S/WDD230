const scoots = 'data/scoots.json';
const tablebody = document.querySelector('#table_body');
const cards = document.querySelector('#rental_cards');

async function getTableData() {
    const response = await fetch(scoots);
    const data = await response.json();

    displayTable(data.scoots);
    displayCards(data.scoots);
}

const displayTable = (scoots) => {
    scoots.forEach(scoot => {

        let tr = document.createElement('tr');

        let name = document.createElement('td');
        let persons = document.createElement('td');
        let reservation_half = document.createElement('td');
        let reservation_full = document.createElement('td');
        let walk_half = document.createElement('td');
        let walk_full = document.createElement('td');

        name.textContent = `${scoot.name}`;
        persons.textContent = `${scoot.persons}`;
        reservation_half.textContent = `${scoot.Reservation.Half_Day}`;
        reservation_full.textContent = `${scoot.Reservation.Full_Day}`;
        walk_half.textContent = `${scoot.Walk_In.Half_Day}`;
        walk_full.textContent = `${scoot.Walk_In.Full_Day}`;

        tr.appendChild(name);
        tr.appendChild(persons);
        tr.appendChild(reservation_half);
        tr.appendChild(reservation_full);
        tr.appendChild(walk_half);
        tr.appendChild(walk_full);

        tablebody.appendChild(tr);
    });
}

const displayCards = (scoots) => {
    scoots.forEach(scoot => {
        let card = document.createElement('section');

        let img = document.createElement('img');
        let name = document.createElement('h2');
        let persons = document.createElement('p');

        img.setAttribute('src', scoot.imgurl);
        img.setAttribute('alt', `${scoot.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', 'auto');
        img.setAttribute('height', '300');

        name.textContent = `${scoot.name}`;
        persons.textContent = `Max. Persons: ${scoot.persons}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(persons);

        cards.appendChild(card);

    });
}

getTableData();