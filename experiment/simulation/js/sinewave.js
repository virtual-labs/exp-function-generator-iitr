

var flag;
var vp;
var posy1;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;
var p = 30;
var o = 15;
//----------------------------------------Channel 1------------------------------------------------------------//

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
    }
    
}

function posiy3chnge() {
    posy3 = document.getElementById("positiony3").value;
    if (flag == 3) {
        drawsquare();
    }
    
}


//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on the power to draw the graph");}
	else {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	document.getElementById("chhn1").disabled = false;
    drawAxis();
	drawGrid(ctx);
    sinwv();
    
	}
}



function sinwv() {
			flag=1;
	posy2 = document.getElementById("positiony2").value;// in msec  0.001; //in sec
//---------------------------------------------------------rectified  wave-------------------------------------------------------------------------------//

    J = parseFloat(document.getElementById("P1").value);
				 K = parseFloat(document.getElementById("P2").value);
				 L = parseFloat(document.getElementById("P3").value);
 var posy1 = document.getElementById("positiony1").value;
                 var canvas = document.getElementById("mycanvas");
                 var ctx = canvas.getContext("2d");
                 ctx.lineWidth = 3;
                 
                 // period
                 var o = 15; // oscillation
                 
                 
                
                 
                         n=600;
				posy1 = document.getElementById("positiony1").value;// in msec  0.001; //in sec
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

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
                                            

function drawsquare() {
	var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") {alert("Please turn on the power to draw the graph");}
	else {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	document.getElementById("chhn1").disabled = false;
    drawAxis();
	drawGrid(ctx);
    sqwv();
    
	}
}

function sqwv() {
		flag=3;
	posy2 = document.getElementById("positiony2").value;// in msec  0.001; //in sec
//---------------------------------------------------------rectified  wave-------------------------------------------------------------------------------//

    J = parseFloat(document.getElementById("P1").value);
				 K = parseFloat(document.getElementById("P2").value);
				 L = parseFloat(document.getElementById("P3").value);
  var posy3 = document.getElementById("positiony3").value;
                 var canvas = document.getElementById("mycanvas");
                 var ctx = canvas.getContext("2d");
                 ctx.lineWidth = 3;
                 
                 //var p = 3*document.getElementById("fq-knob").value; // period
                  var o=15;// oscillation
                 
                 
                
                 
                         n=600;
				posy1 = document.getElementById("positiony1").value;// in msec  0.001; //in sec
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//
ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*0.3*(squareY((x*K)+L));
							 ctx.strokeStyle="green";
                             ctx.lineTo(x, y + 10-(50*posy3));
                         }
                         ctx.stroke();

}