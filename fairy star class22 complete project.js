var starImg,bgImg;
var star, starBody;
var fairyImg,fairyvoice,fairy ;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fairyvoice = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(1250, 570);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

    fairyvoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(400,400,50,50);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale = 0.2;




	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  
  console.log(star.y);


  if(star.y > 370 && starBody.position.y > 370 ){
	Matter.Body.setStatic(starBody,true);
	fairyvoice.play();
  }


  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {



 if(keyCode === RIGHT_ARROW){
	 fairy.x = fairy.x + 20 ;
 }

 if(keyCode === LEFT_ARROW){
	fairy.x = fairy.x - 20 ;
}



	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
