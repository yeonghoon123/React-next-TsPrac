const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mailConfig = require("./mailInfo");
const async = require("async");
const dbConnection = require('./database');
const { response } = require("express");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("hi")

    // const transporter = nodemailer.createTransport({
    //     host: "email-smtp.ap-northeast-2.amazonaws.com",
    //     port: 587,
    //     // secure: true, // use SSL
    //     auth: {
    //       user: "AKIASB2KAW5KAAOFEYUQ",
    //       pass: "BLbkt5cD8xsAgFLAYmEmKK6vIsMoMi4uHKiF3z3pv+sc",
    //     },
    //   });
    
    //   async.waterfall(
    //     [
    //       function (callback) {
    //         console.log("mail trans");
    
    //         const sendmailaddress = "work@soystudy.com";
    //         const tomailaddress = "dudgns020904@gmail.com";
    //         const mailsubject = "test";
    //         const mailcontent = "test is .... ";
    
    //         const mailOption = {
    //           from: sendmailaddress,
    //           to: tomailaddress,
    //           subject: mailsubject,
    //           text: mailcontent,
    //         };
    
    //         console.log(mailOption);
    
    //         callback(null, mailOption);
    //       },
    
    //       function (mailOption, callback) {
    //         console.log(mailOption);
    //         transporter.sendMail(mailOption, function (error, response) {
    //           if (error) {
    //             console.log(error);
    //           } else {
    //             console.log("messeage sent :" + response.message);
    //           }
    
    //           transporter.close();
    
    //           callback(null, response.message);
    //         });
    //       },
    //     ],
    
    //     function (callback, msg) {
    //       response.send("mail..sucsess...");
    
    //       console.log("-----------------------------------");
    //     }
    //   );
})

app.post("/test", (req, res) => {
  console.log(req.body);
  
  res.send("<h1>hello</h1>");
});

app.listen(3020, console.log("hi"));
