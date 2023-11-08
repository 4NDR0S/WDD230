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

        let list = document.createElement('li')
        // let a = document.createElement('a')

        list.textContent = `${lesson.lesson}: `;

        // const linkss = lesson.links
        (lesson.links).forEach(link => {

            let a = document.createElement('a')

            a.setAttribute('src', link.url);
            a.setAttribute('target', '_blank');

            a.textContent = ` ${link.title} |`;

            list.appendChild(a);

        })

        // a.setAttribute('src', lesson.links.url);
        // a.setAttribute('target', '_blank');

        // a.textContent = `${lesson.links.title}`;

        // list.appendChild(a);

        activities.appendChild(list);
    });
}

getLinks();