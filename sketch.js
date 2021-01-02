
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,paperObj_Img,groundObject	
var world;
var batman_Img,batman;
var rando = Math.round(1,400);
var thunder_Img,thunder1_Img,thunder2_Img,thunder3_Img;
var maxDrop = 100;
var drop;

//var dustbin_1;

function preload(){
	 //paperObj_Img = loadImage("images/paper.png");
	 batman_Img = loadImage("images/Walking Frame/walking_1.png");
    
	 thunder_Img = loadImage("images/thunderbolt/Walking Frame/1.png");
	 thunder1_Img = loadImage("images/thunderbolt/Walking Frame/2.png");
	 thunder2_Img = loadImage("images/thunderbolt/Walking Frame/3.png");
	 
}

function setup() {
	createCanvas(400,700);
	rectMode(CENTER);
	 
	 batman = createSprite(200,500,10,10);
	 batman.addImage(batman_Img,"images/Walking Frame/walking_1.png");
	 batman.scale = 0.5;

	engine = Engine.create();
	world = engine.world;
	//dustbinObj=new dustbin(1200,650);
	//paperObject=new paper(200,450,40);
	//paperObject.addImage(paperObj_Img,"images/paper.png");
	groundObject = new ground(width/2,670,width,100);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	 
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  //dustbinObj.display();
 // paperObject.display();
  groundObject.display();

//   for(var i = 0;i<400;i = i + 50){
// 	 background("black");
// 	 drop = createSprite(i,i,20,20);
// 	 drop.shapeColor = "blue";
// 	 drop.velocityY = 12;
	  
//   }
  
	 createTheDrops();
	 createThunder();
  
  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
function createTheDrops(){
	if (frameCount % 1 === 0){
		 //console.log("HELLO THIS WORK, PLEASE TRY THE DROPS NOW");
		 var drops = createSprite(random(0,400),random(0,400),5,5);
		 drops.shapeColor = "blue";
		 drops.velocityY = 12;
		 drops.lifetime = 100;

	}
}
function createThunder(){
      var thunder;

	if (frameCount % 60 === 0){
	   var thunder = createSprite(random(0,400),100,20,20);
	   thunder.shapeColor = "yellow";
	   thunder.addImage(thunder_Img);
	   thunder.scale = 0.5;
	   thunder.lifetime = 20;
	   
	}
	if (frameCount % 100 === 0){
		var thunder1 = createSprite(random(0,400),100,20,20);
		thunder1.shapeColor = "yellow";
		thunder1.addImage(thunder1_Img);
		thunder1.scale = 0.7;
		thunder1.lifetime = 20;
	}
	if (frameCount % 220 === 0){
		var thunder3 = createSprite(random(0,400),100,20,20);
		thunder3.shapeColor = "yellow";
		thunder3.addImage(thunder2_Img);
		thunder3.scale = 0.8;
		thunder3.lifetime = 10;
	}
	 
	 
}





