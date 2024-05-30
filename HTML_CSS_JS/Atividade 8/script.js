let timer;
let figures = document.querySelectorAll('.figure');
let playButton = document.getElementById('play');
let resetButton = document.getElementById('reset');
let timerDisplay = document.getElementById('timer');
let resultDisplay = document.getElementById('result');
let historyBody = document.getElementById('history-body');

let result = '';
let winningIndex;

function startGame() {
  resetGame(); // Resetar tudo
  resultDisplay.textContent = 'RESULTADO: EM JOGO';
  resultDisplay.style.color = 'black';
  timer = setInterval(updateTimer, 1000); // Iniciar o timer
  setTimeout(checkResult, 30000); // Verificar o resultado após 30 segundos
}

function updateTimer() {
  let time = timerDisplay.textContent.split(':');
  let minutes = parseInt(time[0]);
  let seconds = parseInt(time[1]);
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 30;
    } else {
      seconds--;
    }
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

function checkResult() {
  clearInterval(timer);
  result = 'TIMEOUT';
  resultDisplay.textContent = `RESULTADO: ${result}`;
  resultDisplay.style.color = 'red';
  figures.forEach(figure => {
    figure.style.backgroundColor = 'red';
  });
  updateHistory(result);
}

function resetGame() {
  clearInterval(timer);
  timerDisplay.textContent = 'TIMER: 00:30'; // Resetar o timer para 30 segundos
  resultDisplay.textContent = 'RESULTADO:';
  resultDisplay.style.color = 'black';
  resetFigures();
  result = '';
}

function resetFigures() {
  winningIndex = Math.floor(Math.random() * 9);
  figures.forEach((figure, index) => {
    figure.style.backgroundColor = 'gray';
    figure.onclick = () => {
      if (index === winningIndex) {
        figures.forEach((fig, i) => {
          if (i === winningIndex) {
            fig.style.backgroundColor = 'green';
          } else {
            fig.style.backgroundColor = 'red';
          }
        });
        result = 'GANHOU';
        resultDisplay.textContent = `RESULTADO: 1.000.000`;
        resultDisplay.style.color = 'green';
      } else {
        figure.style.backgroundColor = 'red';
        figures.forEach((fig, i) => {
          if (i !== index && i !== winningIndex) {
            fig.style.backgroundColor = 'yellow';
          }
        });
        result = 'PERDEU';
        resultDisplay.textContent = `RESULTADO: 0.000.000`;
        resultDisplay.style.color = 'red';
      }
      updateHistory(result);
    };
  });
}

function updateHistory(result) {
  let newRow = document.createElement('tr');
  let newCell = document.createElement('td');
  newCell.textContent = result;
  newRow.appendChild(newCell);
  historyBody.appendChild(newRow);
}

playButton.addEventListener('click', startGame);

resetButton.addEventListener('click', function() {
  resetGame();
  historyBody.innerHTML = '<tr><td></td></tr>'; // Limpar o histórico de jogadas
});