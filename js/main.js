define(['pixi', 'vector', 'flow'], function(PIXI, Vector, Flow) {
    var renderer = PIXI.autoDetectRenderer(1280, 720, { antialias: true }),
        stage = new PIXI.Container(),
        flow = Flow(500, stage, renderer),
        tick = 0;

    function animate() {
        flow.update();
        renderer.render(stage);
        requestAnimationFrame(animate);
        tick += 0.1;
    }

    document.body.appendChild(renderer.view);
    stage.interactive = true;
    requestAnimationFrame(animate);
});
