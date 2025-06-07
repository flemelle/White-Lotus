var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cursor = document.getElementById('cursor');
var introduction = document.querySelector('#intro');
let initialPosition = [(window.innerWidth/2)-25, (window.innerHeight/2)-25];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('resize', function () {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
})

canvas.addEventListener('click', function () {
    void ctx.clearRect(0, 0, canvas.width, canvas.height);
})

introduction.addEventListener('click', function () {
    introduction.classList.toggle('hide');
    circle(initialPosition);
})

async function circle(initialPosition){
    let teta = Math.PI;
    let ray = 0;
    let size = 40;
    while(true){
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.arc(initialPosition[0]+ray*Math.cos(teta), initialPosition[1]+ray*Math.sin(teta), size, 0, 2*Math.PI);
        ctx.stroke();
        teta += Math.PI/12;
        ray++;
        size++;
        await sleep(90);
    }
}


