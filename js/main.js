var main = (function () {

	var renderer = PIXI.autoDetectRenderer(1280, 720, { antialias: true });
	document.body.appendChild(renderer.view);

	// create the root of the scene graph
	var stage = new PIXI.Container();

	stage.interactive = true;

	var flow = Flow(500,stage,renderer);

	var tick = 0;
	requestAnimationFrame(animate);

	function animate() {
		flow.update();
		renderer.render(stage);
		requestAnimationFrame( animate );
		tick += 0.1;
	}

});

main();


