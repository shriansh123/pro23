class playerBase{
    constructor(x,y,height,width){
        var option = {
            isStatic = true
        };
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/base2.png");
        world.add(world,this.body.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
    rotate(anngle);
    this.imageMode(centre);
    image(this.image,0,0,this.width,this.height);

     pop();
    }
}