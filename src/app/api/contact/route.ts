import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { send } from "process";



const email = process.env.EMAIL;
const pass = process.env.PASSWORD;



export async function POST(req: Request, res: NextApiResponse) {
  const mail =  await req.json()
  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port:587,
    auth: {
      user: email,
      pass: pass,
    },
  });
 


  const toHostMailData ={
    from: mail.email,
    to: "ryuoshimoto@gmail.com",
    subject: `Oshimoto.net | from ${mail.name} | ${mail.subject}`,
    text: `${mail.message} send from ${mail.email}` ,
    html:`
    <p>【名前】</p>
    <p>${mail.name}</p>
    <p>【メール】</p>
    <p>${mail.email}</p>
    <p>【タイトル】</p>
    <p>${mail.subject}</p>
    <p>【メッセージ】</p>
    <p>${mail.message}</p>
    `
  }

  let msg:string = "send"
  await transporter.sendMail(toHostMailData, (err, info) =>{
    if(err){
      msg = err.message
      console.log(err.message)
    }else{
      msg = "Message Sent!"
    }
  })
 

  return NextResponse.json(msg)
}