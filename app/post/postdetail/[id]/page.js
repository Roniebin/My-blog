import { connectDB } from "@/util/database";
import {ObjectId} from "mongodb"
import Comment from "./comment";

export default async function Postdetail(props)
{
    console.log(props.params.id);

    let client = await connectDB; 
    const db = client.db('blog'); 
    let result = await db.collection('post').findOne({_id:new ObjectId(props.params.id)})
  
   
    return (
        <div className="postdetail-container">
          <div className="detail-content">
            <p>
                작성자 : {result.name}
            </p>
            <p>
                작성날짜 : {result.date}
            </p>
          </div>

            <div className="detail-content contentH">
                <p>
                    제목 : {result.title}
                </p>
                <hr></hr>
                <p>
                    내용 : {result.content}
                </p>
            </div>
          
        <hr></hr>

          <Comment parentId={result._id.toString()}/>
            
        </div>
    )
}