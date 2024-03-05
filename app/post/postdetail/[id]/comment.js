'use client'

import { useState, useEffect } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState('')


    useEffect(() => {
        fetch('/api/post/getpostcomment?id=' + props.parentId)
        .then((r) => { return r.json() })
            .then((result) => {
                setData(result);
            })
    })

    return (
        <div className="detail-comment">
            댓글 <br /><br />

            <textarea cols="70" rows="2" onChange={(e) => { setComment(e.target.value) }}></textarea>
            <br /><br />
            <button className="btn" onClick={() => {
                // 댓글 전송시 새로고침없이 하기위해 form 안씀
                fetch("/api/post/postcomment", { method: "POST", body: JSON.stringify({ comment: comment, parentId: props.parentId }) })
                    .then((r) => { return r.json() })
                    .then((result) => {
                        setData(result)
                    })
            }}>댓글전송</button><br /><br />



            {
                data.length > 0 ?
                    data.map((a, i) => {
                        return (
                            <p>
                                <span style={{ fontSize: "11px" }}> {a.author}</span><br />
                                <span> {a.comment}</span>

                            </p>
                        )
                    }) : "댓글 창 로딩중"

            }
        </div>
    )
}