
let type = "WebGL"
    let resources=PIXI.loader.resources;
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

        var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
var stage = app.stage;

//prepare circle texture, that will be our brush
var brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 10);
brush.endFill();

// PIXI.loader.add("t1","images/img.png" )
// PIXI.loader.add("t2", "images/img1.png")
PIXI.loader.load(setup);
PIXI.loader.load(setupp);
PIXI.loader.load(setuppp);
PIXI.loader.load(setuup);
PIXI.loader.load(setuupp);
function setup(loader, resources) {
    //var background = new PIXI.Sprite(resources["t1"].texture);
    let rectangle = new PIXI.Graphics();
   
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(10, 10, window.innerWidth/6, window.innerHeight/4);
    rectangle.endFill();
    // rectangle.x = 100;
    // rectangle.y = 100;
    stage.addChild(rectangle);
    // rectangle.width = app.screen.width;
    // rectangle.height = app.screen.height;
    // let circle = new PIXI.Graphics();
    //     circle.beginFill(0x9966FF);
    //     circle.drawCircle(25, 25, 15);
    //     circle.endFill();
    //     // circle.x = 100;
    //     // circle.y = 10;
    // stage.addChild(circle);
    let num= new PIXI.Text("2000")
    num.x=25;
    num.y=25;
    stage.addChild(num)
    var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    var renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    num.mask = renderTextureSprite;
    //circle1.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    var dragging = false;

    function pointerMove(event) {
        
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}
function setupp(loader, resources) {
   let rectangle1 = new PIXI.Graphics();
   
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawRect(1000, 10, window.innerWidth/6, window.innerHeight/4);
    rectangle1.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle1);
    //var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
    //  let circle1 = new PIXI.Graphics();
    //     circle1.beginFill(0x9966FF);
    //     circle1.drawCircle(1020, 25, 15);
    //     circle1.endFill();
    //     // circle1.x = 100;
    //     // circle1.y = 100;
    // stage.addChild(circle1);
    // circle.width = 10;
    // circle.height = 10;
let num= new PIXI.Text("20")
    num.x=1020;
    num.y=25;
    stage.addChild(num)
    var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    var renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    //circle.mask = renderTextureSprite;
    num.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    var dragging = false;

    function pointerMove(event) {
        
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}
function setuppp(loader, resources) {
   let rectangle1 = new PIXI.Graphics();
   
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawRect(500, 10, window.innerWidth/6, window.innerHeight/4);
    rectangle1.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle1);
    //var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
    //  let circle1 = new PIXI.Graphics();
    //     circle1.beginFill(0x9966FF);
    //     circle1.drawCircle(520, 55, 15);
    //     circle1.endFill();
    //     // circle1.x = 100;
    //     // circle1.y = 100;
    // stage.addChild(circle1);
    // circle.width = 10;
    // circle.height = 10;
    let num= new PIXI.Text("00")
    num.x=200;
    num.y=15;
    stage.addChild(num)
    var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    var renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    //circle.mask = renderTextureSprite;
    num.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    var dragging = false;

    function pointerMove(event) {
        
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}
function setuup(loader, resources) {
   let rectangle1 = new PIXI.Graphics();
   
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawRect(750, 10, window.innerWidth/6, window.innerHeight/4);
    rectangle1.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle1);
    //var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
    //  let circle1 = new PIXI.Graphics();
    //     circle1.beginFill(0x9966FF);
    //     circle1.drawCircle(770, 75, 15);
    //     circle1.endFill();
    //     // circle1.x = 100;
    //     // circle1.y = 100;
    // stage.addChild(circle1);
    // circle.width = 10;
    // circle.height = 10;
    let num= new PIXI.Text("100")
    num.x=775;
    num.y=55;
    stage.addChild(num)
    var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    var renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    //circle.mask = renderTextureSprite;
    num.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    var dragging = false;

    function pointerMove(event) {
        
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}
function setuupp(loader, resources) {
   let rectangle1 = new PIXI.Graphics();
   
    rectangle1.beginFill(0x66CCFF);
    rectangle1.drawRect(250, 10, window.innerWidth/6, window.innerHeight/4);
    rectangle1.endFill();
    // rectangle1.x = 20;
    // rectangle1.y = 100;
    stage.addChild(rectangle1);
    //var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
    //  let circle1 = new PIXI.Graphics();
    //     circle1.beginFill(0x9966FF);
    //     circle1.drawCircle(270, 50, 15);
    //     circle1.endFill();
    //     // circle1.x = 100;
    //     // circle1.y = 100;
    // stage.addChild(circle1);
    // circle.width = 10;
    // circle.height = 10;
    let num= new PIXI.Text("100000")
    num.x=250;
    num.y=50;
    stage.addChild(num)
    var renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    var renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    //circle.mask = renderTextureSprite;
    num.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    var dragging = false;

    function pointerMove(event) {
        
        if (dragging) {
            brush.position.copy(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}

app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;
//stage.renderer.resize(stage.style.width/2, app.screen.height/2);

    
