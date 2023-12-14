// board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

// player
let playerWidth = 80;
let playerHeight = 10;
let playerVelocityX = 10;

let player = {
    x : boardWidth/2 - playerWidth/2,
    y : boardHeight - playerHeight -5,
    width : playerWidth,
    height : playerHeight,
    velocityX : playerVelocityX
}

windwow.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // used for drawing on the board
    
    // draw the initial player
    context.fillStyle = "lightgreen";
    context.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
    document.addEventListener("keydown", movePlayer);

}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // player
    context.fillStyle = "lightgreen";
    context.fillRect(player.x, player.y, player.width, player.height);
}

function movePlayer(event) {
    if (event.code == "ArrowLeft") {
        player.x -= player.velocityX;
    }
    else if (event.code == "ArrowRight") {
        player.x += player.velocityX
    }
}