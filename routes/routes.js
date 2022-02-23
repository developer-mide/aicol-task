const express = require('express');
const router = express.Router();
const request = require('request');
const statusCodes = require('http').STATUS_CODES;
const mailer = require('nodemailer');
const { getMaxListeners } = require('process');
const res = require('express/lib/response');

router.post('/uptime-check', (req, res) => {
//global variable
var active;

function Checker(url) {

    //website url
   this.website = '';

   //pings every 4 seconds
   this.interval = 4000;

   //active or dead
   this.active = true;

   //starts the Checker
     //this.status();

   //run at interval
     this.ping(url, this.interval);
   }

   

   Checker.prototype = {

    //ping method
       ping: function (url, interval){
        const self = this;
         setInterval(() => {

         self.check(url.website);
  
       }, interval)
  },

    //sends requests to the url given
       check: function (input){
        const self  = this;
        self.website = input;
    //try send request to url
         try{
            if(self.website !== undefined){
            request(self.website, function (error, response, body){

           // url error or website is down
            if(error){ 

            self.websiteIsDown(self.website);
            res.end('404')
            }else if(!error && response.statusCode === 200){

          //website is up and running
            self.websiteIsUp();
            res.end('200')
            }
         })
        }
       }
         //catch loading error if any
         catch(err){
           console.log(`We have issues loading the url - ${self.website}. Please check your internet connection`);
            //self.websiteIsDown(self.website);
         }   
       },

       //do this if website is up
       websiteIsUp: function (){
           const self = this;
           
           console.log(`Yo! your site is up and running(${self.website})`);
  
       },

       //do this if website is down
       websiteIsDown: function (website_url){

        const self = this;
        res.status('404');
        // email transporter
           const transporter = mailer.createTransport({
            service: "gmail",
            auth: {
              user: 'olumidefiverr@gmail.com',
              pass: 'olumide16'
            }
           }) 


           //set date 
           const date = new Date();
           const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
           
           //print date
           const printDate = () => {
              return(monthsArr[Number(date.getMonth())] + ', ' + date.getDay() + ' ' + 
              date.getFullYear());
           }

           //print time
           const printTime = () => {
           var hours = Number(date.getHours());
           var minutes = date.getMinutes()
            if(minutes.length < 2){
               minutes = '0' + minutes;
            }
            if(hours < 12){
              minutes = minutes + 'am'
            }else{
              minutes = minutes + 'pm'
            }
            return((Number(hours) + 12) + ':' + minutes)
           }


           //mail options
           const mailOptions = {
             from: 'support@uptime.com',
             to: 'olumidesamuel1914@gmail.com',
             subject: 'Bad! Your website is down',
             text: 'Hi, we noticed your site ' + website_url + ' was down on ' + 
              printDate() + ' at ' + printTime()

           }

           //send email
             transporter.sendMail(mailOptions, (mailError, info) => {
                if(mailError){
                  console.log(mailError);
                }else{
                  console.log('Email sent '+ info.response);
                }
             })
             console.log('Bad! Your website is down');
             return false;
       }
   }

       
   const site_url = req.body.url;
   site_url.map((e) => {
     newIns = new Checker({
       website: `http://${e}`
     })
   })
   
    //res.send(newIns.getPrototypeOf(websiteIsUp()));
   

});

module.exports = router;