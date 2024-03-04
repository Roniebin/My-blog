import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(요청,응답)
{
  
    
    if (요청.method=="POST")
    {
       
        let session = await getServerSession(요청,응답, authOptions)
        
        // 로그인을 했는지 확인
        if (session)
        {

            try{
                let client = await connectDB; 
                const db = client.db('blog'); 
              
                console.log("여기")
                console.log(요청.body);
        
                let today = new Date();   
        
                let year = today.getFullYear(); // 년도
                let month = today.getMonth() + 1;  // 월
                let date = today.getDate();  // 날짜
                let hours = today.getHours(); // 시
                let minutes = today.getMinutes();  // 분
        
                console.log(year + '/' + month + '/' + date +" "+ hours + ':' + minutes) 
                let theTime=year + '/' + month + '/' + date +" "+ hours + ':' + minutes
              
                let Data={ name:session.user.name ,title:요청.body.title,date:theTime,content:요청.body.content,author:session.user.email}
                await db.collection("post").insertOne(Data)

                응답.status(200).redirect('/post')

            }catch(error)
            {
                return 응답.status(200).json("실패")
            }
          
        }
       
    }
}