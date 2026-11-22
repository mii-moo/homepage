const msg = document.getElementById('msg');
msg.textContent = 'こんにちは';

document.getElementById('orekuri').addEventListener('click', () => {
  msg.textContent = '押されました';
});