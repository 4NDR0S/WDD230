const url1 = "https://4ndr0s.github.io/wdd230/chamber/data/members.json";

const goldCards = document.querySelector('#gold_cards');
const silverCards = document.querySelector('#silver_cards');

async function getMembersData() {
    const response = await fetch(url1);
    const data = await response.json();

    displaySpotlight(GetGoldList(data), goldCards);
    displaySpotlight(GetSilverList(data), silverCards);
}

function GetGoldList(data) {
    let goldList = [];
    data.members.forEach((member) => {
        if (member.level == 'gold') {
            goldList.push(member);
        }
    })
    return goldList;
}

function GetSilverList(data) {
    let silverList = [];
    data.members.forEach((member) => {
        if (member.level == 'silver') {
            silverList.push(member);
        }
    })
    return silverList;
}

const displaySpotlight = (members, memberLevel) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phnumber = document.createElement('p');
        let url = document.createElement('a');

        logo.setAttribute('src', member.imgurl);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '150');

        name.textContent = member.name;
        address.textContent = member.address;
        phnumber.textContent = member.phone;

        url.textContent = member.url;
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phnumber);
        card.appendChild(url);

        memberLevel.appendChild(card);
    });
}

getMembersData();