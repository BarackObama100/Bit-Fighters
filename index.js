//   TO DO
// add detail to character(face,sword,legs)
// add victory feature #1
// you dont die if you hit someone
// 3 lives
// accurate detector
// higher velocity = who hit the person
// restart button✔️
// platforms ✔️
// collision detecter✔️ 
// bigger and smaller character buttons✔️
// freeze button✔️       (dont use 1,gravity needs to be changed to be able to freeze)
// disappear on contact with enemy ✔️
// add levels✔️


// To Learn
// add blocks that can operate
// detection system for the platform thats within a range
//
//
//

// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1390;
canvas.height = 576;
c.fillStyle = 'lightblue';
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 1
class Sprite {
  // the properties of the character
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.width = 100;
    this.ablock = {
        position:this.position,
        height: 75,
        width: 125
    }
    this.fight = {
        position:this.position,
        height: 75,
        width: -25
    }
   // this.line = {
     // position:this.position,
     // height:-1000,
     // width:1
  //  }
  }
// creating the character
  draw(color) {
    c.fillStyle = color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height,this.ablock);
    c.fillRect(this.ablock.position.x,this.ablock.position.y,this.ablock.width,this.ablock.height)
    c.fillRect(this.fight.position.x,this.fight.position.y,this.fight.width,this.fight.height)
    c.fillStyle = "black";
    c.fillRect(630,500,100,-50)
  }
  // updating the game positions
  update(color) {
		c.fillStyle = color
    this.draw();
    this.position.y = this.velocity.y + this.position.y;
		this.position.x = this.velocity.x + this.position.x;
    

// platform code
if (this.position.x > 600 && this.position.x < 730 && this.position.y + 300 + this.velocity.y > 600 && this.position.y +300 + this.velocity.y < 700){
  this.velocity.y = -1
  
}
if (this.position.x + 100 > 600 && this.position.x + 250 < 730 && this.position.y + 300 + this.velocity.y > 600 && this.position.y +150 + this.velocity.y < 7){
  this.velocity.y = -1
  
}

  
// the barriers for the game
if (this.position.x >= 1390){
    this.velocity.x = 0
    this.position.x = 1390
}

if (this.position.x <= 0){
  this.velocity.x = 0
  this.position.x = 0
}

    if (this.position.y + this.velocity.y + this.height >= canvas.height){
    this.velocity.y = 0


    }
   else if (this.position.y <= 0){
      this.velocity.y = 0
  
  
      }
  

        else {
        this.velocity.y = this.velocity.y //+ gravity
      
        }
    }
  }

// the position of the character
const player = new Sprite({
  position: { x: 20, y: 20 },
  velocity: { x: 0, y: 10 },
});
const bob = new Sprite({
  position: { x: 630, y: 20 },
  velocity: { x: 0, y: 10 },
});
const enemy = new Sprite({
  position: { x: 1270, y: 20 },
  velocity: { x: 0, y: 10 },
});
// running the game and its colors
function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = "grey";
	c.fillRect(0,0,canvas.width,canvas.height)
	player.update("blue");
	enemy.update("red");
  bob.update("orange")
  // collision detector
  if (player.position.x >= bob.position.x  && player.position.x + player.width <= bob.position.x + bob.width && player.position.y >= bob.position.y  && player.position.y + player.height <= bob.position.y + bob.height ){
    console.log("collision detected")
    player.velocity.y = 5000
    bob.velocity.y = 5000

   }
  if (player.position.x >= enemy.position.x  && player.position.x + player.width <= enemy.position.x + enemy.width && player.position.y >= enemy.position.y  && player.position.y + player.height <= enemy.position.y + enemy.height){
    console.log("collision detected")
    enemy.position.y = 5000
    player.position.y = 5000
   }
  if (enemy.position.x >= bob.position.x  && enemy.position.x + enemy.width <= bob.position.x + bob.width && enemy.position.y >= bob.position.y  && enemy.position.y + enemy.height <= bob.position.y + bob.height ){
    console.log("collision detected")
    enemy.velocity.y = 5000
    bob.velocity.y = 5000

   } 

}
if (player.position.x = 1000 < 0){
  console.log('victorys')
}
animate();
// the movement controls for the characters
window.addEventListener("keydown",(event) =>{
switch(event.key){
case 'w':
player.velocity.y = player.velocity.y -20
break
case 's':
player.velocity.y = player.velocity.y +10
break
case 'a':
player.velocity.x = player.velocity.x -5
break
case 'd':
player.velocity.x = player.velocity.x +5
break

case 'ArrowUp':
  enemy.velocity.y = enemy.velocity.y -20
break
case 'ArrowDown':
enemy.velocity.y = enemy.velocity.y +20
break
case 'ArrowLeft':
enemy.velocity.x = enemy.velocity.x -5
break
case 'ArrowRight':
enemy.velocity.x = enemy.velocity.x +5
break
case '8':
bob.velocity.y = bob.velocity.y -20
break
case '5':
  bob.velocity.y = bob.velocity.y +20
break
case '4':
  bob.velocity.x = bob.velocity.x -10
break
case '6':
  bob.velocity.x = bob.velocity.x +10
break

case '3':
  player.velocity.x = 0
  break
case '7':
  player.velocity.y = 0
  player.velocity.x = 0
  bob.velocity.y = 0
  bob.velocity.x = 0
  enemy.velocity.y = 0
  enemy.velocity.x = 0
  break
 case '1':
player.width = 200
player.height = 200
bob.width = 200
bob.height = 200
enemy.width = 200
enemy.height = 200
break
case '2':
player.width = 30
player.height = 30
bob.width = 30
bob.height = 30
enemy.width = 30
enemy.height = 30
break

case ' ':
  bob.velocity.y = bob.velocity.y +20
  player.velocity.y = player.velocity.y +20
  enemy.velocity.y = enemy.velocity.y +20
  break
}
// logs the information in the console
console.log(event.key)
})