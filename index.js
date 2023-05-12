const express = require('express');
const morgan = require('morgan');
// const puppeteer = require('puppeteer');

const app = express();

app.use(morgan("dev"));

// const scrapImage = async () => {
//     const browser = await puppeteer.launch({headless:true});
//     const page = await browser.newPage();
//     await page.goto('https://www.amazon.in/Nike-Mens-Chroma-Thong-Black/dp/B00278ZKTY/ref=sr_1_2?crid=1N1JQN3T9XFFD&keywords=Nike+Slippers&qid=1669639930&qu=eyJxc2MiOiI3LjY0IiwicXNhIjoiNi40NSIsInFzcCI6IjUuNTYifQ%3D%3D&sprefix=nike+slipper%2Caps%2C184&sr=8-2');
//     const tempData = await page.evaluate(() => Array.from(document.getElementsByClassName('imgSwatch'), (e) => {
//         if(e.alt == 'Sepia Stone/Sequoia-Total Crimson') e.alt
//     }))

//     console.log(tempData);
// }

app.get("/",(req,res) => {
    res.json({data:"My First Route"});
    // scrapImage();
})

app.get('/logos', (req,res) => {
    res.json({Name:"Mahavir Vaishnav", Task:"First Deployment"})
})

// scrapImage();
 
app.listen(8000,() => {
    console.log("Connected To Port 8000");
})