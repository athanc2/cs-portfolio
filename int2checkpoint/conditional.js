/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    background();
    // Changes the shape's looks based on X position
    if(mouseX > 200){
        ellipse(mouseX,mouseY,30,30); 
        fill(255,255,0)
        strokeWeight(3);
        stroke(10,10,10);
        mouseClicked = function() { // Click on right side to change to yellow color
            background(255,255,0);
        }
    }
    
    else {
        fill(250,0,0);
        strokeWeight(2);
        stroke(0,0,250);
        rect(mouseX,mouseY,30,30);
        mouseClicked = function() {
            background(255,0,0); // Click on left side to change to red color
        }
    }
};    
   

    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);


