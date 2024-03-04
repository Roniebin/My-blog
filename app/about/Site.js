'use client'
import { useState, useEffect } from "react"

export default function Site() {
    let [fade, setFade] = useState(['start', 'start', 'start', 'start'])

    useEffect(() => {
        setTimeout(() => {
            setFade(['end', 'start', 'start', 'start'])
        }, 100)

        setTimeout(() => {
            setFade(['end', 'end', 'start', 'start'])
        }, 500)

        setTimeout(() => {
            setFade(['end', 'end', 'end', 'start'])
        }, 1000)

        setTimeout(() => {
            setFade(['end', 'end', 'end', 'end'])
        }, 1500)
    }, [])


    return (
        <>
            <div className="about-left">
                <img src="/pic1.jpg" className={"about-img " + fade[0]}></img>
            </div>


            <div className="about-site">
                <div className={"about-site-part1 " + fade[1]}>
                    <h3>
                        소개
                    </h3>

                    <p>
                        개발역량 향상을위한 풀스택 프로젝트로 생각한 나만의 블로그입니다.
                    </p>
                </div>

                <div className="about-site-part2">
                    <div className={"part2-box " + fade[2]}>
                    <h3>고려한 기능</h3>
                        <div className="part2-inner">


                        
                            <div>
                                * 프론트<br /> 동적 이벤트 처리,<br />동적 UI,  다크모드 
                            </div>
                           <br/>
                            <div>
                                * 백엔드<br /> 로그인,회원기능, <br />글 조회 발행, 수정<br /> 삭제, 댓글, 좋아요

                            </div>


                        </div>
                    </div>
                    <div className={"part2-box " + fade[3]}>
                    <h3>기술 스택</h3>
                        <div className="part2-inner">
                      
                            <p>
                                * 프론트<br /> Html, Css, Javascript, React<br /><br />
                                * 백엔드<br /> Next.js<br /><br />
                                * DB<br /> MongoDB<br />
                            </p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}