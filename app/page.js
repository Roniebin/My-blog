import Link from "next/link";

export default function Home() {
  return (
   <div className="home-container">
      <div className="home-part1">
        <img src="/pic1.jpg" ></img>
        <img src="/pic3.jpg" ></img>
        <img src="/pic4.jpg" ></img>
        <img src="/pic5.jpg" ></img>
      </div>
      <div className="home-part2">
        <h2>소개 글 보러가기</h2>
        <Link href='/about'>소개</Link>
        </div>
    
   </div>
  );
}
