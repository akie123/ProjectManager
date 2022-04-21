let sqlite3 = require('sqlite3').verbose();
let md5 = require('md5')



let db = new sqlite3.Database(__dirname+"/data.db", (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE S20200010001(
            S20200010001id INTEGER PRIMARY KEY AUTOINCREMENT,
            S20200010001ProjectName varchar, 
            S20200010001RollNo varchar , 
            S20200010001Semester INTEGER, 
            S20200010001ProjectDetails varchar,
            S20200010001TechUsed varchar
            )`,
            (err) => {
                if (err) {


                    console.log("table already present")
                }
            });
    }
});


module.exports = db;