
let ball = new Ball(350,50);

let bar = new Bar(300,900,250,30);

ball.direction();
bar.creatBar();
function run() {
    ball.delete();
    bar.creatBar();
    if(ball.left-30 < 0 && ball.speedx<0){
        ball.speedx = - ball.speedx
    }if(ball.left+30 > canvas.width && ball.speedx>0) {
        ball.speedx = -ball.speedx
    }if(ball.top-30 < 0 && ball.speedy<0){
        ball.speedy = - ball.speedy
    }if(ball.top+30> bar.top && ball.speedy>0 && (ball.left>=bar.left && ball.left < bar.left+bar.width)) {
        ball.speedy = -ball.speedy
    }if(ball.top+30 === canvas.height){
        alert('Game Over');
    }
    ball.move();
    ball.ballCreate();
}
run();
setInterval(run,1000/FPS);

window.addEventListener("keydown", move);

function move(evt) {
    switch (evt.keyCode ) {
        case 37 :
            bar.moveLeft();
            ball.delete();
            bar.creatBar();
            break;
        case 39 :
            bar.moveRight();
            ball.delete();
            bar.creatBar();
            break;
    }
}
setInterval(move, 100/FPS);
