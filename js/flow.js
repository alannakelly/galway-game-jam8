define('flow', ['pixi'], function(PIXI) {
    var colours = [
        0xFF7F7F, 0xFFC07F, 0xFFFF7F, 0xC0FF7F,
        0x7FFF7F, 0x7FFFC0, 0x7FFFFF, 0x7FC0FF,
        0x7F7FFF, 0xC07FFF, 0xFF7FFF, 0xFF7FC0
    ];

    function resetParticle(particle, renderer) {
        particle.anchor.set(0.5);
        particle.x = renderer.width / 2.0;
        particle.y = renderer.height / 2.0;
        particle.direction = Math.random() * Math.PI / 16;
        particle.turningSpeed = 0.0;
        particle.speed = (2 * Math.random()) + 0.25;
        particle.tint = colours[ Math.floor(Math.random() * colours.length)];
        particle.alpha = 0.7;
    }

    return function(particleCount, stage, renderer) {
        var particles = [],
            container = new PIXI.Container(),
            bounds = new PIXI.Rectangle(-32, -32, renderer.width + 32, renderer.height + 32);

        for (var i = 0; i < particleCount; i++) {
            var particle = PIXI.Sprite.fromImage('assets/particle.png');
            resetParticle(particle, renderer);
            particles.push(particle);
            container.addChild(particle);
        }

        stage.addChild(container);

        return {
            update: () => {
                particles.forEach(particle => {
                    if (bounds.contains(particle.x, particle.y)) {
                        particle.x += Math.cos(particle.direction) * particle.speed;
                        particle.y += Math.sin(particle.direction) * particle.speed;
                    } else {
                        resetParticle(particle);
                    }
                });
            }
        };
    };
});
