


var flag;
var vp;
var posy1, posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec
var p = 30;
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
    posy3 = document.getElementById("positiony3").value;
    
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
function bthdhlfrc() {
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
    sinerectify();
	}
}

function sinerectify(){
    flag=4;
      J = parseFloat(document.getElementById("P1").value);
				 K = parseFloat(document.getElementById("P2").value);
				 L = parseFloat(document.getElementById("P3").value);
  var posy1 = document.getElementById("positiony1").value;
   var posy2 = document.getElementById("positiony2").value;
    var posy3 = document.getElementById("positiony3").value;
                 var canvas = document.getElementById("mycanvas");
                 var ctx = canvas.getContext("2d");
                 ctx.lineWidth = 3;
                 
                 var p = 30 // period
                 var o = 15; // oscillation
                 
                 
                 var n = 0;
                 animate();
                 
                 function animate() {
                         //requestAnimationFrame(animate);
                 
                         // Drawing code goes here
                         n=600;
             
                         
                         ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*0.3*(squareY((x*K)+L));
							 ctx.strokeStyle="green";
                             ctx.lineTo(x, y + 10-(50*posy3));
                         }
                         ctx.stroke();
                     
                        ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*0.3*(triY((x*K)+L));
							 ctx.strokeStyle="blue";
                             ctx.lineTo(x, y+ 130-(50*posy2));
                         }
                      ctx.stroke();
                             
                         ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*2*(Math.sin((x*K/5)+L));
							 ctx.strokeStyle="orange";
                             ctx.lineTo(x, y +280-(50*posy1));
                         }
                         ctx.stroke();
                 }

    

function squareY(x) {
                                                return( (x%p)<o?o:0 );
                                            }
                                            
                                            
                                            // triangular sine
                                            function triY(x){
                                                return( Math.abs((x%p)-o) );
                                            }}

 
