
var context;
var size;
var center_pos;
var z_rotation;
var pos;
var degree1 = 0,degree2 = 0;
window.addEventListener("load", function(){
    var canvas = document.getElementById("ese");
    context = canvas.getContext('2d');
    makeb(0);
    makeb(9);
});

//Debug
function makeb(deg) {
    //context.clearRect(0,0,300,300);
    degree2 = deg * 10;
    setpos();
    make();
}

function setpos() {
    pos = [[-50,-50,-50],[-50,-50,50],[50,-50,50],[50,-50,-50],[-50,-50,-50],
    [-50,50,50],[50,50,50],[50,50,-50],[-50,50,-50]]//[[0,0,0],[100,0,0],[100,0,100],[0,0,100]];
    for(var i = 0;i < pos.length;i++) {
        var x,y,p = pos[i];
        console.log(p);
        x = p[0]  * Math.cos(degree2 * (Math.PI / 180)) - p[2] * Math.sin(degree2 * (Math.PI / 180));
        //- pos[i][0] * Math.sin(degree1 * (Math.PI / 180)) + pos[i][1] * Math.cos(degree1 * (Math.PI / 180));
        y = p[0] * Math.sin(degree1 * (Math.PI / 180)) * Math.sin(degree2 * (Math.PI / 180)) * (-1) + p[1] * Math.cos(degree1 * (Math.PI / 180)) - p[2] * Math.sin(degree1 * (Math.PI / 180)) * Math.cos(degree2 * (Math.PI / 180));
        //- pos[i][0] * Math.cos(degree1 * (Math.PI / 180)) * Math.sin(degree2 * (Math.PI / 180)) - pos[i][1] * Math.sin(degree1 * (Math.PI / 180)) * Math.cos(degree2 * (Math.PI / 180)) + pos[i][2] * Math.cos(degree2 * (Math.PI / 180));
        console.log(x + ":" + y);
        //pos[i][0] = 0;
        //pos[i][1] = 40;
        pos[i][0] = x + 100;
        pos[i][1] = y + 100;
    }
}

var make = () => {
    context.beginPath();
    context.moveTo(pos[1][0], pos[1][1]);
    context.lineTo(pos[2][0], pos[2][1]);
    context.lineTo(pos[3][0], pos[3][1]);
    context.lineTo(pos[4][0], pos[4][1]);
    context.lineTo(pos[1][0], pos[1][1]);
    context.lineTo(pos[5][0], pos[5][1]);
    context.lineTo(pos[6][0], pos[6][1]);
    context.lineTo(pos[7][0], pos[7][1]);
    context.lineTo(pos[8][0], pos[8][1]);
    context.moveTo(pos[2][0], pos[2][1]);
    context.lineTo(pos[6][0], pos[6][1]);
    context.moveTo(pos[3][0], pos[3][1]);
    context.lineTo(pos[7][0], pos[7][1]);
    context.moveTo(pos[4][0], pos[4][1]);
    context.lineTo(pos[8][0], pos[8][1]);
    context.lineTo(pos[5][0], pos[5][1]);
    /*
    context.beginPath();
    context.moveTo(pos[0][0],pos[0][1]);
    for(var i = 1;i < pos.length;i++) {
        context.lineTo(pos[i][0],pos[i][1]);
    }
    context.closePath();
    */
    /*
    context.moveTo(pos[0][0],pos[0][1] + 200);
    for(var i = 1;i < pos.length;i++) {
        context.lineTo(pos[i][0],pos[i][1] + 200);
    }
    context.closePath();
    for(var i = 0;i < pos.length - 1;i++) {
        context.moveTo(pos[i][0],pos[i][1]);
        context.lineTo(pos[i][0],pos[i][1] + 200);
        context.closePath();
    } 
    */
    context.stroke();
};