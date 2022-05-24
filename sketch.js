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
let numOfKills = 0;
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
let skinStore;
let startScreenMusic;
let vid;
let shopMusic;
let coin;
let gameOverSound;
let itemshop1;
let windowPhase = false;
let gems = 0;
let speedBut = false;
let mineBullet;



let highScore = 0;
let bg;
let y = 0;
let homescreen = true;

function preload() {
    itemshop1 = loadImage('itemshop1.jpg'); 
    skinStore = loadImage('skinStore.jpg');
    vid = createVideo('startVideo.mp4');
    shopMusic = loadSound ('shopTheme.mp3');
    coin = loadSound('coinSound.mp3');
    gameOverSound = loadSound('gameOver.mp3');
    vid.hide();
    if (backgroundChoice == 0){
    bg = loadImage('https://i.insider.com/5dfab6ce855cc20c514e79f6?width=1000&format=jpeg&auto=webp');
    } else if (backgroundChoice == 1){
bg = loadImage('https://qph.fs.quoracdn.net/main-qimg-6f49af888808d9f7203ae80b31d2a75e-lq');
    } else if (backgroundChoice == 2){
        bg = loadImage('https://assetstorev1-prd-cdn.unity3d.com/key-image/158cd591-b1b1-4c02-abd9-0e9df9410389.jpg')
    }
    startScreenMusic = loadSound('startScreenMusic.mp3');
}

function setup() {
    let transCol = color(0, 0 , 0 , 0);
	createCanvas(600, 600);
	angleMode(DEGREES);
	mainTurrent = new turrent(300,300);
	retry = createButton('retry');
	retry.hide();

    store = createButton('Store');
    store.hide();

    speedPowerButton = createButton(' ');
    speedPowerButton.style('background-color', transCol);
    speedPowerButton.position(315,135);
    speedPowerButton.size(250,220);
    speedPowerButton.hide();
    
    skinButton = createButton(' ');
    skinButton.style('background-color', transCol);
    skinButton.position(315, 370);
    skinButton.size(250,220);
    skinButton.hide();

    slowPowerButton = createButton(' ');
    slowPowerButton.hide();


    fastBulletPowerButton = createButton(' ');
    fastBulletPowerButton.style('background-color', transCol);
    fastBulletPowerButton.position(25,135);
    fastBulletPowerButton.size(250,220);
    fastBulletPowerButton.hide();

    laserPowerButton = createButton('Purchase Laser Bullet');
    laserPowerButton.hide();

    blueButton = createButton(' ');
    blueButton.style('background-color', transCol)
    blueButton.position(55,349);
    blueButton.size(150, 210);
    //blueButton.mousePressed()
    blueButton.hide();
    
    greenButton = createButton (' ');
    greenButton.style('background-color', transCol);
    greenButton.position(49,145);
    greenButton.size(515, 190);
    greenButton.hide();
    
    blackButton = createButton (' ');
    blackButton.style('background-color', transCol)
    blackButton.position(410,350);
    blackButton.size(140, 205);
    blackButton.hide();
    
    greyButton = createButton ('Grey Skin');
    greyButton.position(300,200);
    greyButton.hide();
    
    pinkButton = createButton (' ');
    pinkButton.style('background-color', transCol)
    pinkButton.position(225, 351);
    pinkButton.size(160, 205);
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

    mineBullet = createButton (' mine')
    mineBullet.style('background-color', transCol);
    mineBullet.position(25,370);
    mineBullet.size(250,220);
    mineBullet.hide();
    
    if (!Cookies.get('highscore')){
		Cookies.set('highscore', '0');
	}
	highScore = Cookies.get('highscore');
    startMusic();
}

function startMusic(){
    //startScreenMusic.play();
    startScreenMusic.loop();
}

function mousePressed(){
    if(homescreen) {
        homescreen = false
    } else {
    	let mouseVector = getMouseVector();
    	oneBullet = new bullet(mouseVector.x, mouseVector.y);
    	bulletsFired.push(oneBullet);
        if (windowPhase == true && (numOfKills%10) == 1){
            windowPhase = false;
        }
        if ((numOfKills%10) == 0 && windowPhase == false && numOfKills != 0){
            if (numOfKills >= 10 && numOfKills < 20){
                window.alert("Phase One Complete, awarded 1 gem");
                question();
                gems = gems + 1;
            }
            if (numOfKills >= 20 && numOfKills < 30){
                window.alert("Phase Two Complete, awarded 1 gem");
                question();
                gems = gems + 1;
            }
            if (numOfKills >= 30 && numOfKills < 40){
                window.alert("Phase Three Complete, awarded 1 gem");
                gems = gems + 1;
            }
            if (numOfKills >= 40 && numOfKills < 50){
                window.alert("Phase four Complete, awarded 2 gems");
                gems = gems + 2;
            }
            if (numOfKills >= 50 && numOfKills < 60){
                window.alert("Phase One Complete, awarded 5 gems, if you get 200 kills, you get 50 gems");
                gems = gems + 5;
            }
            if (numOfKills == 60){
                gems = 50 + gems;
            }
            frameRate(0);
            frameRate(70);
            windowPhase = true;
        }
    }
}

function drawHomescreen() {
    //createCanvas(600,600);
    vid.size(600,600);
    vid.show();
    vid.loop();
    
}

function draw() {
    if(homescreen) {
        drawHomescreen();
        //startMusic();
    } else {
        vid.hide();
        startScreenMusic.setVolume(0,2);
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
            text("gems: " + gems, 35, 110);
    	} else {
            text("score: " + score, 35, 35);
            text("gems: " + gems, 35, 50);
        }
    	fill(60);
    	textAlign(CENTER);
    }
}