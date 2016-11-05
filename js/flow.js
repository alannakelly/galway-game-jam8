define('flow', ['pixi', 'particle'], function(PIXI, Particle) {
    function Flow(particleCount, stage, renderer) {
        this.container = new PIXI.Container();
        this.bounds = new PIXI.Rectangle(-32, -32, renderer.width + 32, renderer.height + 32);
        this.renderer = renderer;
        this.addParticles(particleCount);
        stage.addChild(this.container);
    }

    Flow.prototype.particles = [];

    Flow.prototype.addParticles = function(count) {
        const particle = new Particle('assets/particle.png');

        particle.reset(this.renderer);
        this.particles.push(particle);
        this.container.addChild(particle);

        if (count) this.addParticles(count - 1);
    };

    Flow.prototype.update = function() {
        this.particles.forEach(particle => {
            if (this.bounds.contains(particle.x, particle.y)) {
                particle.x += Math.cos(particle.direction) * particle.speed;
                particle.y += Math.sin(particle.direction) * particle.speed;
            } else {
                particle.reset(this.renderer);
            }
        });
    };

    return Flow;
});
