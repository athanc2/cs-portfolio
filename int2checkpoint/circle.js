/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 3;

draw = function() {

    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 257);
    line(xPos,yPos,0,2000);
    xPos = xPos + 2;
    yPos = yPos + 2;
    
    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 257);
    line(xPos,yPos,2000,0);
    xPos = xPos + 1;
    yPos = yPos + 1;
// Draws blue circles from Upper Left to Lower Right

    strokeWeight(3);
    stroke(57, 0, 214);
    fill(0, 210, 257);
    ellipse(xPos,yPos,100,100);
    xPos = xPos + 0;
    yPos = yPos + 0;
    
    strokeWeight(weight);
    stroke(57, 0, 214);
    fill(0, 210, 257);
    ellipse(height - xPos,yPos,100,100);
    xPos = xPos + 1;
    yPos = yPos + 1;
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
