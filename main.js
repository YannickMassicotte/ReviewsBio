//LOCAL LEADERS DATA

const leaders = [
    {
        id: 1,
        name: "Peter Joseph",
        title: "Activist Film-Maker",
        img: "/img/r1_mod.jpg",
        bio: "Peter Joseph is an American independent filmmaker and activist. He is best known for the Zeitgeist film series, which he wrote, directed, narrated, scored, and produced. He is the founder of the related The Zeitgeist Movement. Other work includes The New Human Rights Movement: Reinventing the Economy to End Oppression, a book by Joseph which was published in 2017.",
    },
    {
        id: 2,
        name: "Jacque Fresco",
        title: "Social Engineer",
        img: "/img/r2.jpg",
        bio: "Jacque Fresco (March 13, 1916 – May 18, 2017) was an American futurist and self-described social engineer. Self-taught, he worked in a variety of positions related to industrial design. <br> Fresco wrote and lectured his views on sustainable cities, energy efficiency, natural-resource management, cybernetic technology, automation, and the role of science in society. He directed the Venus Project and advocated global implementation of a socioeconomic system which he referred to as a resource-based economy.",
    },
    {
        id: 3,
        name: "Martin Luther King",
        title: "Minister, activist",
        img: "/img/r3.jpg",
        bio: "Martin Luther King Jr. (born Michael King Jr.; January 15, 1929 – April 4, 1968) was an African American minister and activist who became the most visible spokesperson and leader in the civil rights movement from 1955 until his assassination in 1968. King is best known for advancing civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the nonviolent activism of Mahatma Gandhi.",
    },
];

const img = document.getElementById('img');
const name = document.getElementById('name');
const title = document.getElementById('title');
const bio = document.getElementById('bio');

const leftArrow = document.querySelector('.left-btn');
const rightArrow = document.querySelector('.right-btn');
const randomBtn = document.querySelector('.random-btn');
const profile = document.querySelector('.profile');

//SET STARTING ITEM
let currentItem = 2;
const Index = leaders[leaders.length - 1].id - 1;
console.log(Index);

//LOAD INIT ITEM
window.addEventListener("DOMContentLoaded", function(){
    displayNewLeader(currentItem);
});

leftArrow.addEventListener('click', function () {    
    currentItem--;
    if(currentItem < 0) {
        currentItem = Index;
    }
    displayNewLeader(currentItem);
});
rightArrow.addEventListener('click', function () {    
    currentItem++;
    if(currentItem > Index) {
        currentItem = 0;
    }
    displayNewLeader(currentItem);
});
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * leaders.length);
    displayNewLeader(currentItem);
});

function displayNewLeader(currentItem) {
    let item = leaders[currentItem];
    img.src = item.img;
    name.innerText = item.name;
    title.innerText = item.title;
    bio.innerText = item.bio;
}