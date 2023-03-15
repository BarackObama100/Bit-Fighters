// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
c.fillStyle = 'lightblue';
c.fillRect(0, 0, canvas.width, canvas.height);
const gravity = 1
class Sprite {
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
  }
  draw(color) {
    c.fillStyle = color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height,this.ablock);
    c.fillRect(this.ablock.position.x,this.ablock.position.y,this.ablock.width,this.ablock.height)
  }
  update(color) {
		c.fillStyle = color
    this.draw();
    this.position.y = this.velocity.y + this.position.y;
		this.position.x = this.velocity.x + this.position.x;
    


if (this.position.x >= 1000){
    this.velocity.x = 0
    this.position.x = 1000
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
    else{
      this.velocity.y = this.velocity.y + gravity


    }
  }
}
const player = new Sprite({
  position: { x: 20, y: 20 },
  velocity: { x: 0, y: 10 },
});

const enemy = new Sprite({
  position: { x: 900, y: 20 },
  velocity: { x: 0, y: 10 },
});
function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = "grey";
	c.fillRect(0,0,canvas.width,canvas.height)
	player.update("blue");
	enemy.update("red");
}
animate();
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
  enemy.velocity.y = enemy.velocity.y -10
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

}

console.log(event.key)
})