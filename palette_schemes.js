const { hsl } = require('./models/hsl_model');
const { colorModel } = require('./models/color_model');
const { colors } = require('./models/colors');
module.exports = {

    analogous: function() {
        var random = Math.random();
        var selectedHue = random * 360;
        var selectedSaturation = random * 0.4 + 0.6;
        var selectedLightness = random * 0.8 + 0.15;
        var colours = new colors();
        colours.newColor(selectedHue < 30.0 ? (selectedHue + 330.0) : (selectedHue - 30.0),
            selectedSaturation,
            selectedLightness, );
        colours.newColor(selectedHue,
            selectedSaturation,
            selectedLightness, );
        colours.newColor(selectedHue > 330.0 ? ((selectedHue + 30) - 360) : (selectedHue + 30),
            selectedSaturation,
            selectedLightness, );
        return colours;
    },
    monochrome: function(count) {
        var random = Math.random();
        const selectedHue = 0.0;
        const selectedSaturation = 0.0;
        var selectedLightness = random * 0.3 + 0.05;

        var selectedEndingLighntness = random * 0.2 + 0.80;
        var lightnessDivision =
            (selectedEndingLighntness - selectedLightness) / count;
        var colours = new colors();

        for (i = 0; i < count; ++i) {

            colours.newColor(selectedHue,
                selectedSaturation,
                selectedLightness + lightnessDivision * i, );
        }
        return colours;

    },
    colorScheme: function(selectedHue, count) {
        var random = Math.random();
        var selectedSaturation = random * 0.8 + 0.2;
        var selectedLightness = random * 0.6 + 0.05;
        var selectedEndingLighntness = random * 0.2 + 0.80;
        var lightnessDivision =
            (selectedEndingLighntness - selectedLightness) / count;
        var colours = new colors();

        for (i = 0; i < count; ++i) {

            colours.newColor(selectedHue,
                selectedSaturation,
                selectedLightness + lightnessDivision * i, );
        }

        return colours;
    }
}