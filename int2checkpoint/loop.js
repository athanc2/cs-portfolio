/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(900,600);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

   
  background(random(255),random(255),random(255))

draw = function() {
    frameRate(0);
    
    fill(random(255),random(255),random(255))
    strokeWeight(random(15))
    stroke(0,0,0)
    ellipse(mouseX,mouseY,30,30)
    
        for(var i = 0; i < width; i+=30) {
            for(var j = 0; j < height; j+=30){
                var size = random(100);
                fill(0,0);
                stroke(random(255),random(255),random(255));
                strokeWeight(random(5));
                ellipse(i,j,size,size);
            }
        }
     
    
    w = function() {
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
