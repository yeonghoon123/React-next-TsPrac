const express = require("express");
const app = express();
const cors = require("cors");

const nodemailer = require("nodemailer"); // 메일보내는 라이브러리
const mailConfig = require("./mailInfo"); // 메일의 사용자 정보
const async = require("async"); // 비동기 라이브러리

const dbConnection = require("./database"); // db데이터및 접속

require("dotenv").config(); // .env사용 가능하게 만드는 파일
const { response } = require("express");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const loginRouter = require("./routes/login");
const sendDataRouter = require("./routes/sendData");

app.use("/", loginRouter);
app.use("/api",sendDataRouter);

// app.get("/", (req, res) => {
//   res.send("hi");

//   // const transporter = nodemailer.createTransport({
//   //     host: "email-smtp.ap-northeast-2.amazonaws.com",
//   //     port: 587,
//   //     // secure: true, // use SSL
//   //     auth: {
//   //       user: "AKIASB2KAW5KK7MQMYGG",
//   //       pass: "BOs2tRy4pvyQb5VSb+L2QkCxU2sQk1LVfMOgl3uBplhD",
//   //     },
//   //   });

//   //   async.waterfall(
//   //     [
//   //       function (callback) {
//   //         console.log("mail trans");

//   //         const sendmailaddress = "work@soystudy.com";
//   //         const tomailaddress = "dudgns020904@gmail.com";
//   //         const mailsubject = "test";
//   //         const mailcontent = "test is .... ";

//   //         const mailOption = {
//   //           from: sendmailaddress,
//   //           to: tomailaddress,
//   //           subject: mailsubject,
//   //           text: mailcontent,
//   //         };

//   //         console.log(mailOption);

//   //         callback(null, mailOption);
//   //       },

//   //       function (mailOption, callback) {
//   //         console.log(mailOption);
//   //         transporter.sendMail(mailOption, function (error, response) {
//   //           if (error) {
//   //             console.log(error);
//   //           } else {
//   //             console.log("messeage sent :" + response.message);
//   //           }

//   //           transporter.close();

//   //           callback(null, response.message);
//   //         });
//   //       },
//   //     ],

//   //     function (callback, msg) {
//   //       response.send("mail..sucsess...");

//   //       console.log("-----------------------------------");
//   //     }
//   //   );
// });

// // 테스트
// app.post("/test", (req, res) => {
//   console.log(req.body);

//   console.log(`${process.env.DATABASE_USER}`);

//   dbConnection.query("select * from tb_account", (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);
//     }
//   });
// });

const port = 8001;
app.listen(port, console.log("hi", port));
