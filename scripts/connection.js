let fs = require("fs");
let mysql = require('mysql');
exports.start = () => {
    dbconfig = {
        //credenciais do servidor mysql
        connectionLimit: 100,
        host: "db4free.net",
        port: 3306,
        database: "moodleproject",
        user: "moodleproject",
        password: "alunos123",
        multipleStatements: true
    };

    pool = mysql.createPool(dbconfig);
    pool.getConnection((err, con) => {
		if (err) console.log('Error in DB connection (start): ' + err);
        console.log("Connected!");
        con.release();
	});
};