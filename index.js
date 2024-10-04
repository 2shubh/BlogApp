const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT;

//middle ware parser
app.use(express.json());

const blogroutes=require("./routes/blogRoute");
//mount
app.use("/api/v1",blogroutes);
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get('/',(req,res)=>{
    res.send("<h1>This is HomePage Baby</h1>");
})

app.listen(PORT,()=>{

    console.log(`Server Started at port ${PORT}`);
}
)


