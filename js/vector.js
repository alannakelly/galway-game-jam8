define('vector', function() {
    var Vector = function() {};

    Vector.prototype.add = function(a, b) {
        return {
            x: a.x + b.x,
            y: a.y + b.y
        };
    };

    Vector.prototype.sub = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        };
    };

    Vector.prototype.scale = function(a, scalar) {
        return {
            x: a.x * scalar,
            y: a.y * scalar
        };
    };

    Vector.prototype.perp = function(a) {
        return {
            x: -a.y,
            y: a.x
        };
    };

    return Object.create(Vector.prototype);
});
