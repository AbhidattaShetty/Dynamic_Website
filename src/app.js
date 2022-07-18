const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const app = express();
const routes = require("./routes/main");
const Detail =require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");

app.use(bodyParser.urlencoded({extended : true}));
app.use("",routes);

const static_path = path.join(__dirname, "../public");
app.use('/static',express.static(static_path));


app.set('views', path.join(__dirname, "../views"));
app.set('view engine', 'hbs');

const partial_path = path.join(__dirname, "../views/partials");
hbs.registerPartials(partial_path);


mongoose.connect("mongodb://localhost:27017/company_website",() => {
  console.log("db connected")
  //Detail.create({
    //brandName:"Info Technical Solution",
    //brandIconUrl:"https://flyclipart.com/thumb2/computer-icon-logos-656897.png",
    //links:[
      //{
        //label:"Home",
      //  url : "/"
    //  },
    //  {
      //  label:"Services",
      //  url : "/services"
    //  },
    //  {
    //    label:"gallery",
    //    url : "/gallery"
    //  },
    //  {
      //  label:"About",
    //    url : "/about"
    //  },
    //  {
    //    label:"Contact Us",
    //    url : "/contact-us"
  //    }
  //  ]
//  })

//Slider.create([
  //{
  //  title :"Learn Java in very easy manner",
  //  subTitle :"Java is one of the most popular programming language",
    //imageUrl :"/static/images/s2.png",
  //  class : "active"
//  },
//  {
//    title :"What is Django in Python",
//    subTitle :"Django is most famous web framework for python",
//    imageUrl :"/static/images/s1.png"
//  },
//  {
  //  title :"What about nodejs",
  //  subTitle :"Node js is runtime environment to execute javascript outside browser",
  //  imageUrl :"/static/images/s3.png"
//  }
//])

//Service.create([
  //{
    //icon:"fa-brands fa-leanpub",
  //  title:"Provide Best Courses",
  //  description:"We provide best courses that helps our students in learning and placements.",
  //  linkText:"Check",
  //  link:"https://www.linkedin.com"
//  },
//  {
  //  icon:"fa-thin fa-airplay",
  //  title:"Learn Projects",
  //  description:"We provide best projects material that helps our students in learning and placements.",
  //  linkText:"Learn",
  //  link:"https://www.linkedin.com"
//  },
//  {
  //  icon:"fa-thin fa-airplay",
  //    title:"Ask Query",
  //  description:"We provide best courses that helps our students in learning and placements.",
  //  linkText:"Query",
  //  link:""https://www.linkedin.com""
//  }
//])

})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("server started");
});
