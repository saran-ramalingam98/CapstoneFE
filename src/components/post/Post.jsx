import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              Music
          </span>
          <span className="postCat">
              Life
          </span>
        </div>
        <span className="postTitle">
           <Link to="/SinglePost">Blogs</Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        1) THE PLANET D
        The Canadian couple behind The Planet D, Dave and Deb, live by the motto “Adventure is for Everyone.” They don’t believe that you have to be an uber-athlete, adrenaline junkie or ultra-rich to be an adventurer, you just need the desire to achieve something more. They both used to work long hours on feature films and television but left that world to travel to over 115 countries on all 7 continents and become a leading source of detailed city guides, personal travel tips, and inspiring stories. It all started when they signed up in 2008 for the Tour d’Afrique, the world’s longest cycling race, which was an experience that sparked the idea that travel could be a way of life for them, not just a vacation.
        2) THE ADVENTURE JUNKIES
Polished and very wide-reaching in its information, The Adventure Junkies blog wants its readers to “be safe, confident and prepared in the outdoors.” Its mission is to make the outdoors accessible to everyone in order to inspire people to value, understand and protect the planet’s ecosystems. The blog not only promotes quality e-books but also offers digital magazine issues called ReWild and a community platform called Summit where you can interact with other adventure junkies. The content is organized into sections such as “Climb,” “Paddle,” “Snow,” or “Hike,” so you can easily find posts related to your specific outdoor interests.
      </p>
    </div>
  );
}
