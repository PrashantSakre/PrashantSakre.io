# Rectangle


```js
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  function drawRectangle(positionX, positionY) {  
    ctx.fillStyle = 'red';  
    ctx.fillRect(positionX, positionY, 5, 15);  
  }
```