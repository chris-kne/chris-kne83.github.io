// Dragon Game Enhanced Version

// Define canvas dimensions
const canvasWidth = 800;
const canvasHeight = 800;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let snake = [{ x: 10, y: 10 }];
let dx = 10;
let dy = 0;
let pearls = [];
let gameOver = false;

// Main game loop
function gameLoop() {
    if (gameOver) return;
    setTimeout(() => {
        clearCanvas();
        drawSnake();
        drawPearls();
        updateSnake();
        detectCollision();
        gameLoop();
    }, 100);
}

function clearCanvas() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Use gradient for smoother effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, 10, 10);
    });
}

function updateSnake() {
    const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(newHead);
    if (pearlEaten()) {
        spawnPearl();
    } else {
        snake.pop();
    }
}

function pearlEaten() {
    // Check if the snake's head has collied with a pearl
}

function detectCollision() {
    // Check for self-collision and boundaries
}

function spawnPearl() {
    // Logic for pearl spawn fix
}

function showGameOverModal() {
    // Display modal on game over with restart option
}

// Event listener for key presses
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (dy === 0) {
                dx = 0;
                dy = -10;
            }
            break;
        case 'ArrowDown':
            if (dy === 0) {
                dx = 0;
                dy = 10;
            }
            break;
        case 'ArrowLeft':
            if (dx === 0) {
                dx = -10;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if (dx === 0) {
                dx = 10;
                dy = 0;
            }
            break;
    }
});

// Start the game loop
gameLoop();

// Styles for smoother visuals
ctx.fillStyle = 'linear-gradient(to right, #ff7e5f, #feb47b'); // Example gradients

// Add glow effects to visuals.
