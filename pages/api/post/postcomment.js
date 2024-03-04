import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function handler(요청,응답)
{

    let session = await getServerSession(요청,응답, authOptions)

  
    if(session){
        if (요청.method=="POST")
        {
            const client = await connectDB;
            const db=client.db("blog");
           
            let data=JSON.parse(요청.body)
    
            let saving = {
                comment : data.comment,
                author : session.user.name,
                parentId : new ObjectId(data.parentId)
            }
    
            await db.collection('comment').insertOne(saving)
    
            let result=await db.collection("comment").find({parentId:new ObjectId(data.parentId)}).toArray()
    
            응답.status(200).json(result)
    
        }
    }else{
        응답.status(200).json("전송실패")
    }
    
}