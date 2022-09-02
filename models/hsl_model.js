class HSL {
    constructor(Hue, Saturation, Lightness) {
        this.hue = Hue;
        this.saturation = Saturation;
        this.lightness = Lightness;

    }
    getHue() { this.hue; }
    setHue(hue) { this.hue = hue; }

    getSaturation() { this.saturation; }
    setSaturation(saturation) { this.saturation = saturation; }

    getLightness() { this.lightness; }
    setLightness(lightness) { this.lightness = lightness; }
}
module.exports.hsl = HSL;