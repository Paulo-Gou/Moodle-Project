const path = require("path");
const express = require('express');
const router = express.Router();
const app = express();
const options = {
    "default": {
        "folder": "/www/",
        "document": "index.html",
        "port": process.env.PORT || 5000,
        "favicon": "images/cursor.ico"
    },
    "extensions": {
        "txt": "text/plain; charset=utf-8",
        "htm": "text/html; charset=utf-8",
        "html": "text/html; charset=utf-8",
        "js": "application/javascript; charset=utf-8",
        "json": "application/json; charset=utf-8",
        "css": "text/css; charset=utf-8",
        "gif": "image/gif",
        "jpg": "image/jpg",
        "png": "image/png",
        "ico": "image/x-icon"
    }
};
const dbcon = require('./scripts/connection');
dbcon.start();

function mimeType(filename) {
    var extension = path.extname(filename);
    if (extension.charAt(0) === ".") extension = extension.substring(1);
    return options.extensions[extension];
}


router.get('/getAll', (req, res) => {
    var sql = "";
    if (req.url.replace('/getAll','') == "Revisao") {
        sql = "SELECT * FROM Revisao WHERE DATE(Dia_Revisao) = CURRENT_DATE;";
    }
    dbcon.query(sql, (err, result) => {
   		if (err) throw err;
   		if (result) res.send(result);
        else res.send("No results found.");
	});
});


app.set("Content-Type", mimeType(path.join(__dirname + options.default.folder + options.default.document)));
app.use(express.static('www'), router);
const server = app.listen(options.default.port, () => { console.log(`Listening on port ${options.default.port}`); });
server.on('STOP', () => {
    dbcon.end();
    console.log("Closing server...");
    server.close();
});