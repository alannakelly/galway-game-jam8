var Flow = (function( n, stage, renderer ) {

	var colours = [ 
		0xFF7F7F, 0xFFC07F, 0xFFFF7F, 0xC0FF7F,
	    0x7FFF7F, 0x7FFFC0, 0x7FFFFF, 0x7FC0FF, 
		0x7F7FFF, 0xC07FFF, 0xFF7FFF, 0xFF7FC0 ]

	var particles = [];
	var container = new PIXI.Container();

	var bounds = new PIXI.Rectangle( -32, -32, renderer.width + 32, renderer.height + 32 )
	var origin = { x: renderer.width / 2, y: renderer.height / 2 }

	function resetParticle( particle ) {
		particle.anchor.set(0.5);
		particle.x = origin.x;
		particle.y = origin.y;					
		particle.turningSpeed = 0.0;
		var dir = Math.random() * Math.PI * 2;
		particle.vx = Math.cos( dir ) * (Math.random() * 5.0)
		particle.vy = Math.sin( dir ) * (Math.random() * 5.0)
		particle.life = 1.0;
		particle.vl = (Math.random() * 0.01) + 0.01;
		//particle.tint = colours[ Math.floor(Math.random() * colours.length ) ];
		particle.tint = colours[ 0 ];
		//particle.alpha = 0.7;
		particle.blendMode = PIXI.BLEND_MODES.ADD;
	}

	for( var i = 0; i < n; i++ ) {
		var particle = PIXI.Sprite.fromImage('assets/particle.png');
		resetParticle( particle );
		particles.push(particle)
		container.addChild(particle);	
	}
	
	stage.addChild(container);

	return {
		update : function() {
			for( var i = 0; i < particles.length; i++ ) {
				var particle = particles[ i ];
				particle.x +=  particle.vx;
				particle.y += particle.vy;
				particle.tint = colours[ Math.floor((1.0-particle.life) * 12.0 % colours.length) ];
				particle.life -= particle.vl;
				particle.alpha = particle.life;
				if( particle.life < 0.0 ) {
					resetParticle( particle );
				}				
			} 
		},
		setOrigin : function( o ) {
			origin = o;
		}
	}
	
});

