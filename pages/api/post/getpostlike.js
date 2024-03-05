import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import {ObjectId} from 'mongodb'

export default async function handler(요청, 응답) {


    let session = await getServerSession(요청, 응답, authOptions)


    // 로그인을 했는지 확인
    if (session) {
        const client = await connectDB;
        const db = client.db("blog");

    
       
        let data = await db.collection("like").find({parentId :new ObjectId(요청.body)}).toArray()
        
        let count=data.length
    
        console.log(count)
        응답.status(200).json(count)
    }

    
}