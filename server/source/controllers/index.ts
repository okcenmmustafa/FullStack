import { Request, Response, NextFunction, request } from 'express';
import logging from '../config/logging';
import axios from 'axios';
const NAMESPACE = 'Sample Controller';

const getCountryByName= async (req:Request,res:Response,next:NextFunction)=> {
    try {
    logging.info(NAMESPACE, `getCountryByName route called.`);
    var name=req.query.name;
    var id =!!req.query.id?req.query.id:0
    console.log(req.query);

    let api_url=`https://restcountries.eu/rest/v2`
    if(id==1)
    api_url+=`/name/${name}`
    else if(id==2)
    api_url+=`/name/${name}/?fullText=true`
    else if(id==3)
    api_url+=`/all`
    const response=await axios(api_url).then(res=>{return res.data})
    console.log(api_url,id)
    return res.status(200).json({
        message:"Country has been Found.",
        loading:false,
        data:response
    });

    } catch (error) {
    console.log('That did not go well.')
    return res.status(200).json({
        message:"Country can't Found.",
        loading:false,
        data:[]
    });
  }
}
const getAllCountry= async (req:Request,res:Response,next:NextFunction)=> {
    try {
    logging.info(NAMESPACE, `getAllCountry route called.`);
    
    let api_url=`https://restcountries.eu/rest/v2/all`
    const response=await axios(api_url).then(res=>{return res.data})
    console.log(api_url)
    return res.status(200).json({
        message:"Country has been Found.",
        loading:false,
        data:response
    });

    } catch (error) {
    console.log('That did not go well.')
    return res.status(200).json({
        message:"Country can't Found.",
        loading:false,
        data:[]
    });
  }
}
const slotMachineResult= async (req:Request,res:Response,next:NextFunction)=> {
    const {fruit1,fruit2,fruit3}=req.query
    console.log(req.query)
    var awardCoin=0;
    try {
    logging.info(NAMESPACE, `slotMachineResult route called.`);
        if (fruit1 == "🍒" && fruit2 == "🍒" && fruit2 == "🍒") {
            awardCoin=50;
        } else if (fruit1 == "🍎" && fruit2 == "🍎" && fruit3 == "🍎") {
            awardCoin=20;
        } else if (fruit1 == "🍌" && fruit2 == "🍌" && fruit3 == "🍌") {
            awardCoin=15;
        } else if (fruit1 == "🍋" && fruit2 == "🍋" && fruit3 == "🍋") {
            awardCoin=3;
        } else if (
          (fruit1 == "🍒" && fruit2 == "🍒") ||
          (fruit2 == "🍒" && fruit3 == "🍒")
        ) {
            awardCoin=40;
        } else if (
          (fruit1 == "🍎" && fruit2 == "🍎") ||
          (fruit2 == "🍎" && fruit3 == "🍎")
        ) {
            awardCoin=10;
        } else if (
          (fruit1 == "🍌" && fruit2 == "🍌") ||
          (fruit2 == "🍌" && fruit3 == "🍌")
        ) {
           awardCoin=5;
        }
    return res.status(200).json({
        message:"Rolled",
        awardCoin:awardCoin,
        loading:false,
    });

    } catch (error) {
    console.log('That did not go well.')
    return res.status(200).json({
        message:"didn't Rolled.",
        loading:false,
    });
  }
  
}
export default { getCountryByName,slotMachineResult,getAllCountry };
