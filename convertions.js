const { colorModel } = require('./models/color_model');

module.exports = {
    rgb: function(red, green, blue) {
        var h, s, l;
        const rd = red / 255;
        const gd = green / 255;
        const bd = blue / 255;
        const cmax = Math.max(rd, gd, bd);
        const cmin = Math.min(rd, gd, bd);
        const diff = cmax - cmin;
        l = (cmax + cmin) / 2;
        if (diff == 0) {
            h = 0.0;
        } else if (cmax == rd) {
            h = ((gd - bd) / diff % 6) * 60;
        } else if (cmax == gd) {
            h = (((bd - rd) / diff) + 2) * 60;
        } else if (cmax == bd) {
            h = (((rd - gd) / diff) + 4) * 60;
        }
        if (diff == 0) {
            s = 0.0;
        } else {
            s = diff / (Math.abs(1 - ((2 * l) - 1)));
        }
        // return "H "+Math.round(h)+ " S "+Math.round(s.toPrecision(2)*100)+ " L "+Math.round(l.toPrecision(4)*100);
        // var color=new colorModel('Cobalt','#0047AB',0,0.27,0.67,59,1,33,1,58,0,32,67);
        // var color=new colorModel('Cobalt','#0047AB',0,0.27,0.67,59,1,33,1,58,0,32,67);
        var color = new colorModel();
        color.setName('Cobalt');
        color.setHex('#0047AB');
        color.setHue(0);
        color.setSaturation(0.27);
        color.setLightness(0.67);
        color.setRed(red);
        color.setGreen(green);
        color.setBlue(blue);
        color.setC(this.rgbToC(red, green, blue));
        color.setM(58);
        color.setY(0);
        color.setK(33);
        color.setValue(67);
        return color;

    },
    hsl: function(
        hue, saturation, lightness) {
        var rd, gd, bd, r, g, b;
        const c = (1 - Math.abs((2 * lightness - 1))) * saturation;
        const x = c * (1 - Math.abs(((hue / 60) % 2 - 1)));
        const m = lightness - (c / 2);
        //   print('c=$c, x=$x, m=$m');
        if (hue >= 0.0 && hue < 60.0) {
            rd = c;
            gd = x;
            bd = 0;
        } else if (hue >= 60.0 && hue < 120.0) {
            rd = x;
            gd = c;
            bd = 0;
        } else if (hue >= 120.0 && hue < 180.0) {
            rd = 0;
            gd = c;
            bd = x;
        } else if (hue >= 180.0 && hue < 240.0) {
            rd = 0;
            gd = x;
            bd = c;
        } else if (hue >= 240.0 && hue < 300.0) {
            rd = x;
            gd = 0;
            bd = c;
        } else if (hue >= 300.0 && hue < 360.0) {
            rd = c;
            gd = 0;
            bd = x;
        }

        r = Math.round((rd + m) * 255);
        g = Math.round((gd + m) * 255);
        b = Math.round((bd + m) * 255);
        var color = new colorModel();
        color.setName('Cobalt');
        color.setHex('#0047AB');
        color.setHue(hue);
        color.setSaturation(saturation);
        color.setLightness(lightness);
        color.setRed(r);
        color.setGreen(g);
        color.setBlue(b);
        color.setC(this.rgbToC(r, g, b));
        color.setM(this.rgbToM(r, g, b));
        color.setY(this.rgbToY(r, g, b));
        color.setK(this.rgbToK(r, g, b));
        color.setValue(67);
        return color;



    },

    rgbToC: function(red, green, blue) {
        const rd = red / 255;
        const gd = green / 255;
        const bd = blue / 255;
        const k = 1 - Math.max(rd, gd, bd);
        const cd = (1 - rd - k) / (1 - k);
        const c = isNaN(cd) ? 0 : cd;
        const md = (1 - gd - k) / (1 - k);
        const m = isNaN(md) ? 0 : md;
        const yd = (1 - bd - k) / (1 - k);
        const y = isNaN(yd) ? 0 : yd;

        return Math.round(c * 100);
    },
    rgbToM: function(red, green, blue) {
        const rd = red / 255;
        const gd = green / 255;
        const bd = blue / 255;
        const k = 1 - Math.max(rd, gd, bd);
        const cd = (1 - rd - k) / (1 - k);
        const c = isNaN(cd) ? 0 : cd;
        const md = (1 - gd - k) / (1 - k);
        const m = isNaN(md) ? 0 : md;
        const yd = (1 - bd - k) / (1 - k);
        const y = isNaN(yd) ? 0 : yd;

        return Math.round(m * 100);
    },
    rgbToY: function(red, green, blue) {
        const rd = red / 255;
        const gd = green / 255;
        const bd = blue / 255;
        const k = 1 - Math.max(rd, gd, bd);
        const cd = (1 - rd - k) / (1 - k);
        const c = isNaN(cd) ? 0 : cd;
        const md = (1 - gd - k) / (1 - k);
        const m = isNaN(md) ? 0 : md;
        const yd = (1 - bd - k) / (1 - k);
        const y = isNaN(yd) ? 0 : yd;

        return Math.round(y * 100);
    },
    rgbToK: function(red, green, blue) {
        const rd = red / 255;
        const gd = green / 255;
        const bd = blue / 255;
        const k = 1 - Math.max(rd, gd, bd);
        const cd = (1 - rd - k) / (1 - k);
        const c = isNaN(cd) ? 0 : cd;
        const md = (1 - gd - k) / (1 - k);
        const m = isNaN(md) ? 0 : md;
        const yd = (1 - bd - k) / (1 - k);
        const y = isNaN(yd) ? 0 : yd;

        return Math.round(k * 100);
    },

}