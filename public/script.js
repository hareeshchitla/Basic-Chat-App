const socket = io();

const emojiMap = {
  "react": "⚡",
  "woah": "😮",
  "lol": "😂",
  "hey": "👋",
  "like": "❤️‍🔥",
  "congratulations": "🎉",
  "bye": "😔",
  // Add more mappings as needed
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('input');
  if (input.value) {
    let message = input.value;

    // Replace keywords with emojis
    for (const keyword in emojiMap) {
      if (emojiMap.hasOwnProperty(keyword)) {
        message = message.replace(new RegExp(keyword, 'g'), emojiMap[keyword]);
      }
    }

    socket.emit('chat message', message);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.innerHTML = msg; // Use innerHTML to render emojis
  document.getElementById('messages').appendChild(li);
});
