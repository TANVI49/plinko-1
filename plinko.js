 class plinko{
     constructor(x,y,r){
         var option ={
        restitution:1,
        friction:0,
        isStatic:true
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,option)
    World.add(world,this.body);
     }
     display(){
   var pos=this.body.position;
   var angle=this.body.angle;
  
   push();
   translate(pos.x,pos.y);
   rotate(angle);
  
   ellipseMode(RADIUS);
   ellipse(0,0,this.r,this.r);
   pop();
  }
 }