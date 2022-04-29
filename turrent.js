class turrent{
	constructor(){
	}
	
	display(){
		push()
        stroke(skinColor[0],skinColor[1], skinColor[2])
		fill(skinColor[0],skinColor[1], skinColor[2]);
		ellipse(turPosX, turPosY, 30);
		pop();
	}
	
	move(){
			if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && turPosX > 5) {
    			turPosX -= 2 + speed;
	  		}
  			if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && turPosX < width-5) {
    			turPosX += 2 + speed;
  			}
  			if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && turPosY > 5) {
    			turPosY -= 2 + speed;
  			}
  			if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && turPosY < height-5) {
    			turPosY += 2 + speed;
  			}
		}
	
	hitScan(){
		for (var i = 0; i < targetBalloons.length; i++){
			var collideOrNot = collideCircleCircle(turPosX, turPosY, 30, targetBalloons[i].myX(), targetBalloons[i].myY(), targetBalloons[i].myR())
			if (collideOrNot){
				return true;
			}
		}
		return false;
	}
}