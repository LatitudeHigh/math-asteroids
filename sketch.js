const SPEED_INCREMENT = 1;
let speedBullet = 0;
let bulletsFired = [];
let targetBalloons = [];
let	mainTurrent;
let turPosX = 300;
let turPosY = 300;
let targetTimer = 0;
let balloonSpawnMultiplier = 2;
let balloonSizeMultiplier = 2;
let score = 1;
let retry;
let store;
let xbutton;
let speedPowerButton;
let skinButton;
let slowPowerButton;
let fastBulletPowerButton;
let laserPowerButton;
let blueButton;
let greenButton;
let blackButton;
let greyButton;
let pinkButton;
let darkBlueButton;
let brownButton;
let speed = 0;
var skinColor = [230, 255, 0];
let backgroundChoice = 0;
//let transCol = ()

let highScore = 0;
let bg;
let y = 0;
let homescreen = true;

function preload() {
    if (backgroundChoice == 0){
    bg = loadImage('https://i.insider.com/5dfab6ce855cc20c514e79f6?width=1000&format=jpeg&auto=webp');
    } else if (backgroundChoice == 1){
bg = loadImage('https://qph.fs.quoracdn.net/main-qimg-6f49af888808d9f7203ae80b31d2a75e-lq');
    } else if (backgroundChoice == 2){
        bg = loadImage('https://assetstorev1-prd-cdn.unity3d.com/key-image/158cd591-b1b1-4c02-abd9-0e9df9410389.jpg')
    }
}

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	mainTurrent = new turrent(300,300);
	retry = createButton('retry');
	retry.hide();

    store = createButton('store');
    store.hide();

    speedPowerButton = createButton('Purchase Speed');
    speedPowerButton.hide();
    
    skinButton = createButton('Purchase Skin');
    skinButton.hide();

    slowPowerButton = createButton('Purchase Speed');
    slowPowerButton.hide();


    fastBulletPowerButton = createButton('Purchase Fast Bullets');
    fastBulletPowerButton.hide();

    laserPowerButton = createButton('Purchase Laser Bullet');
    laserPowerButton.hide();

    blueButton = createButton('Blue Skin');
    blueButton.position(10,200);
    //blueButton.mousePressed()
    blueButton.hide();
    
    greenButton = createButton ('Green Skin');
    greenButton.position(90,200);
    greenButton.hide();
    
    blackButton = createButton ('Black Skin');
    blackButton.position(180,200);
    blackButton.hide();
    
    greyButton = createButton ('Grey Skin');
    greyButton.position(300,200);
    greyButton.hide();
    
    pinkButton = createButton ('Pink Skin');
    pinkButton.position(350, 200);
    pinkButton.hide();
    
    purpleButton = createButton ('Purple Skin');
    purpleButton.position(400,200);
    purpleButton.hide();
    
    darkBlueButton = createButton ('Dark Blue Skin');
    darkBlueButton.position(450,200);
    darkBlueButton.hide();
    
    brownButton = createButton ('Brown Skin');
    brownButton.position(500,200);
    brownButton.hide();
    
    if (!Cookies.get('highscore')){
		Cookies.set('highscore', '0');
	}
	highScore = Cookies.get('highscore');
}


function mousePressed(){
    if(homescreen) {
        homescreen = false
    } else {
    	let mouseVector = getMouseVector();
    	oneBullet = new bullet(mouseVector.x, mouseVector.y);
    	bulletsFired.push(oneBullet);
    }
}

function drawHomescreen() {
    createCanvas(600,600);
    //background = 
}

function draw() {
    if(homescreen) {
        drawHomescreen();
    } else {
	background(bg);
	
	drawReticle();
	
	//----------------------------------------BALLOONS-SPAWN--------------------------------------
	targetTimer += 1;
	let spawnInterval = int(100 / balloonSpawnMultiplier);
	if (targetTimer % spawnInterval == 0){
		let newBalloon = new balloon();
		targetBalloons.push(newBalloon);
	}
	
	
	//----------------------------------------------BULLETS----------------------------------------
	for (var i = 0; i < bulletsFired.length; i++){
		bulletsFired[i].display();
		bulletsFired[i].update();
		if (bulletsFired[i].outOfBounds()){
          bulletsFired.splice(i,1);
        } else if (bulletsFired[i].hitScan()){
          bulletsFired.splice(i,1);
        }
	}
	
	
	//-------------------------------------------EVIL-BALLOONS----------------------------------------
	for (var i = 0; i < targetBalloons.length; i++){
		targetBalloons[i].display();
		targetBalloons[i].update();
		if (targetBalloons[i].outOfBounds()){
              targetBalloons.splice(i,1);
            }
    	}
    	
    	balloonSpawnMultiplier += 0.001;
    	if (balloonSizeMultiplier < 5){
    		balloonSizeMultiplier += 0.001;
    	}
    	
    	//------------------------------------------HERO-AND-HERO-DED---------------------------------------a
    	mainTurrent.display();
    	mainTurrent.move();
    	if (mainTurrent.hitScan()){
    		gameOver();
    	}
    	
    	//------------------------------------------TUTORIAL------------------------------------------------
    	noStroke();
        textAlign(LEFT);
        textFont('Helvetica');
        textSize(14);
        fill(235);
    	if (targetTimer < 500){
    		text("arrow keys or wasd: move", 35, 35);
    		text("mouse: aim", 35, 50);
    		text("left click: fire", 35, 65);
            text("score multiplies by balloon value", 35, 80);
            text("score: " + score, 35, 95);
    	} else {
            text("score: " + score, 35, 35);
        }
    	fill(60);
    	textAlign(CENTER);
    }
}