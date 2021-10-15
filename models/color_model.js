class ColorModel {
    constructor(Name,Hex,Red,Green,Blue,Hue,Saturation,Lightness,Cyan,Magenta,Yellow,K,Value){
        this.name = Name;
        this.hex = Hex;
        this.red =Red;
        this.green = Green;
        this.blue = Blue;
        this.hue =Hue;
        this.saturation = Saturation;
        this.lightness = Lightness;
        this.c =Cyan;
        this.m = Magenta;
        this.y = Yellow;
        this.k = K;
        this.value = Value;
    }

    getName () { return this.name;}
    setName (name) { this.name = name; }

    getHex(){return this.hex;}
    setHex(hex){this.hex=hex;}

    getRed () {this.red;}
    setRed (red) {this.red = red;}

    getGreen () {this.green;}
    setGreen (green) {this.green = green;}

    getBlue () {this.blue;}
    setBlue (blue) {this.blue = blue;}

    getHue () {this.hue;}
    setHue (hue) {this.hue = hue;}

    getSaturation () {this.saturation;}
    setSaturation (saturation) {this.saturation = saturation;}

    getLightness () {this.lightness;}
    setLightness (lightness) {this.lightness = lightness;}

    getC () {this.c;}
    setC (c) {this.c = c;}

    getM () {this.m;}
    setM (m) {this.m = m;}

    getY () {this.y;}
    setY (y) {this.y = y;}

    getK () {this.k;}
    setK (k) {this.k = k;}

    getValue () {this.value;}
    setValue (value) {this.value = value;}
    
}
module.exports.colorModel=ColorModel;


