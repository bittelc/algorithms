var originX = width/2;
var originY = height/2;
strokeWeight(9);
point(originX, originY);
strokeWeight(1);

var radius = 100;
var theta = 90;

var drawRecursive = function(x, y) {
    
    theta = theta - 1; // in degrees
    radius = radius - 0.1;
    stroke(radius * 3, radius * 3, radius * 3);
    var newX = radius * cos(theta);
    var newY = radius * sin(theta);

    line(originX + x, originY + y, originX + newX, originY + newY);
    
    if (radius < 0) {
        return true;
    }
    drawRecursive(newX, newY);
};

drawRecursive(0, radius);

