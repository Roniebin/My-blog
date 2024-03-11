import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-part1">
        <div className="overap">
          <img className="homeimg oa"src="/pic1.jpg" ></img>
          <img className="homeimg ob"src="/pic1.jpg" ></img>
        </div>
        <div className="overap">
          <img className="homeimg"src="/pic3.jpg" ></img>
        </div>
        <div className="overap">
          <img className="homeimg"src="/pic4.jpg" ></img>
        </div>
        <div className="overap">
          <img className="homeimg"src="/pic5.jpg" ></img>
        </div>


      </div>
      <div className="home-part2">
        <h2>소개 글 보러가기</h2>
        <Link href='/about'>소개</Link>
      </div>

    </div>
  );
}
