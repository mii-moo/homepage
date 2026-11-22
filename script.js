const msg = document.getElementById('msg');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

msg.textContent = 'こんにちは';

document.getElementById('orekuri').addEventListener('click', () => {
  msg.textContent = '押されました';
});

ctx.strokeRect(50,50,50,50);