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
        snakePlay.href="/public/projects/basic-SnakeGame/index.html";
    }
    // . . Append elements to view
    sumSnake.appendChild(snakePlay);
    sumSnake.appendChild(snakeDescription);
    sumSnake.appendChild(imgSnake);
    gameDemoPanel.appendChild(sumSnake);
}

export { snakeView }