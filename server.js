const express = require('express');

const app = express();
const sqlite3 = require('sqlite3');
app.set('view engine','ejs');
const moment = require('moment');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
const db = require("./models/database");
app.listen(3000);
app.get('/', (req, res) => {
    let sql = "select * from S20200010001"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            console.log(err)
        }
        else{

            res.render('index',{val:rows})
        }

    });

});
app.post('/',(req,res)=>{
    console.log(req.body);
    let data = {
        ProjectName: req.body.projname,
        RollNo: req.body.roll,
        Semester : req.body.sem,
        ProjectDetails : req.body.projdet,
        TechUsed : req.body.tech

    }
    let sql ='INSERT INTO S20200010001 (S20200010001ProjectName,S20200010001RollNo,S20200010001Semester,S20200010001ProjectDetails,S20200010001TechUsed) VALUES (?,?,?,?,?)'
    let par =[data.ProjectName, data.RollNo, data.Semester,data.ProjectDetails,data.TechUsed];
    db.run(sql, par, function (err, result) {
        if (err){
            console.log(err)
            res.json({"msg": "no"})

        }
        else
        {
            res.json({"msg": "success"})
        }


    });
})
