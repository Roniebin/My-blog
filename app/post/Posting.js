"use client";

import Link from "next/link";

export default function Posting(props) {
  let posting = props.result;

  
  
  return (
    <>
  
      {posting.map((item, i) => {
        return(
            
            <div className="posting" key={i}>
            <p className="posting-author">
                작성자 : {item.name}
            </p>
            <span className="posting-date"> 날짜 : {item.date}</span>
            <Link href={"/post/postdetail/"+posting[i]._id} className="posting-content"><br/><br/><span style={{fontWeight:"200"}}>제목 : </span> {item.title}</Link>
            
            <hr></hr>
            <div className="posting-delete">
              <span>👍</span> <span>0</span>
          
             
              <div onClick={()=>{
                fetch('/api/post/postdelete',{method:"delete",body: posting[i]._id})
                .then((r)=>{return r.json()})
                
              }}style={{cursor:"pointer",backgroundColor:"white",color:"red"}}>삭제</div>
          
         
            </div>
           
            </div>
        )
      })
      }
    </>
  );
}
