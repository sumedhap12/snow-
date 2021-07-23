class Snow{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.05,
            'density':0.02}
            this.body = Bodies.rectangle(x, y,10,10)
            this.image = loadImage("snow4.webp");
            World.add(world, this.body);

    }


 display(){
 rectMode(CENTER)
 image(this.image,this.body.position.x,this.body.position.y,70,70)
   
 }














}