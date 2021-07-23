const Bodies= Matter.Bodies;
const World = Matter.World;
const Engine= Matter.Engine;
snowList=[]


function preload(){
backgroungimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  //createSprite(400, 200, 50, 50);
  snow1=new Snow(100,200)
  ground1=new Ground(400,400,800,7)


}

function draw() {
  background(backgroungimg); 
  Engine.update(engine) 
  snow1.display()
  ground1.display()
 

if(frameCount%20===0){
snowList.push(new Snow(random(1,800),random(1,700)))

}
 for(i=0;i<snowList.length;i=i+1){
 snowList[i].display()

 }






}









