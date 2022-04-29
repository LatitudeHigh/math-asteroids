class balloon{
	constructor(){
        this.numerator = int(random(1, 8));
        this.denominator = int(random(1, 4));
		this.side = int(random(4));
		switch (this.side)
		{
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		}
		this.targetX = turPosX;
		this.targetY = turPosY;
		this.targetDir = createVector(this.targetX - this.x, this.targetY - this.y);
		this.targetDir.normalize();
		this.xSpd = this.targetDir.x*balloonSpawnMultiplier;
		this.ySpd = this.targetDir.y*balloonSpawnMultiplier;
		this.r = 12*balloonSizeMultiplier;
		
	}
	
	display(){
		push();
		noStroke();
        if(this.numerator / this.denominator < 1) {
            fill(255, 0, 0);    
        } else {
            fill(0, 255, 0);
        }
		ellipse(this.x, this.y - 5, this.r);
        fill(0, 0, 0);
        text(this.numerator + "/" + this.denominator, this.x, this.y)
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;	
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	myX(){
		return this.x;
	}
	
	myY(){
		return this.y;
	}
	
	myR(){
		return this.r;
	}
	
		
}
