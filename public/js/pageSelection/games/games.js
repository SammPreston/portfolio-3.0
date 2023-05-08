import { snakeView } from "../games/basic-SnakeGame/snakeSummary.js";
// - - Create Base fileViewer - -
const gamesViewer = document.createElement('div');
gamesViewer.className = 'fileViewer';
console.log("gameViewer",gamesViewer);

// . . header element is created in each fileViewer but is styled with the same classes . .
const header = document.createElement('div');
header.className='fileViewerHeader';
header.innerHTML= `<h3>Games</h3>`
gamesViewer.appendChild(header);

// . . nav element is created in each fileViewer by is styled with the same class . .
const nav = document.createElement('div');
nav.className='fileViewerNav';
gamesViewer.appendChild(nav);
// - - nav links
const snake = document.createElement('p');
snake.innerHTML = "Snake";
snake.classList = 'game', 'change3';
snake.addEventListener('click', snakeView);
nav.appendChild(snake);
// - - Game Summary Viewer - -
const gameDemoPanel = document.createElement('div');
gameDemoPanel.className='contentViewer';
gamesViewer.appendChild(gameDemoPanel);






console.log("nav", nav);

export { gamesViewer };