import { connectDB } from "@/util/database";
import Posting from "./Posting";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function post() {

    let client = await connectDB;
    const db = client.db('blog');
    let result = await db.collection('post').find().toArray();

    let session = await getServerSession(authOptions)

    console.log(session)

    return (
        <div className="post-container maximum-width">
            <div className="post-title">
                <h3>글 포스팅</h3><Link href="/post/postwrite" className="post-writing">글쓰기</Link>
            </div>

            {
                session ?  <Posting result={result} name={session.user.name}/>
                    : <Posting result={result} name={""}/>
            }
          



        </div>
    )
}