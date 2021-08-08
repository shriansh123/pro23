class Player{
    constructer(x,y,width,height){
        var option = {
            isStatic = true
        }
        this.body = bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.Image = loadImage ("./assets/player.png");
        world.add(world,this.body.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    this.ImageMode(CENTER);
    image(this.image,0,0,this.width,this.height);

    pop();
    }
}