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

            // 얘가 이게시물을 클릭한적이 있는 지체크
        let result=await db.collection("like").findOne({author : session.user.email,parentId :new ObjectId(요청.query.id)})
        
        
        console.log(result)
        console.log(session)

        let count=0;

        if(result==null)
        {
            await db.collection("like").insertOne({author:session.user.email,parentId :new ObjectId(요청.query.id)})
            let data = await db.collection("like").find({parentId :new ObjectId(요청.query.id)}).toArray()
            
            count=data.length
        }
        else{
            await db.collection("like").deleteOne({author:session.user.email,parentId :new ObjectId(요청.query.id)})
            let data = await db.collection("like").find({parentId :new ObjectId(요청.query.id)}).toArray()
            count=data.length
            
        }
        console.log("여기"+count)
        응답.status(200).json(count)
    }

    
}