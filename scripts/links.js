const baseURL = "https://4ndr0s.github.io/wdd230/";
const linksURL = "https://4ndr0s.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

// getLinks();

const activities = document.querySelector('#listActivities');

const displayLinks = (lessons) => {
    lessons.forEach(lesson => {

        let list = document.createElement('li');
        // let a = document.createElement('a')

        list.textContent = `${lesson.lesson}: `;


        // const linkss = lesson.links
        // a.setAttribute('src', lesson.links.url);
        // a.setAttribute('target', '_blank');
        // a.textContent = `${lesson.links.title}`;
        // list.appendChild(a);


        displayA(lesson.links, list);

        activities.appendChild(list);
    });
}

//cree esta funcion para poder usar el forEach en cada elemento del array "links"[]
const displayA = (lesson_links, list) => {
    lesson_links.forEach(link => {

        let a = document.createElement('a');

        a.setAttribute('href', link.url);
        a.setAttribute('target', '_blank');

        a.textContent = ` ${link.title}  |`;

        list.appendChild(a);

    })
}

getLinks();