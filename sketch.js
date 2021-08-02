var muscle, muscleImg, slim, slimImg, 
bg1, bg1Img, bg2, bg2Img, ff, ffImg, start, startImg;

var crunch, chrunchImg, lungs, lungsImg, forearm, 
forearmImg, men, menImg, women, womenImg, squats, squatsImg,
dip, dipImg, palm, palmImg;

var home, homeImg;

var spot, spotImg, jump, jumpImg, homees, homeesImg;
var gameState="start";

function preload(){
    muscleImg = loadImage("mus.png");
    bg1Img = loadImage("bg.png");
    bg2Img = loadImage("bg2.png");
    ffImg = loadImage("ff.png");
    startImg = loadImage("start.png");
    slimImg = loadImage("slim.png");
    squatsImg = loadImage("squat.jpg");
    lungsImg = loadImage("lunge.jpg");
    dipImg = loadImage("dips.jpg");
    forearmImg = loadImage("fore.jpg");
    chrunchImg = loadImage("crunch.jpg");
    palmImg = loadImage("palmplank.jpg");
    menImg = loadImage("mens.jpg");
    womenImg = loadImage("woman.png");
    homeImg = loadImage("home.png");
    spotImg = loadImage("run.jpg");
    jumpImg = loadImage("skip.jpg");
    homeesImg = loadImage("home.png");

}
   
function setup(){
    createCanvas(1000, 655);
    
    bg1 = createSprite(400,400);
    bg1.addImage(bg1Img);
    bg1.scale = 3;
    
    ff = createSprite(500,200);
    ff.addImage(ffImg);
    ff.scale = 2;

    start = createSprite(500,500);
    start.addImage(startImg);
    start.scale = 0.6;
    


}
function draw() {
    //background(0);

    if (gameState==="start" && mousePressedOver(start)) {
        reset();
        
        muscle = createSprite(250, 300);
        muscle.addImage(muscleImg);
        muscle.scale = 2;

        slim = createSprite(800, 300);
        slim.addImage(slimImg);
        slim.scale = 2;

        gameState="play";
    
    }else if (gameState==="play" && mousePressedOver(muscle)) {
       
        rest();

        squats = createSprite(100, 100);
        squats.addImage(squatsImg);
        squats.scale = 0.7;

        lungs = createSprite(350, 100);
        lungs.addImage(lungsImg);
        lungs.scale = 0.2;

        dip = createSprite(600, 100);
        dip.addImage(dipImg);
        dip.scale = 0.8;

        crunch = createSprite(800, 100);
        crunch.addImage(chrunchImg);
        crunch.scale = 0.4;

        forearm = createSprite(150, 300);
        forearm.addImage(forearmImg);
        forearm.scale = 0.9;

        palm = createSprite(500, 300);
        palm.addImage(palmImg);
        palm.scale = 0.8;

        men = createSprite(800, 300);
        men.addImage(menImg);
        men.scale = 1;

        women = createSprite(500, 550);
        women.addImage(womenImg);
        women.scale = 1;

        gameState="end";

      }else if(gameState==="play" && mousePressedOver(slim)){
        
        rest();

        crunch = createSprite(100, 100);
        crunch.addImage(chrunchImg);
        crunch.scale = 0.4;

        spot = createSprite(450, 100);
        spot.addImage(spotImg);
        spot.scale = 0.9;

        jump = createSprite(800, 100);
        jump.addImage(jumpImg);
        jump.scale = 0.2;

        gameState="final";


      }else if(gameState==="end"){

        home = createSprite(900, 550);
        home.addImage(homeImg);
        home.scale = 0.1;

        if(mousePressedOver(home)){
            home.destroy();
            over();
            gameState="start"

            muscle = createSprite(250, 300);
            muscle.addImage(muscleImg);
            muscle.scale = 2;

            
            slim = createSprite(800, 300);
            slim.addImage(slimImg);
            slim.scale = 2;  
           
            gameState="play"

        }

        

      }else if(gameState==="final"){

        home = createSprite(900, 550);
        home.addImage(homeImg);
        home.scale = 0.1;

        if(mousePressedOver(home)){
            home.destroy();
            sam();
            gameState="start"

            muscle = createSprite(250, 300);
            muscle.addImage(muscleImg);
            muscle.scale = 2;

            
            slim = createSprite(800, 300);
            slim.addImage(slimImg);
            slim.scale = 2;  
           
            gameState="play"

        }

      }

    drawSprites();
}

function reset() {
    start.destroy();
    ff.destroy();
}

function rest() {
    slim.destroy();
    muscle.destroy();

}

function over() {
    squats.destroy();
    lungs.destroy();
    crunch.destroy();
    dip.destroy();
    forearm.destroy();
    palm.destroy();
    men.destroy();
    women.destroy();
    home.destroy();
}

function sam() {
    spot.destroy();
    jump.destroy();
    crunch.destroy();
    home.destroy();
}
