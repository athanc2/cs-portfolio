/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(800,800);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
    
    background(30,30,30)
    
    drawBear = function(x,y){
        stroke(0,0,0);
        strokeWeight(2);
        fill(random(255),random(255),random(255));
        ellipse(x ,y ,40, 50);
        // Ears random color fill(random(255),random(255), random(255)); ellipse(x - 10, y - 20, 15, 20);  ellipse(x + 10, y - 20, 15, 20);
        // Eyes random color
        fill(0,0,0);
        ellipse(x - 6, y, 6, 5);
        ellipse(x + 6, y, 6, 5);
        fill(random(255),random(255),random(255));
        line(x - 4, y + 6, x + 4, y + 6); 
    };
    
    mouseClicked = function(){
        drawBear(mouseX, mouseY);
    };
  

    draw = function() {
    
    };
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
