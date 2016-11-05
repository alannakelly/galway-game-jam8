var Flow = (function( n ) {
	var particles = [];
	var container = new PIXI.ParticleContainer( n, {
   		scale: true,
   		position: true,
   		rotation: true,
   		uvs: true,
    	alpha: true
	});
	
	stage.addChild(container);

	return {
		init : function() {
			for( var i = 0; i < n; i++ ) {
				var particle = PIXI.Sprite.fromImage('asssets/particle.png');
				particle.setAnchor(0.5);
				particle.x = renderer.width / 2;
				particle.y = renderer.height / 2;
				particle.direction = Math.random() * Math.PI * 2;
				particle.turningSpeed = 0.0;
				particle.speed = (5 + Math.random * 5);
				particles.push(particle)
			}
		}
	}
	
});
