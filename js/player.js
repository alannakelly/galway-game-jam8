define('player', ['pixi'], function(PIXI) {
    function Player(sprite, texture) {
        // this.sprite = PIXI.sprite.fromImage(sprite);
        // this.texture = PIXI.RenderTexture.create(...texture);
    }

    Player.prototype.pos = { x: 0, y: 0 };

    /**
     *
     *
     */

    Player.prototype.update = function(updater) {
        updater(this.pos, this.sprite);
    };

    /**
     *
     *
     */

    Player.prototype.draw = function(renderer) {
        renderer.render(this.sprite);
    };

    return Player;
});
