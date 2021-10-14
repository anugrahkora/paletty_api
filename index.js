const express= require('express');
const request = require('request-promise');

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
    const response= "this is the rgb="+rgb;
    res.json(response);
} catch (error) {
    res.json(error);
}

});

app.listen(PORT,()=>console.log('Server running on '+PORT));