// -- Get snake file
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from "./grid.js";

// -- Initialize RENDER UPDATE so that the snake size and position is continually updating 
let lastRenderTime = 0
let gameOver = false 
const gameBoard = document.getElementById('game-board')

// - ! added export. IDK, how to export this game to my play game button but I know I am only exporting this file ! -
function main(currentTime) {
    if (gameOver){
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
   
    lastRenderTime = currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

