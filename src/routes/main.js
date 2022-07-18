const express = require("express");
const routes = express.Router();

const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")

routes.get("/",async (req,res) =>{
  const details = await Detail.findOne({"_id":"62c5b4eaf0b7b4bc8d387b49"})
  const slides = await Slider.find()
  //console.log(slides);
  const services = await Service.find()

  res.render("index",{
    details:details,
    slides:slides,
    services:services
  });
});

routes.get('/gallery',async (req,res) => {
  const details = await Detail.findOne({"_id":"62c5b4eaf0b7b4bc8d387b49"})
  res.render("gallery",{
    details:details
  });
});

//process contact form

routes.post("/process-contact-form",async (req,res) => {
  console.log("Form is submitted");
  //console.log(req.body);
  //save the data to // DEBUG:
  try {
    const data = await Contact.create(req.body)
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
})

module.exports = routes;
