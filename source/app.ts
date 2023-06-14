const express = require("express");

const app = express();

app.get("/health",(req:any,res:any) => {
    res.sendStatus(200);
})

export {app};