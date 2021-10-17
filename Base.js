class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.6,
            'friction':0.0001,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);  
      }
}