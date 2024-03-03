"use client";

export default function Posting(props) {
  let posting = props.result;
  let a;
  return (
    <>
  
      {posting.map((item, index) => {
        return(
            
            <div className="posting">
            <p className="posting-author">
                작성자 : {item.name}
            </p>
            <span className="posting-date"> 날짜 : {item.date}</span>
            <p className="posting-content"><span style={{fontWeight:"200"}}>제목 : </span> {item.title}</p>
            
            <hr></hr>
            <span>👍</span> <span>0</span>
            </div>
        )
      })
      }
    </>
  );
}
