var container = document.getElementById('container');
var graphMeasurement = document.getElementById('graph-measurement');

var allCircles = document.getElementsByTagName('circle');
var allLines = document.getElementsByTagName('line');

//console.log(topSVGNode)



var destArray = [15,52,28,170,105,93,44, 122, 179, 170, 220];


TweenMax.set(allCircles, {
  attr:{fill:'#954CE9', r:5},
  transformOrigin:'50% 50%',
  scale:0
})
TweenMax.set([allLines], {
  attr:{stroke:'#18B5DD'},
  drawSVG:'100% 100%',
  strokeWidth:2
})
TweenMax.set([graphMeasurement], {
  attr:{stroke:'#18B5DD'},
  drawSVG:'100% 100%',
  strokeWidth:1
})

TweenMax.set([allCircles, allLines], {
  y:'+=300'
})

TweenMax.set(graphMeasurement, {
  y:'+=280',
  alpha:0.3
})
TweenMax.to(graphMeasurement,3, {
  drawSVG:'0% 100%',
  delay:1,
    ease:Power2.easeInOut
})
TweenMax.set('svg', {
  alpha:1
})
for(var i = 0; i < allCircles.length; i++){
  
  TweenMax.to(allCircles[i], 2, {
    attr:{cy:'-=' + destArray[i]},
    onUpdate:moveLines,
    onUpdateParams:[i],
    delay:i/5,
    ease:Power4.easeInOut
  })
  	if(allLines[i]){
      
      TweenMax.to(allLines[i], 1, {
        drawSVG:'400',
        delay:i/5,
        ease:Power4.easeInOut
      })     
    }

    TweenMax.to(allCircles[i], 1, {
     scale:1,
      delay:i/5,
    ease:Power4.easeInOut
   })
  
}

function moveLines(i){

  if(allLines[i]){

    TweenMax.set(allLines[i], {
       attr:{
         x2:allCircles[i].getAttribute('cx'), y2:allCircles[i].getAttribute('cy')
       }     
     })
   TweenMax.set(allLines[i], {
       attr:{
         x1:allCircles[i+1].getAttribute('cx'), y1:allCircles[i+1].getAttribute('cy')
       }     
     })   
    

}
}