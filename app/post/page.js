import { connectDB } from "@/util/database";
import Posting from "./Posting";
import Link from "next/link";

export default async function post() {

    let client = await connectDB;
    const db = client.db('blog');
    let result = await db.collection('post').find().toArray();

    return (
        <div className="post-container maximum-width">
            <div className="post-title">
                <h3>자유 게시판</h3><Link href="/post/postwrite" className="post-writing">글쓰기</Link>
            </div>

            <Posting result={result} />




        </div>
    )
}