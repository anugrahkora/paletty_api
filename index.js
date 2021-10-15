const express= require('express');
const request = require('request-promise');
var convert=require('./convertions');
const { colorModel } = require('./models/color_model');
const app=express();
const PORT= process.env.PORT|| 5000;

app.use(express.json());

app.get('/',(req,res)=>{
res.send('Welcome to paletty api');


});

// convert RGB

app.get('/convertRGB/:rgb',async(req,res)=>{
const {rgb}=req.params;
try {

    var splitRGB = rgb.split(',');
 const response=convert.rgbToHSL(splitRGB[0],splitRGB[1],splitRGB[2]);
    res.json(response);
} catch (error) {
    res.json(error);
}

});


app.listen(PORT,()=>console.log('Server running on '+PORT));