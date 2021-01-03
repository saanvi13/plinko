const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var particles = [];
var divisions = [];

var ground, engine, world;

function setup() {
  
  createCanvas(1200,650);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground (300,645,2000,20);
  ground2 = new Ground (0,325,10,1000);
  ground3 = new Ground (1200,325,10,1000);

  for (var d = 0 ; d <= 1200 ; d = d + 80){
    divisions.push(new Division (d,500,10,300));
  }
  
  for (var p = 40 ; p <= 1200 ; p = p + 50){
    plinkos.push(new Plinko(p,65,10));
  }

  for (var p = 15 ; p <= 1200 ; p = p + 50){
    plinkos.push(new Plinko(p,145,10));
  }

  for (var p = 40 ; p <= 1200 ; p = p + 50){
    plinkos.push(new Plinko(p,235,10));
  }

  for (var p = 15 ; p <= 1200 ; p = p + 50){
    plinkos.push(new Plinko(p,325,10));
  }
  
}

function draw(){

      Engine.update(engine);

      background(0);  

      if (frameCount % 20 === 0){
        particles.push(new Particle(random(1200,280),10,10));
      }

      for (var a = 0 ; a < divisions.length ; a++){
        divisions[a].display();
      }

      for (var b = 0 ; b < plinkos.length ; b++){
        plinkos[b].display();
      }

      for (var c = 0 ; c < particles.length ; c++){
        particles[c].display();
      }

      ground.display();
      ground2.display();
      ground3.display();

}