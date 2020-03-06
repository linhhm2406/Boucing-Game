let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let FPS = 50;
let Ball = function (left, top) {
    this.left = left;
    this.top = top;
    this.speedx = 5;
    this.speedy = 5;

    this.ballCreate = function () {
        ctx.beginPath();
        ctx.arc(this.left, this.top, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    };

    this.direction = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.speedx = -this.speedx;
        }
        if (Math.floor(Math.random() * 2) === 0) {
            this.speedy = -this.speedy;
        }
    };

    this.move = function () {
        this.left += this.speedx;
        this.top += this.speedy;
    };

    this.delete = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
};

