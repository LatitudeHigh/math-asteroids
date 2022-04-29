class bullet{
	constructor(xSpd, ySpd){
		this.x = turPosX;
		this.y = turPosY;
		this.xSpd = 12*xSpd;
		this.ySpd = 12*ySpd;
	}
	
	display(){
		push()
		stroke(230, 255, 0);
		fill(230, 255, 0, 135);
		ellipse(this.x, this.y, 10);
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.984 + speedBullet;//this.xSpd *= 0.994 + speedBullet;
		this.ySpd *= 0.984 + speedBullet;//this.ySpd *= 0.994 + speedBullet;
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	hitScan(){
		for (var i = 0; i < targetBalloons.length; i++){
			var collide = collideCircleCircle(this.x, this.y, 10, targetBalloons[i].myX(), targetBalloons[i].myY(), targetBalloons[i].myR())
			if (collide){
                score *= (targetBalloons[i].numerator * targetBalloons[i].denominator);
				targetBalloons.splice(i,1);
				return true;
			}
		}
		return false;
	}
}