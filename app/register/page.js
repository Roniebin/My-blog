
export default function Register() {
  return (

    <div className="post-container maximum-width">
      <div>


        <form method="POST" action="/api/auth/signup">
          <div className="register-container">
            <p>
              <input name="name" type="text" placeholder="이름" />
            </p>

            <p>
              <input name="email" type="text" placeholder="이메일" />
            </p>


            <p>
              <input name="password" type="password" placeholder="비번" />
            </p>

            <p>
              <button type="submit">id/pw 가입요청</button>
            </p>
          </div>


        </form>
      </div>
    </div>
  )
}