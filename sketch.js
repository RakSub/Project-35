var dog, happyDog,dogImage,happyDogImage;
var database;
var foodS, foodStock;


function preload()
{
dogImage = loadImage("images/Dog.png");
happyDogImage = loadImage("images/happydog.png");
foodS=0;

}

function setup() {
 
	createCanvas(500,500);
  dog = createSprite(250,250,1,1);
  dog.addImage(dogImage);
  dog.scale = 0.1;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
    }


    drawSprites();
    textSize(25);
    fill("white");
    text("Food remaining: " + foodS ,150,115);

    textSize(14);
    fill("white");
    text ("note: press UP_Arrow key to feed Drago milk!",115,25)

  
}




function readStock(data){
  foodS = data.val();
}
  
function writeStock(x){
  if(x<0){
    x=20;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
   
  })
}


