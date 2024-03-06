import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function Postedit(props) {


    let client = await connectDB;
    const db = client.db('blog');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })


    return (
        <div className="post-container maximum-width">
            <div className="post-title">
                <h3>자유 게시판</h3>
            </div>

            <h4>글쓰기</h4>
            <form action="/api/post/postedit" method="POST">
                <p>제목 : <input name="title" type="text" defaultValue={result.title}></input></p>
                <hr></hr>
                <p>내용<br /><br /><textarea name="content" cols="80" rows="10" defaultValue={result.content}></textarea></p>
                <input style={{display:'none'}}name="_id" value={result._id.toString() }></input>
                <p><button className="btn" type="submit">완료</button></p>

            </form>

        </div>
    )
}