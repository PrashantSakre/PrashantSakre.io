


```md
                                                         { x: 100 + 15, y: 150 }                                                

                                          { x: 100 + 10, y: 150 + 10 } { x: 100 + 20, y: 150 + 10 } 

                  { x: 100, y: 150 + 20 } { x: 100 + 10, y: 150 + 20 } { x: 100 + 20, y: 150 + 20 } { x: 100 + 30, y: 150 + 20 }




                                                          { x: posX + 15, y: posY }

                                            { x: posX + 10, y: posY + 10 } { x: posX + 20, y: posY + 10 } 

                  { x: posX, y: posY + 20 } { x: posX + 10, y: posY + 20 } { x: posX + 20, y: posY + 20 } { x: posX + 30, y: posY + 20 }
```


Then modified it to appropriate rectangles

```js
  draw() {
    this.rect_gun.draw(this.positionX + 17, this.positionY)
    this.rect_body.draw(this.positionX + 8, this.positionY + 8)
    this.rect_base.draw(this.positionX, this.positionY + 16)
  }
```