// import 'dart:math';

// import 'package:flutter/cupertino.dart';
// import 'package:flutter/painting.dart';
// import 'package:get/get.dart';
// import 'package:hex_color/constants.dart';
// // import 'package:hex_color/models/fav_color_model.dart';
// import 'package:hive/hive.dart';

// class PaletteSchemeControllers extends GetxController {
//   Random random = Random();

//   Future<int> getLength() async {
//     final paletteLength = Hive.box(paletteLengthBox).get('paletteLength');
//     // print(paletteLength);
//     return paletteLength;
//   }



// //primary, sec
//   List<Color> colorScheme(double selectedHue) {
//     final selectedSaturation = random.nextDouble() * 0.8 + 0.2;
//     final selectedLightness = random.nextDouble() * 0.6 + 0.05;
//     final selectedEndingLighntness = random.nextDouble() * 0.2 + 0.80;
//     final lightnessDivision =
//         (selectedEndingLighntness - selectedLightness) / 3;

//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + lightnessDivision,
//     );
//     final color3 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 2));
//     final color4 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 3));
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor()
//     ];
//   }

//   List<Color> coolColorScheme() {
//     final selectedHue = random.nextDouble() * 178 + 91;
//     final selectedSaturation = random.nextDouble() * 0.8 + 0.2;
//     final selectedLightness = random.nextDouble() * 0.6 + 0.05;
//     final selectedEndingLighntness = random.nextDouble() * 0.2 + 0.80;
//     final lightnessDivision =
//         (selectedEndingLighntness - selectedLightness) / 3;

//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + lightnessDivision,
//     );
//     final color3 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 2));
//     final color4 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 3));
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor(),
//     ];
//   }

//   List<Color> monochromeScheme() {
//     final selectedHue = random.nextInt(360).toDouble();
//     final selectedSaturation = random.nextDouble() * 0.8 + 0.2;
//     final selectedLightness = random.nextDouble() * 0.6 + 0.05;
//     final selectedEndingLighntness = random.nextDouble() * 0.2 + 0.80;
//     final lightnessDivision =
//         (selectedEndingLighntness - selectedLightness) / 3;

//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + lightnessDivision,
//     );
//     final color3 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 2));
//     final color4 = HSLColor.fromAHSL(1.0, selectedHue, selectedSaturation,
//         selectedLightness + (lightnessDivision * 3));
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor()
//     ];
//   }

//   List<Color> pastelScheme() {
//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       1,
//       0.9,
//     );
//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       1,
//       0.9,
//     );
//     final color3 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       1,
//       0.9,
//     );
//     final color4 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       1,
//       0.9,
//     );

//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor(),
//     ];
//   }

//   List<Color> randomScheme() {
//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       random.nextDouble() * 0.85 + 0.15,
//       random.nextDouble() * 0.65 + 0.3,
//     );
//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       random.nextDouble() * 0.85 + 0.15,
//       random.nextDouble() * 0.65 + 0.3,
//     );
//     final color3 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       random.nextDouble() * 0.85 + 0.15,
//       random.nextDouble() * 0.65 + 0.3,
//     );
//     final color4 = HSLColor.fromAHSL(
//       1.0,
//       random.nextDouble() * 360,
//       random.nextDouble() * 0.85 + 0.15,
//       random.nextDouble() * 0.65 + 0.3,
//     );
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor()
//     ];
//   }

//   List<Color> tetradicScheme() {
//     final selectedHue = random.nextDouble() * 360;
//     final selectedSaturation = random.nextDouble() * 0.2 + 0.8;
//     final selectedLightness = random.nextDouble() * 0.2 + 0.7;
//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue > 120.0 ? selectedHue - 120 : selectedHue + 120.0,
//       selectedSaturation,
//       selectedLightness,
//     );
//     final color3 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue > 180.0 ? selectedHue - 180 : selectedHue + 180.0,
//       selectedSaturation,
//       selectedLightness,
//     );
//     final color4 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue > 60.0 ? selectedHue - 60.0 : selectedHue + 300.0,
//       selectedSaturation,
//       selectedLightness,
//     );
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor()
//     ];
//   }

//   List<Color> triadScheme() {
//     final selectedHue = random.nextDouble() * 360.0;
//     final selectedSaturation = random.nextDouble() * 0.2 + 0.8;
//     final selectedLightness = random.nextDouble() * 0.2 + 0.7;

//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue < 120.0
//           ? ((selectedHue + 360.0) - 120.0)
//           : (selectedHue - 120.0),
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );
//     final color3 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue > 240.0 ? ((selectedHue + 120) - 360) : (selectedHue + 120),
//       selectedSaturation,
//       selectedLightness,
//     );
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//     ];
//   }

//   List<Color> warmColorScheme() {
//     final selectedHue1 = random.nextDouble() * 89;
//     final selectedHue2 = random.nextDouble() * 88 + 271;
//     final hueList = [selectedHue1, selectedHue2];
//     final selectedHue = hueList[random.nextInt(2)];
//     final selectedSaturation = random.nextDouble() * 0.8 + 0.2;
//     final selectedLightness = random.nextDouble() * 0.6 + 0.05;
//     final selectedEndingLighntness = random.nextDouble() * 0.2 + 0.80;
//     final lightnessDivision =
//         (selectedEndingLighntness - selectedLightness) / 3;

//     final color1 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness,
//     );

//     final color2 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + lightnessDivision,
//     );
//     final color3 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + (lightnessDivision * 2),
//     );
//     final color4 = HSLColor.fromAHSL(
//       1.0,
//       selectedHue,
//       selectedSaturation,
//       selectedLightness + (lightnessDivision * 3),
//     );
//     return [
//       color1.toColor(),
//       color2.toColor(),
//       color3.toColor(),
//       color4.toColor(),
//     ];
//   }

//   List<Color> getFirstColor(int colorSpace1, int colorSpace2, int divisions) {
//     // var division = 255 / divisions;
//     // var colorList=[colorSpace1,colorSpace2];
//     var colorList1 = [
//       Color.fromARGB(255, 0, colorSpace1, colorSpace2),
//       Color.fromARGB(255, 85, colorSpace1, colorSpace2),
//       Color.fromARGB(255, 170, colorSpace1, colorSpace2),
//       Color.fromARGB(255, 255, colorSpace1, colorSpace2),
//     ];
//     var colorList2 = [
//       Color.fromARGB(255, colorSpace1, 0, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 85, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 170, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 255, colorSpace2),
//     ];
//     var colorList3 = [
//       Color.fromARGB(255, colorSpace1, 0, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 85, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 170, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 255, colorSpace2),
//     ];
//     var colorList4 = [
//       Color.fromARGB(255, colorSpace1, 0, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 85, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 170, colorSpace2),
//       Color.fromARGB(255, colorSpace1, 255, colorSpace2),
//     ];
//     var colorList = [colorList1, colorList2, colorList3];

//     return colorList[random.nextInt(3)];
//   }
  

//   List<Color> getGradient() {
//     var random = Random();

//     var red = random.nextInt(256);
//     var green = random.nextInt(256);
//     var blue = random.nextInt(256);
//     var colorList = [red, green, blue];
//     var colorItem1 = colorList[random.nextInt(3)];
//     colorList.remove(colorItem1);
//     var colorItem2 = colorList[random.nextInt(2)];
//     return getFirstColor(colorItem1, colorItem2, 3);
//   }
// }
