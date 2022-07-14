import express from "express";
import imageProcessing from "./api/imageProcessing";
const routes=express.Router();
routes.get('/',(rq,res)=>{
    res.send("Main api route");
});
routes.use('/imageProcessing',imageProcessing);
export default routes;