
var flag;
var vp;
var posy1, posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
    }
    if(flag==4){
       bthdhlfrc();
    }
    if(flag==5){
        grndhlfrc();
    }
}

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    
    if (flag == 2) {
       drawhlfrectifier();
    }
if(flag==4){
        bthdhlfrc();
    }
    if(flag==5){
       grndhlfrc();
    }
   
}
function posiy3chnge() {
    posy2 = document.getElementById("positiony3").value;
    
    if (flag == 3) {
       drawsquare();
    }
if(flag==4){
        bthdhlfrc();
    }
    if(flag==5){
       grndhlfrc();
    }
   
}


//----------------------------------------code for drawing sine wave and rectify output--------------------------------------------------//
function grndhlfrc() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on the power to draw the graph");}
	else{
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawAxis();
    drawGrid(ctx);
    sinerectifygrnd();
	}
}

function sinerectifygrnd(){
    
      flag=5;
	  var y0 = axes.y0, w = ctx.canvas.width;
    ctx.beginPath();
	ctx.lineWidth=5;
    ctx.strokeStyle = "red";
    ctx.moveTo(0, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.stroke();
}


