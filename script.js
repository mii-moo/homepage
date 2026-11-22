const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 50
let y = 50

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillRect(x,y,1,1);