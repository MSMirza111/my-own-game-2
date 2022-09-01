class Ball{
 
 constructor(x,y,img){
 this.img = img;
this.x = x;
this.y = y;

 this.body = Bodies.circle(x,y,20,{isStatic:true});
 World.add(world,this.body);

}
display(){
 var pos = this.body.position;
 push();
 translate(pos.x,pos.y);
 rotate(this.body.angle);
 imageMode(CENTER);
 image(this.img,0,0,50,50);
 pop();



}

}