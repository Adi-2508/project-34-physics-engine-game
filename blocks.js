class Blocks {
    constructor(x, y, width, height) {
    
      //this.image=blockAnimation
      //this.speed=0.05
      var options={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      //this.boatPosition = boatPos;
      this.image = loadImage("block.png");
      //this.isBroken=false
      World.add(world, this.body);
    }
    //animate()
   // {
    //  this.speed=this.speed+0.05
   // }
  
    //remove(index) {
    //  this.animation=brokenBoatAnimation;
     // this.width = 300;
    //  this.height = 300;
     // this.speed=0.05;
     // this.isBroken=true;
     // setTimeout(() => {
    //    Matter.World.remove(world, boats[index].body);
      //  delete boats[index];
    //  }, 2000);
   // }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      //var index=floor(this.speed%this.animation.length)
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 20 , 50 , this.width, this.height);
      pop();
    }
  }