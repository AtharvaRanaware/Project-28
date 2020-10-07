class Mango {

    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1
           
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
       
        this.image = loadImage("mango.png");
       
        World.add(world, this.body);
      }

     
       
      

      display(){
        var pos =this.body.position;
      
       
        push();
      // ellipseMode(RADIUS);
        imageMode(RADIUS);
        image(this.image,pos.x, pos.y, this.radius,this.radius);
       //circle(pos.x, pos.y, this.radius);
        
        pop();
       
       
       
      }
    }