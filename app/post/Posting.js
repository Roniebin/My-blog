"use client";

import Link from "next/link";
import Like from "./Like";
import { useState } from "react";


export default function Posting(props) {
  let posting = props.result;

  

  return (
    <>
      {posting.map((item, i) => {
        return (

          <div className="posting" key={i}>
            <p className="posting-author">
              작성자 : {item.name}
            </p>
            <span className="posting-date"> 날짜 : {item.date}</span>
            <Link href={"/post/postdetail/" + posting[i]._id} className="posting-content"><br /><br /><span style={{ fontWeight: "200" }}>제목 : </span> {item.title}</Link>

            <hr></hr>

            <Like parentId={posting[i]._id} />
            <br />

          {
            props.name == item.name ?
            <span onClick={(e) => {
              fetch('/api/post/postdelete', { method: "POST", body: posting[i]._id })
                .then((r) => { return r.json })
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none"
                    }, 1000)
                  
                })
    
            }} style={{ cursor: "pointer", backgroundColor: "white", color: "red", marginTop: "7px" }}>삭제</span>
             : null
          }

          {
              props.name ==item.name ?<Link href={"/post/postedit/" + posting[i]._id} className="posteditbtn">수정</Link>
              : null
          }
 
          
          </div>
        )
      })
      }
    </>
  );
}
