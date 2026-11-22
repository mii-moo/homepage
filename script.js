const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const x_origin = 200
const y_origin = 200
const angular_velocity = 1

function polar2rectangular(theta) {
    return [50*Math.sin(theta)+x_origin, -50*Math.cos(theta)+y_origin]
}

let phase = 0

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    phase += 2* Math.PI * angular_velocity / 360;

    const [x, y] = polar2rectangular(phase)
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.stroke();

    requestAnimationFrame(draw);
}

draw()