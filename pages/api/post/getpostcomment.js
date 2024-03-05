import { connectDB } from "@/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function handler(요청, 응답) {

    let session = await getServerSession(요청, 응답, authOptions)


    if (session) {
        const client = await connectDB;
        const db = client.db("blog");
        let result = await db.collection("comment").find({ parentId: new ObjectId(요청.query.id) }).toArray();

        응답.status(200).json(result)
    } else {
        응답.status(200).json("로그인 다시부탁드립니다.")
    }

}