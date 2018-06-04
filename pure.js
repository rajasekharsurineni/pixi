//const imgSource = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2071497438,1114925463&fm=173&s=FDB03BD55001A119BB8401E503003030&w=550&h=289&img.JPG';
//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;
//Create a Pixi Application
 var app = new PIXI.Application(window.innerWidth, window.innerHeight,{ antialias: true });
var stage = app.stage;
// w=80,h=80;
app.renderer.backgroundColor = 0x061639;

// //   .add("images/img.png")
  
// app.renderer.autoResize = true;
$('.main').append(app.view);


   
  
$(window).resize(function () {     

if ($(window).width() <700)
    {
      console.log("resize")
      rect(40,40)
      app.renderer.resize(window.innerWidth, window.innerHeight,{ antialias: true });
      
    }
    
    else{
      
       app.renderer.resize(1000, 300,{ antialias: true });
    }
})
//load an image and run the `setup` function when it's done
// loader
//   .add("images/img.png")
//   .load(setup);
// function setup() {
//   //Create the `cat` sprite from the texture
//     cat = new PIXI.Sprite(resources["images/img.png"].texture);
//   //let cat = new PIXI.Sprite(resources['images/img.png'].texture);
//   cat.interactive = true;
//   cat.width=100;
//   cat.height=100;
//   //Position the sprite and change its width and height
//   cat.on('pointertap', function() {
//      alert("hi i'm pappy");
//   })
//   //You can use this alternative syntax to set the
//   //sprites anchor point, scale and rotation
//   /*
//   cat.anchor.set(0.5, 0.5);
//   cat.position.set(120, 120);
//   cat.scale.set(1.5, 3);
//   */
//   //Add the cat to the stage
//   app.stage.addChild(cat);
//}


  
 
  rectangle = new PIXI.Graphics();
   
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(10, 10, window.innerWidth/2, window.innerHeight/2);
    rectangle.endFill();
   
    // rectangle1.x = 20;
  
    stage.addChild(rectangle);
     console.log(stage.addChild)
    
  


    let rectangle1 = new PIXI.Graphics();
   
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawRect(800, 10, 80, 80);
    rectangle1.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle1);
let rectangle2 = new PIXI.Graphics();
   
    rectangle2.beginFill(0x66CCFF);
    rectangle2.drawRect(500, 10, 80, 80);
    rectangle2.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle2);