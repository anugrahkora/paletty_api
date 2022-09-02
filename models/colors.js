const { hsl } = require("./hsl_model");

class Colors {
    constructor() {
        this.colors = [];

    }
    newColor(hue, sat, lig) {
        let c = new hsl(hue, sat, lig);
        this.colors.push(c);
        return c;
    }
    getAllColors() {
        return this.colors;
    }
}

module.exports.colors = Colors;