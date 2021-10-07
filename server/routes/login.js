const express = require("express");
const app = express.Router();
const dbConnection = require("../database");

// 로그인 프로세서
app.post("/loginProcess", (req, res) => {
  // 디비 검색
  dbConnection.query(
    `select tbid, tbname from tb_account WHERE tbemail = 
  '${req.body.email}' AND tbpasswd = '${req.body.pw}'`,
    (err, response) => {
      if (err) {
        console.log(err);
        res.send({ bool: false });
      } else {
        response.length > 0
          ? res.send({
              bool: true,
              tbid: response[0].tbid,
              tbname: response[0].tbname,
            })
          : res.send({ bool: false });
      };
    }
  );
});

// 로그인 확인
app.post("/logincheck", (req, res) => {
  console.log(req.session);
  res.send(req.session);
});

module.exports = app;
