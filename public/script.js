
// script.js
const socket = io();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});
