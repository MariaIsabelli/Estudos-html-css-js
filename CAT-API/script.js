const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats= async () => {
    try{
    const data = await fetch (BASE_URL);
    const json = await data.json();

    return json.webpurrl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await getCats();
}
catBtn.addEventListener('click, loadImg');

loadImg();
