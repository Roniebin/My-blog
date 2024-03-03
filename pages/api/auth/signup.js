import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';


export default async function handler(요청,응답){

    if(요청.method =="POST"){
        

        console.log(요청.body)
        if (요청.body.name=="" || 요청.body.email=="" || 요청.body.password=="")
        {
            응답.status(200).json('가입실패')
            console.log(요청.body)
            
        }else{
            
            let hash=await bcrypt.hash(요청.body.password,10)
            요청.body.password=hash;
    
            let db=(await connectDB).db('blog');

            let user_check=await db.collection("user_cred").findOne({email:요청.body.email})
            
            // 이메일 체크 
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

            if(user_check){
                응답.status(200).json('가입실패')
            }else{
                if(regex.test(요청.body.email))
                {
                    if(요청.body.email=="admin@naver.com")
                    {
                        요청.body.role="admin"
                    }
                    else{
                        요청.body.role="normal"
                    }
                       await db.collection("user_cred").insertOne(요청.body)

                    응답.status(200).json('가입성공')
                }else {
                    응답.status(200).json('이메일 형식을 지켜주세요')
                }
               
             
            }
            
        }
     
      
    }
}