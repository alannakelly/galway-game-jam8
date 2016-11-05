define('particle', ['pixi'], function(PIXI) {
    function Particle(sprite) {
        this.sprite = PIXI.Sprite.fromImage(sprite);
    }

    Particle.prototype.constructor = PIXI.Sprite.fromImage;

    Particle.prototype.colours = [
        0xFF7F7F, 0xFFC07F, 0xFFFF7F, 0xC0FF7F,
        0x7FFF7F, 0x7FFFC0, 0x7FFFFF, 0x7FC0FF,
        0x7F7FFF, 0xC07FFF, 0xFF7FFF, 0xFF7FC0
    ];

    Particle.prototype.reset = function(renderer) {
        this.sprite.anchor.set(0.5);
        this.sprite.x = renderer.width / 2.0;
        this.sprite.y = renderer.height / 2.0;
        this.sprite.direction = Math.random() * Math.PI / 16;
        this.sprite.turningSpeed = 0.0;
        this.sprite.speed = (2 * Math.random()) + 0.25;
        this.sprite.tint = this.colours[Math.floor(Math.random() * this.colours.length)];
        this.sprite.alpha = 0.7;
    };

    return Particle;
});
