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
    shopMusic.stop();
    //battleMusic.setVolue(0,1.2);
    startScreenMusic.stop();
    numOfKills = 0;
	push()
    gameOverSound.play();
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
    if (shopMusic.isPlaying()){
        shopMusic.setVolume(0, 2);
    }
	retry.hide();
    store.hide();
    mineBullet.hide();
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
    if (!shopMusic.isPlaying()){
        shopMusic.loop();
        shopMusic.setVolume(1);
    }
    createCanvas(600, 600);
    background(itemshop1);
    text("gems: " + gems, 35, 80);
    retry.hide();
    store.hide();

    retry.position(10, 15);
    retry.show();
    
    speedPowerButton.show();
    speedPowerButton.mousePressed(purchaseSpeed);

    fastBulletPowerButton.show();
    fastBulletPowerButton.mousePressed(purchaseBullet);

    mineBullet.show();
    mineBullet.mousePressed(mineBulletFunc);

    //laserPowerButton.position(400, 200);
    //laserPowerButton.show();
    //laserPowerButton.mousePressed(purchaseLaser);
    push();
    tint(255, 100);
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
    if (gems < 10){
        window.alert("Not Enough Gems, need 10 gems");
        return;
    }
    gems = gems - 10;
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
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
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
    coin.play();
}
function purchaseSkin(){
    if (gems < 2 && speedBut == false){
        window.alert("Not Enough Gems, need 2 gems");
        return;
    }
    if (speedBut == false){
        gems = gems - 2;
    }
    speedBut = true;
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
        createCanvas(600,600);
        background(skinStore);
        text("gems: " + gems, 35, 50);
        blueButton.show();
        print ("Runs");
        greenButton.show();
        blackButton.show();
        //greyButton.show();
        pinkButton.show();
        //purpleButton.show();
        //darkBlueButton.show();
        //brownButton.show();
        retry.hide();
        store.position(470, 40);
        store.show();
        mineBullet.hide();
    }
    coin.play();
}

function changeColorToBlue(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 0;
    skinColor[1] = 128;
    skinColor[2] = 255;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToGreen(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 12;
    skinColor[1] = 201;
    skinColor[2] = 72;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToBlack(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 4;
    skinColor[1] = 5;
    skinColor[2] = 4;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToGrey(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 87;
    skinColor[1] = 92;
    skinColor[2] = 89;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToPink(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 252;
    skinColor[1] = 144;
    skinColor[2] = 214;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToPurple(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 122;
    skinColor[1] = 5;
    skinColor[2] = 77;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToDarkBlue(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 9;
    skinColor[1] = 5;
    skinColor[2] = 122;
    coin.play();
    window.alert("Successfully Changed!");
}
function changeColorToBrown(){
    if (gems < 1){
        window.alert("Not Enough Gems, need 1 gem");
        return;
    }
    gems = gems -1;
    skinColor[0] = 122;
    skinColor[1] = 48;
    skinColor[2] = 5;
    coin.play();
    window.alert("Successfully Changed!");
}

function question(){
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
    coin.play();
}

function mineBulletFunc(){
    if (gems < 20){
        window.alert("Not Enough Gems, need 20 gems");
        return;
    }
    gems = gems - 20;
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
    speedBullet = -0.123;
    coin.play();
}