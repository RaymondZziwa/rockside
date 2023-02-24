const { createPool } = require("mysql");
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database: "rockside"
})

pool.getConnection((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("satabase connection was successful")
    }
})

module.exports = pool;