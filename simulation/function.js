
              function cal() {
              
                 J = parseFloat(document.getElementById("P1").value);
				 K = parseFloat(document.getElementById("P2").value);
				 L = parseFloat(document.getElementById("P3").value);
 
                 var canvas = document.getElementById("C1");
                 var ctx = canvas.getContext("2d");
                 ctx.lineWidth = 3;
                 
                 var p = 30; // period
                 var o = 15; // oscillation
                 
                 var fps = 60;
                 var n = 0;
                 animate();
                 
                 function animate() {
                         requestAnimationFrame(animate);
                 
                         // Drawing code goes here
                         n += 1;
                         if (n > 500) {
                             n = 0;
                         }
                         ctx.clearRect(0, 0, canvas.width, canvas.height);
             
                         
                         ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*0.3*(squareY((x*K)+L));
                             ctx.lineTo(x, y + 10);
                         }
                         ctx.stroke();
                     
                        ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*0.3*(triY((x*K)+L));
                             ctx.lineTo(x, y + 280);
                         }
                      ctx.stroke();
                             
                         ctx.beginPath();
                         for (var x = 0; x < n; x++) {
                             var y = J*(Math.sin((x*K/5)+L));
                             ctx.lineTo(x, y + 580);
                         }
                         ctx.stroke();
                 }
                 
                                              // squared sine
                                              function squareY(x) {
                                                return( (x%p)<o?o:0 );
                                            }
                                            
                                            // sawtooth sine
                                            function sawY(x){
                                                return( x%p );
                                            }
                                            
                                            // triangular sine
                                            function triY(x){
                                                return( Math.abs((x%p)-o) );
                                            }
            }



