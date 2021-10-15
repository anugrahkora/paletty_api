
const { colorModel } = require('./models/color_model');

module.exports={ rgbToHSL: function(red,green,blue){
 var h, s, l;
    const rd = red / 255;
    const gd = green / 255;
    const bd = blue / 255;
    const cmax = Math.max(rd, gd, bd);
    const cmin =Math.min(rd, gd, bd);
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
    var color=new colorModel();
    color.setName('Cobalt');
        return color;

},}