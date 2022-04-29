function getMouseVector(){
	let mouseXalt = mouseX - turPosX;
	let mouseYalt = mouseY - turPosY;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}
	
function drawReticle(){
	noFill();
	strokeWeight(1.5);
	stroke(0, 100, 125, 125);
	ellipse(mouseX, mouseY, 20);
	stroke(80, 160, 200, 125);
	line(mouseX-14, mouseY-14, mouseX+14, mouseY+14);
	line(mouseX+14, mouseY-14, mouseX-14, mouseY+14);
	stroke(80, 160, 200, 125);
	line(turPosX, turPosY, mouseX, mouseY);
}

function gameOver(){
	push()
	
	print("DED");
	noStroke();
	fill(20)
	rect(0,200,600,200)
	
	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170,20,20);
	text("YOU DIED",300,300)
		
	textFont('Helvetica');
	textSize(18);
	fill(235);
	let scoreString = "score: " + score;
	text(scoreString, 300, 340);
	
	if (score > highScore) {
		highScore = score;
		Cookies.remove('highscore');
		Cookies.set('highscore', highScore);
	}
	
	let highScoreString = "highscore: " + highScore;
	text(highScoreString, 300, 360);
	
	retry.show();
	retry.position(250, 380);
	retry.size(100,30);
	retry.style('background-color', '#202020');
	retry.style('color', '#FFFFFF');
	retry.mousePressed(reset);

    store.show();
	store.position(250, 420);
	store.size(100,30);
	store.style('background-color', '#188c79');
	store.style('color', '#FFFFFF');
	store.mousePressed(goToStore);

    
	pop();
	noLoop();
}

function reset(){
	retry.hide();
    store.hide();
    laserPowerButton.hide();
    speedPowerButton.hide();
    fastBulletPowerButton.hide();
    skinButton.hide();
    //add mine bullet, set speedBullet to -0.09
	bulletsFired = [];
	targetBalloons = [];
	turPosX = 300;
	turPosY = 300;
	targetTimer = 0;
	balloonSpawnMultiplier = 2;
	balloonSizeMultiplier = 2;
	score = 1;
	
	loop();
}



function goToStore() {
    createCanvas(600, 600);
    background(bg);
    retry.hide();
    store.hide();

    retry.position(10, 15);
    retry.show();
    
    speedPowerButton.position(5, 200);
    speedPowerButton.show();
    speedPowerButton.mousePressed(purchaseSpeed);

    fastBulletPowerButton.position(130,200);
    fastBulletPowerButton.show();
    fastBulletPowerButton.mousePressed(purchaseBullet);

    //laserPowerButton.position(400, 200);
    //laserPowerButton.show();
    //laserPowerButton.mousePressed(purchaseLaser);
    push();
    tint(255, 100);
    skinButton.position(300, 200);
    pop();
    skinButton.show();
    skinButton.mousePressed(purchaseSkin);


    blueButton.hide();
    blueButton.mousePressed(changeColorToBlue);
    greenButton.hide();
    greenButton.mousePressed(changeColorToGreen);
    blackButton.hide();
    blackButton.mousePressed(changeColorToBlack);
    greyButton.hide();
    greyButton.mousePressed(changeColorToGrey);
    pinkButton.hide();
    pinkButton.mousePressed(changeColorToPink);
    purpleButton.hide();
    purpleButton.mousePressed(changeColorToPurple);
    darkBlueButton.hide();
    darkBlueButton.mousePressed(changeColorToDarkBlue);
    brownButton.hide();
    brownButton.mousePressed(changeColorToBrown);
}


function purchaseSpeed(){
    let correct = false;
    do {
        let user;
        let randomChoice = int(random(1, 8));
        let randomChoice2 = int(random(1,8));
        let fraction = false;
        let answer;
        
        //If random choice and radom choice2 is a even number
        if (randomChoice % 2 == 0 && randomChoice2 % 2 == 0 ){
            fraction = true;
        } else {
            fraction = false;
        }
        
        if (fraction == true && randomChoice >= randomChoice2){
            answer = randomChoice/randomChoice2;
            user = parseFloat(prompt("What is " + randomChoice + "/" + randomChoice2));
        } else if (fraction == true && randomChoice < randomChoice2){
            answer = randomChoice2/randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + "/" + randomChoice));
        } else {
            answer = randomChoice2 * randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + " x " + randomChoice));
        }

        if (answer == user){
            window.alert("Correct");
            correct = true;
        } else if (answer != user){
            window.alert("Incorrect");
            correct = false;
        }
    } while (correct == false);
    speed += SPEED_INCREMENT;
    
}

