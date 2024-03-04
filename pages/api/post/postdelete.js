import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청,응답)
{
  
    // 자기자신 게시글이나 관리자만 삭제할수있게 확인용
    let session= await getServerSession(요청,응답,authOptions)
    
    if(session)
    {
        if (요청.method=="DELETE")
        {
            const client = await connectDB;
            const db=client.db("blog");
            
            console.log(session.user)
            let post=await db.collection("post").findOne({_id: new ObjectId(요청.body)})
        
            if(post.author==session.user.email || session.user.email=="admin@naver.com")
            {
                await db.collection("post").deleteOne({_id:new ObjectId(요청.body)})
                응답.status(200).json("삭제완료")
            }
        }else{
            응답.status(200).json("삭제 권한이 없습니다.")
        }
    }else{
        응답.status(200).json("삭제 권한이 없습니다.")
    }
   
}