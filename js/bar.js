let Bar = function (left,top,width,height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;

    this.creatBar = function () {
        ctx.beginPath();
        ctx.rect(this.left,this.top,this.width,this.height);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    };

    this.moveLeft = function () {
        if(this.left>0){
      this.left -= 20}
    };
    this.moveRight = function () {
        if(this.left+this.width<canvas.width){
        this.left += 20}
    };
};