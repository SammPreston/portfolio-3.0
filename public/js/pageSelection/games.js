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
// - - Snake Game - -
function snakeView() {
    // . . Header . .
    const header = document.createElement('h3');
    header.innerHTML = ` <h3>Snake</h3>`
    gameDemoPanel.appendChild(header);
   
    // . . Body . .
    const sumSnake = document.createElement('div');
    sumSnake.className='displayDescription';
    
    const imgSnake = document.createElement('img');
    imgSnake.src="/public/img/snakeImg.png";
    imgSnake.className='gameImg';
    
    const snakeDescription = document.createElement('p');
    snakeDescription.innerHTML=`This is a snake game. Collect food don't collide with walls or self.`
    
    const snakePlay = document.createElement('button');
    snakePlay.className = 'playButton';
    snakePlay.innerHTML = `Play`;
    snakePlay.addEventListener('click', launchGameBoard);
    
    function launchGameBoard() {
        const gameBoard = document.createElement('div');
        gameBoard.id = 'gameBoard'
    }
    
    sumSnake.appendChild(snakePlay);
    sumSnake.appendChild(snakeDescription);
    sumSnake.appendChild(imgSnake);
    gameDemoPanel.appendChild(sumSnake);
}




console.log("nav", nav);
// - - Show a summary of game - -


// - - Get gameLink elements - -

    // const gameLinks = document.getElementsByClassName('game');
    // console.log("gamelinks",gameLinks);


// // . . Iterate through gameLinks and attach onclick event handler . . 
// Array.from(gameLinks).forEach(function (link) {
//     link.addEventListener('click', (event) => {
//         console.log(link.innerHTML);
//         // while(gameDemoPanel.firstChild) {
//         //     gameDemoPanel.removeChild(gameDemoPanel.firstChild);
//         // }    

//         // !! Each game link will open a window with a picture, small description of the game, and a button to launch the overview !!
//         // ! - NOTICE: Snake game refreshes the window after each game loss so I am going to have to have it prevent default and only refresh the screen. On the Preview window I would like for there to be a small score board linked to a .json file that collects the users name, score and date and posts it in decending order ! -
//         if(link.innerHTML === "Snake") {
//             console.log('snakegame');
//             const heading = document.createElement('h3');
//             heading.innerHTML = "Snake";
//         }
       
        
//     })
// })


export { gamesViewer };