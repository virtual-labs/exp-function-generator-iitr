

var flag;
var vp;
var posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec
var p = 30;
var o = 15;
//----------------------------------------Channel 2------------------------------------------------------------//


function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;

    if (flag == 2) {
        drawhlfrectifier();
    }


}






//----------------------------------------code for drawing rectify output--------------------------------------------------//
function drawhlfrectifier() {
    var bttn = document.getElementById('onff').value;
    if (bttn == "Power:Off") { alert("Please turn on the power to draw the graph"); }
    else {
        canvas = document.getElementById("mycanvas");
        if (null == canvas || !canvas.getContext)
            return;
        ctx = canvas.getContext("2d");
        // fill canvas
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        document.getElementById("chhn1").disabled = false;
        document.getElementById("chhn2").disabled = false;
        document.getElementById("dual").disabled = false;
        document.getElementById("grnd").disabled = false;
        drawAxis();
        drawGrid(ctx);
        rectfy();
    }
}

function rectfy() {

    posy2 = document.getElementById("positiony2").value;// in msec  0.001; //in sec
    //---------------------------------------------------------rectified  wave-------------------------------------------------------------------------------//

    J = parseFloat(document.getElementById("P1").value);
    K = parseFloat(document.getElementById("P2").value);
    L = parseFloat(document.getElementById("P3").value);
    var posy2 = document.getElementById("positiony2").value;
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;

    // period
    var o = 15; // oscillation




    n = 600;




    ctx.beginPath();
    for (var x = 0; x < n; x++) {
        var y = J * 0.3 * (triY((x * K) + L));
        ctx.strokeStyle = "blue";
        ctx.lineTo(x, y + 130 - (50 * posy2));
    }
    ctx.stroke();




    // squared sine

}

function triY(x) {
    return (Math.abs((x % p) - o));
}

