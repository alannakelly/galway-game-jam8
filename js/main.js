define(['pixi', 'vector', 'flow', 'player'], function(PIXI, Vector, Flow, Player) {
    var renderer = PIXI.autoDetectRenderer(1280, 720, { antialias: true }),
        player = new Player('awdawdawdawd', [0, 0]),
        flow = new Flow(500, stage, renderer),
        stage = new PIXI.Container(),
        tick = 0;

    function animate() {
        flow.update();
        renderer.render(stage);
        player.draw(renderer);
        requestAnimationFrame(animate);
        tick += 0.1;
    }

    document.body.appendChild(renderer.view);
    stage.interactive = true;
    animate();
});
