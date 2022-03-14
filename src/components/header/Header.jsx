import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The Best Blogs Right Now</span>
        <span className="headerTitleLg">Adventure Blogs</span>
      </div>
      <img
        className="headerImg"
        src="https://www.gannett-cdn.com/presto/2021/06/23/USAT/800cb160-d78b-4315-a899-7602a2b0cb86-adventure_travel.jpg?width=2560"
        alt=""
      />
    </div>
  );
}
