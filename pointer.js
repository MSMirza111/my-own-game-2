class Pointer {
   constructor(x,y,img,angle){
    this.x = x;
    this.y = y;
    this.img = img;
    this.angle = angle;
    

   }
   display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    //imageMode(CENTER)
    image(this.img,0,0,40,30);
    pop();
    console.log(this.x);
   }

}

