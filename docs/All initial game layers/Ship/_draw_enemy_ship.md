



                              1111111111
                          111111111111111111
                         111  1111111111  111
                        1111111111111111111111
                         111111111  111111111
                           1111  1111  1111
                        1111              1111
                          11             11


```js
 var space = 6;
                            { x: posX + 6, y: posY } // color width 10
                            { x: posX + 2, y: posY + 1 }   // color width 18
                        // color width 3                // black width 2                //   color   width 10    // color width 3      
            { x: posX + (space/2), y: posY + 10}{ x: posX + space, posY + 10 }{ x: posX + (space * 3), y: posY + 10}{ x: posX + ((space * 3) + 4), y: posY + 10}
            // color width 22
            { x: posX, y: posY + 15}

            // color width 11                    // black width 2
            { x: posX + (space/2), y: posY + 20}{ x: posX + (space + 11), y: posY + 20} {x: posX + ((space * 3) + (space/2))}
```

```js
class enemyShipClass {
  blackRect = new rectangle(5, 5, 'black');

  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.l1 = new rectangle(30, 4, color)
    this.l2 = new rectangle(50, 4, color)
    this.l10 = new rectangle(10, 4, color)
    this.l20 = new rectangle(20, 4, color)
    this.l15 = new rectangle(15, 4, color)
    this.logRect = new rectangle(70, 4, color)
    this.l30 = new rectangle(30, 4, color)
    this.l5 = new rectangle(5, 4, color)
  }

  draw() {
    this.l1.draw(this.positionX + 20, this.positionY)

    this.l2.draw(this.positionX + 10, this.positionY + 4)

    this.l20.draw(this.positionX, this.positionY + 8)
    this.blackRect.draw(this.positionX + 20, this.positionY + 8)
    this.l20.draw(this.positionX + 25, this.positionY + 8)
    this.blackRect.draw(this.positionX + 45, this.positionY + 8)
    this.l20.draw(this.positionX + 50, this.positionY + 8)

    this.logRect.draw(this.positionX, this.positionY + 12)

    this.l30.draw(this.positionX, this.positionY + 16)
    this.blackRect.draw(this.positionX + 30, this.positionY + 16)
    this.blackRect.draw(this.positionX + 35, this.positionY + 16)
    this.l30.draw(this.positionX + 40, this.positionY + 16)

    this.logRect.draw(this.positionX, this.positionY + 20)

    this.l15.draw(this.positionX +5, this.positionY + 24)
    this.l10.draw(this.positionX +30, this.positionY + 24)
    this.l15.draw(this.positionX +50, this.positionY + 24)

    this.l10.draw(this.positionX +2, this.positionY + 28)
    this.l10.draw(this.positionX +58, this.positionY + 28)

    this.l5.draw(this.positionX + 10, this.positionY + 32)
    this.l5.draw(this.positionX + 54, this.positionY + 32)
  }
}
```