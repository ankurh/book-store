import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 3000

main().then(()=>{console.log("connected")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://hambirankur:Ashu%402410@merndb.nidf2.mongodb.net/?retryWrites=true&w=majority&appName=merndb');

  app.use("/",(req,res)=>{
    res.send("Book serve is running");
  })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})