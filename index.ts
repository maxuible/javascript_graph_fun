
window.addEventListener("load", function () {

    const LENGTH = 500;
    const STEP = 10;

    const canvas : HTMLCanvasElement = document.getElementById("window") as HTMLCanvasElement;
    canvas.height = LENGTH;
    canvas.width = LENGTH;
    let ctx : CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.lineWidth = 2;

    let redrawButton : HTMLButtonElement = document.getElementById("redraw") as HTMLButtonElement;
    redrawButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, LENGTH, LENGTH);
        draw(ctx, LENGTH, STEP);
    })

    draw(ctx, LENGTH, STEP);


})

const randomRGB = (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
};

function draw(ctx: CanvasRenderingContext2D, LENGTH: number, STEP: number) {
    //top left quarter
    for (let i = 1; i < LENGTH / STEP / 2; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomRGB();
        ctx.moveTo(0, LENGTH / 2 - (STEP * i) );
        ctx.lineTo(STEP * i, 0);
        ctx.stroke();
    }

    //bottom left quarter
    for (let i = 1; i < LENGTH / STEP / 2; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomRGB();
        ctx.moveTo(0, (LENGTH / 2) + (STEP * i));
        ctx.lineTo(0 + (STEP * i), LENGTH);
        ctx.stroke();
    }

    //top right quarter  
    for (let i = 1; i < LENGTH / STEP / 2; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomRGB();
        ctx.moveTo(LENGTH / 2 + (STEP * i), 0);
        ctx.lineTo(LENGTH, STEP * i);
        ctx.stroke();
    }

    //bottom right quarter
    for (let i = 1; i < LENGTH / STEP / 2; i++) {
        ctx.beginPath();
        ctx.strokeStyle = randomRGB();
        ctx.moveTo(LENGTH, LENGTH / 2 + (STEP * i));
        ctx.lineTo(LENGTH - (STEP * i), LENGTH);
        ctx.stroke();
    }

    ctx.stroke();
}
