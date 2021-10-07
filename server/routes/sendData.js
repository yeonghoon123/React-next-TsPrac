const express =require("express");
const app = express.Router();
const dbConnection = require("../database");

// user가 등록되어있는 과목 체크 api
app.post("/getUserSub",(req,res) => {

    const selSql = "SELECT tbid, mcd, tbsubcode FROM tb_mcd WHERE tbid = ?"
    const paramVal = [req.body.tbid];

    dbConnection.query(selSql,paramVal,(error, response) => {
        if(error){
            console.log(error);
            res.status(500).send('');
        }else{
            res.send(response);
        };
    });
});

// 과목 상세내용 api
app.post("/getSubInfo",(req,res) => {

    const selSql = "SELECT tbsubname FROM tb_sub WHERE tbsubcode = ?"
    const paramVal = [req.body.tbsubcode];

    dbConnection.query(selSql,paramVal,(error, response) => {
        if(error){
            console.log(error);
            res.status(500).send('');
        }else{       
            res.send(response[0].tbsubname);
        };
    });
});

module.exports = app;