/* global 
draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400,400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
       
    background(153, 101, 21);
        
    // Draws syrup (Function ✓)
    drawSyrup = function(x,y){
        fill(255, 204, 51);
        noStroke();
        ellipse(x ,y ,40, 40);
    };
    
    // Draws white circles (Eating)
    drawEat = function(x,y){
        fill(255,255,255);
        noStroke();
        ellipse(x,y,100,100);
    };
    
    // Drag mouse to draw syrup (One way to interact ✓)
    mouseDragged = function(){
        drawSyrup(mouseX, mouseY);
    };
    
    // Click mouse to draw white circle (Eat)
    mouseClicked = function(){
        drawEat(mouseX,mouseY);
    };
        
    // Background squares (Loop ✓)
    for(var i = 0; i < width; i+=30) {
        for(var j = 0; j < height; j+=30){
            fill(0,0);
            stroke(191, 138, 55);
            strokeWeight(3);
            rect(i,j,22,22);
        }
    }

    draw = function() {
        frameRate(0);
    
    // If mouseX 200x it will become rectangle (if/else function ✓)
    if(mouseX > 200){
        mouseDragged = function() {
        rect(mouseX,mouseY,40,40); 
        fill(255, 204, 51)
        noStroke()
        };
    }
    // If mouseX 200x it will stay draw Syrup by dragging
    else {
        mouseDragged = function(){
        drawSyrup(mouseX, mouseY);
    };
    }
    
    };
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
