
export default function Postwrite(props) {


    return (
        <div className="post-container maximum-width">
            <div className="post-title">
                <h3>자유 게시판</h3>
            </div>

            <h4>글쓰기</h4>
            <form action="/api/post/postwriting" method="POST">
                <p>제목 : <input name="title" type="text"></input></p>
                <hr></hr>
                <p>내용<br /><br /><textarea name="content" cols="80" rows="10"></textarea></p>
                <p><button className="btn" type="submit">완료</button></p>



            </form>

        </div>
    )
}