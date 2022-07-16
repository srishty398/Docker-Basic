const express = require('express');
const jsforce = require('jsforce');
const app = express();
const PORT = 3001;
require('dotenv').config()
const cors = require('cors');

app.use(cors());


const { SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN } = process.env;
const conn = new jsforce.Connection({
    loginUrl:SF_LOGIN_URL
})
conn.login(SF_USERNAME,SF_PASSWORD+SF_TOKEN, (err, userInfo)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("User Id:"+userInfo.id)
        console.log("Org Id:"+userInfo.organizationId)
    }

});

app.get('/account',(req,res)=>{
    conn.query("SELECT Id,Name FROM Account",(err,result)=>{
        if(err){
            res.send(err)
        } else {
            console.log("Total records"+ result.totalSize)
            res.json(result.records)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`)
})