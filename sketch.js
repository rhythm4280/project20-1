
var backgrimg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;
function preload() {
    backgrimg=loadImage("garden.png");
catimg1=loadAnimation("tomOne.png");
catimg2=loadAnimation("tomTwo.png","tomThree.png");

catimg3=loadAnimation("tomFour.png");
mouseimg1=loadAnimation("jerryOne.png");
mouseimg2=loadAnimation("jerryTwo.png","jerryThree.png");

mouseimg3=loadAnimation("jerryFour.png");
    }

function setup(){
    createCanvas(1000,800);
  

cat=createSprite(870,600);
cat.addAnimation("catSleeping",catimg1);
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseimg1);
mouse.scale=0.15;
}

function draw() {

    background(backgrimg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage",catimg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",mouseimg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
    text(mouseX+','+mouseY, 10,45);
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
}
 


}