function purchaseBullet(){
    let correct = false;
    do {
        let user;
        let randomChoice = int(random(1, 8));
        let randomChoice2 = int(random(1,8));
        let fraction = false;
        let answer;
        
        //If random choice and radom choice2 is a even number
        if (randomChoice % 2 == 0 && randomChoice2 % 2 == 0 ){
            fraction = true;
        } else {
            fraction = false;
        }
        
        if (fraction == true && randomChoice >= randomChoice2){
            answer = randomChoice/randomChoice2;
            user = parseFloat(prompt("What is " + randomChoice + "/" + randomChoice2));
        } else if (fraction == true && randomChoice < randomChoice2){
            answer = randomChoice2/randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + "/" + randomChoice));
        } else {
            answer = randomChoice2 * randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + " x " + randomChoice));
        }

        if (answer == user){
            window.alert("Correct");
            correct = true;
        } else if (answer != user){
            window.alert("Incorrect");
            correct = false;
        }
    } while (correct == false);
    speedBullet += 0.005;
    
}
function purchaseSkin(){
    speedPowerButton.hide();
    fastBulletPowerButton.hide();
    laserPowerButton.hide();
    skinButton.hide();
    let correct = false;
    do {
        let user;
        let randomChoice = int(random(1, 8));
        let randomChoice2 = int(random(1,8));
        let fraction = false;
        let answer;
        
        //If random choice and radom choice2 is a even number
        if (randomChoice % 2 == 0 && randomChoice2 % 2 == 0 ){
            fraction = true;
        } else {
            fraction = false;
        }
        
        if (fraction == true && randomChoice >= randomChoice2){
            answer = randomChoice/randomChoice2;
            user = parseFloat(prompt("What is " + randomChoice + "/" + randomChoice2));
        } else if (fraction == true && randomChoice < randomChoice2){
            answer = randomChoice2/randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + "/" + randomChoice));
        } else {
            answer = randomChoice2 * randomChoice;
            user = parseFloat(prompt("What is " + randomChoice2 + " x " + randomChoice));
        }

        if (answer == user){
            window.alert("Correct");
            correct = true;
        } else if (answer != user){
            window.alert("Incorrect");
            correct = false;
        }
    } while (correct == false);
    if (correct == true){
        blueButton.show();
        print ("Runs");
        greenButton.show();
        blackButton.show();
        greyButton.show();
        pinkButton.show();
        purpleButton.show();
        darkBlueButton.show();
        brownButton.show();
        store.show();
    } 
}

function changeColorToBlue(){
    skinColor[0] = 0;
    skinColor[1] = 128;
    skinColor[2] = 255;
    window.alert("Successfully Changed!");
}
function changeColorToGreen(){
    skinColor[0] = 12;
    skinColor[1] = 201;
    skinColor[2] = 72;
    window.alert("Successfully Changed!");
}
function changeColorToBlack(){
    skinColor[0] = 4;
    skinColor[1] = 5;
    skinColor[2] = 4;
    window.alert("Successfully Changed!");
}
function changeColorToGrey(){
    skinColor[0] = 87;
    skinColor[1] = 92;
    skinColor[2] = 89;
    window.alert("Successfully Changed!");
}
function changeColorToPink(){
    skinColor[0] = 252;
    skinColor[1] = 144;
    skinColor[2] = 214;
    window.alert("Successfully Changed!");
}
function changeColorToPurple(){
    skinColor[0] = 122;
    skinColor[1] = 5;
    skinColor[2] = 77;
    window.alert("Successfully Changed!");
}
function changeColorToDarkBlue(){
    skinColor[0] = 9;
    skinColor[1] = 5;
    skinColor[2] = 122;
    window.alert("Successfully Changed!");
}
function changeColorToBrown(){
    skinColor[0] = 122;
    skinColor[1] = 48;
    skinColor[2] = 5;
    window.alert("Successfully Changed!");
}