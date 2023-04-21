//   TO DO
// freeze button #2  dont use 1,gravity needs to be changed to be able to freeze✔️
// bigger and smaller character buttons#3
// disappear on contact with enemy 
// collision detecter✔️ 
// interesting map(platforms,details)  #1 ✔️
// add detail to character(face,sword,legs)
// restart button

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
    this.line = {
      position:this.position,
      height:-1000,
      width:1
    }
  }
// creating the character
  draw(color) {
    c.fillStyle = color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height,this.ablock);
    c.fillRect(this.ablock.position.x,this.ablock.position.y,this.ablock.width,this.ablock.height)
    c.fillRect(this.fight.position.x,this.fight.position.y,this.fight.width,this.fight.height)
    c.fillRect(this.line.position.x,this.line.position.y,this.line.width,this.line.height)
    c.fillStyle = "black";
    c.fillRect(512,500,100,50)
  }
  // updating the game positions
  update(color) {
		c.fillStyle = color
    this.draw();
    this.position.y = this.velocity.y + this.position.y;
		this.position.x = this.velocity.x + this.position.x;
    

// platform code
if (this.position.x > 500 && this.position.x < 612 && this.position.y + 150 + this.velocity.y > 500 && this.position.y +150 + this.velocity.y < 550){
  this.velocity.y = -1
  
}
if (this.position.x + 100 > 500 && this.position.x + 100 < 612 && this.position.y + 150 + this.velocity.y > 500 && this.position.y +150 + this.velocity.y < 550){
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
  position: { x: 695, y: 20 },
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
  if (player.position.x >= bob.position.x  && player.position.x + player.width <= bob.position.x + bob.width ){
    console.log("collision detected")
   }
  if (player.position.x >= enemy.position.x  && player.position.x + player.width <= enemy.position.x + enemy.width ){
    console.log("collision detected")
   }
  if (enemy.position.x >= bob.position.x  && enemy.position.x + enemy.width <= bob.position.x + bob.width ){
    console.log("collision detected")
   } 
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
  break
 case 'o':
player.width = 300
player.height = 300
case 'i':
player.width = 50
player.height = 50
case '=':
player.height = 150
player.width = 100

case ' ':
  bob.velocity.y = bob.velocity.y -20
  player.velocity.y = player.velocity.y -20
  enemy.velocity.y = enemy.velocity.y -20
  break
}
// logs the information in the console
console.log(event.key)
})