function startGame() {
  let messageElement = document.getElementById('messages');
  messageElement.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startGame').addEventListener('click',startGame);