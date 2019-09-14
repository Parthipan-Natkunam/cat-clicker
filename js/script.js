const imageDir = '/img/';
const catsArray = [
    {
        id:0,
        name: 'Phoebie',
        clicks: 0,
        image: `${imageDir}1.jpg`
    },
    {
        id:1,
        name: 'Chewie',
        clicks: 0,
        image: `${imageDir}2.jpg`
    },
    {
        id:2,
        name: 'Phoebie',
        clicks: 0,
        image: `${imageDir}1.jpg`
    },
    {
        id:3,
        name: 'Phoebie',
        clicks: 0,
        image: `${imageDir}1.jpg`
    },
    {
        id:4,
        name: 'Phoebie',
        clicks: 0,
        image: `${imageDir}1.jpg`
    }
];

const loadCatList = () =>{

};

const incrementCount = (id)=>{
    const counterDOM = document.getElementById(`counter-${id}`);
    counterDOM.innerText = ++catsArray[id].clicks;
};

const initCatApp = ()=>{
    const catDOMs = [];
    for(let i =0 ; i<2; i++){
        document.getElementById(`cat-name-${i}`).innerText = catsArray[i].name;
        catDOMs.push(document.getElementById(`cat-container-${i}`));
        catDOMs[i].addEventListener('click',(ev) => incrementCount(i));
    }
};

window.addEventListener('load',initCatApp);
