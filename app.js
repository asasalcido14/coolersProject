
//Global selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type= "range"]');
const currentHexes = document.querySelectorAll('.color h2');
let initialColors;


// functions

//Color Generateor
function generateHex(){
    const hexColor = chrom.random();
    return hexColor;
}

function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();

        //ADD THE COLOR TO THE BG
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}
randomColors();