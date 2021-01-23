class Ground{
    // constructor is a function in which we give the properties of a object.
constructor(){
 // isStatic : true is nothing but that the body is going to be stable without moving.
 this.body = Bodies.rectangle(600,500,1200,50,{isStatic:true});
 World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,1200,50);
}

}
