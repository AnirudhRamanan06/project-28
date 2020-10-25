class Mango{
       constructor(){
           var options={
               isStatic:true,
               restitution:1,
               friction:1
           }
           this.radius=radius;
           this.body = Bodies.circle(x, y, this.r,options); 
           
       }

 display(){
     push();
     fill (this.image.color);
     pop();
 }      
       
}