// import
const express = require("express");

// import connection moule
let conn = require("../config/db_connection");

// getting the connection object
let connection = conn.getConnection();

// connect to database
connection.connect();

let router = express.Router();
router.post("/", function(req, res) {
//reading the parameters from client
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;

    connection.query("insert into product values("+p_id+",'"+p_name+"', "+p_cost+")",
        function (err, result) {
        if (err) {
            console.log("error while inserting the object!")
        } else {
            res.send({ insert:"success" });
        }
    });
});

module.exports = router;
