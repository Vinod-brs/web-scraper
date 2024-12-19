const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const path = require("path"); 
const { constants } = require("buffer");
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'))

let a = 'Iphone';
const Home =  async(req, res) => {

  console.log('Started')
  try{
    if(req.query.search.trim() !== '')
     a = req.query.search;
  }catch(err){
    a = 'Iphone';
  }
  if(a.trim() === ''){
    a = 'Iphone';
  }

    
  try{
  
  const amazonURL =
  "https://www.flipkart.com/search?q="+a+"&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";
  

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(amazonURL);

  const data = await page.$$eval(
    ".CGtC98",
    (elements) => {
      return elements.map((el) => ({
        title: el.querySelector(".KzDlHZ").innerText,
        price: el.querySelector(".Nx9bqj").innerText,
        imageURL: el.querySelector(".DByuf4").src,
      }));
    }
  );

  (data.length === 0) ? console.log('No results') : console.log('Success');
 
  res.render("index", {data});

  }catch(er){
    console.log('Failure')
    console.log(er)
    // Home()

  }


}
app.get("/", Home);


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
