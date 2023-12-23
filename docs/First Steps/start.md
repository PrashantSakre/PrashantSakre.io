

As all things begin with simple steps let's create or draw the rectangle in canvas


```js
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  var spaceShip = [{x: 200, y: 490},  {x: 210, y: 490},  {x: 220, y: 490},  {x: 230, y: 490},  {x: 210, y: 480}, {x: 220, y: 480}]


  function spaceShipBox(ship) {  
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(ship.x, ship.y, 10, 10);
  }

  function drawShip() {
    spaceShip.forEach(spaceShipBox);
  }

```



```js
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");

  var spaceShip = [{x: 200, y: 490},  {x: 210, y: 490},  {x: 220, y: 490},  {x: 230, y: 490},  {x: 210, y: 480}, {x: 220, y: 480}]

  var lasterBullets = [];

  function clearCanvas() {   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  
  function spaceShipBox(ship) {  
    ctx.fillStyle = 'lightgreen';  
    // ctx.strokestyle = 'lightgreen';
    ctx.fillRect(ship.x, ship.y, 10, 10);  
    // ctx.strokeRect(ship.x, ship.y, 10, 10);
  }

  function drawShip() {  
    // clearCanvas();
    spaceShip.forEach(spaceShipBox);
  }

  function moveShipOnceRight() {
    // clearCanvas();
    spaceShip = spaceShip.map(ship => {
      return { x: ship.x = ship.x + 10,...ship}
    });
    // drawShip()
  }
  
  function moveShipOnceLeft() {
    // clearCanvas();
    spaceShip = spaceShip.map(ship => {
      return { x: ship.x = ship.x - 10,...ship}
    });
    // drawShip()
  }
  
  function moveShipRight() {
    // clearCanvas();
    spaceShip = spaceShip.map(ship => {
      return { x: ship.x = ship.x + 14,...ship}
    });
    // drawShip()
  }
  
  function moveShipLeft() {
    // clearCanvas();
    spaceShip = spaceShip.map(ship => {
      return { x: ship.x = ship.x - 14,...ship}
    });
    // drawShip()
  }

  document.addEventListener("keydown", changeShipDirection);
  document.addEventListener("keydown", fireLaser);
  
  function changeShipDirection(event) {
    const LEFT_KEY = 37;  
    const RIGHT_KEY = 39;
    const keyPressed = event.keyCode;
  
    if(event.repeat) {
      if(keyPressed === RIGHT_KEY) {
        if(isShipCanMoveRight()) moveShipRight();
      }
      if(keyPressed === LEFT_KEY) {
        if(isShipCanMoveLeft()) moveShipLeft();
      }
    } else {
      if(keyPressed === RIGHT_KEY) {
        if(isShipCanMoveRight()) moveShipOnceRight();
      }
      if(keyPressed === LEFT_KEY) {
        if(isShipCanMoveLeft()) moveShipOnceLeft();
      }
    }
  }
  // var laserPosition = {x: 400, y: 400};

  function isShipCanMoveRight() {
    return !(spaceShip[3].x >= ctx.canvas.width - 10)
  }

  function isShipCanMoveLeft() {
    return spaceShip[3].x > 40 && ctx.canvas.width - 10
  }
  
  function drawLaser(laser) {  
    ctx.fillStyle = 'red';  
    ctx.strokestyle = 'red';
    ctx.fillRect(laser.x, laser.y, 5, 15);  
    ctx.strokeRect(laser.x, laser.y, 5, 15);
  }
  
  function moveLaserUpOnce() {
    // clearCanvas();
    lasterBullets = lasterBullets.map(laser => { return { x: laser.x, y: laser.y - 1} })
    // laserPosition = { x: laserPosition.x, y: laserPosition.y - 2};
    // drawLaser(laserPosition);
  }
  
  function getSpaceShipPosition() {
    return {x: spaceShip[spaceShip.length-1].x-2, y: spaceShip[spaceShip.length-1].y - 15}
  }
  
  function drawLasers() {
    lasterBullets.forEach(drawLaser)

    const shootLaserInterval = setInterval(() => {
      moveLaserUpOnce()
    }, 100)
  
    setTimeout(() => {
      clearInterval(shootLaserInterval);
    }, 1000)
  }
  
  
  // function shootLaser(position) {
  //   var laserPositionAtShoot = position;
  
  //   const shootLaserInterval = setInterval(() => {
  //     // clearCanvas();
  //     laserPositionAtShoot = { x: laserPositionAtShoot.x, y: laserPositionAtShoot.y - 2};
  //     drawLaser(laserPositionAtShoot);
  //   }, 5)
  
  //   setTimeout(() => {
  //     clearInterval(shootLaserInterval);
  //   }, 2000)
    
  // }
  
  function fireLaser(event) {
    const SPACE_KEY = 32;  
    const keyPressed = event.keyCode;
  
    if(keyPressed === SPACE_KEY) {
      lasterBullets.push(getSpaceShipPosition())
      // shootLaser(getSpaceShipPosition());
      moveLaserUpOnce()
    }
  }

// function drawGame() {
//   // clearCanvas();
//   drawShip();
// }

// function update() {
//   gameInit().drawShip();
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   gameInit().drawShip();
// }

// function render(){
// 	draw();
// 	update();
// 	// console.log("in render");
// 	// counter++;

// 	// similar to setInterval()
// 	if(gameInit().gameOver == false){
// 		// similar to setInterval()
// 		window.requestAnimationFrame(render);
// 	}
// 	else{
// 		startGame();
// 	}
// }

// function startGame() {
//   gameInit();
//   render();
// }


// startGame();

  function drawText(ele) {
    ctx.font="30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText(ele.innerText, ele.offsetLeft, ele.offsetTop + ele.offsetHeight);
  }
```