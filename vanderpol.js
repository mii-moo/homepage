const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const x_origin = 200
const y_origin = 200
const scale = 50
const step = 0.1

let x = 0.5
let y = 0
const slider = document.getElementById("slider");
const valueText = document.getElementById("value");
let mu = Number(slider.value)

slider.addEventListener("change", (e) => {
    x = 0.5;
    y = 0;
    valueText.textContent = e.target.value;
    mu = Number(e.target.value);
    ctx.beginPath();
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x += (y - mu*(((x**3)/3)-x)) * step
    y += (-x) * step

    ctx.arc(x * scale + x_origin, y * scale + y_origin, 0, 0, Math.PI * 2);
    ctx.stroke();

    requestAnimationFrame(draw);
}

draw()