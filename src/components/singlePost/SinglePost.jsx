import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/rune-haugseng-727710-unsplash_5.jpeg?W3Pm9D3r2mbNkl3rvCRKWDvfvxrqitHM&size=1200:675"
          alt=""
        />
        <h1 className="singlePostTitle">
          Top 8 Best Blogs On Adventure Travel
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          The Top 8 Best Blogs On Adventure Travel

1.The Expert Vagabond – Matthew Karsten
2.Alison’s Adventures – Alison Teal
3.Alastair Humphreys
4.Andrew Skurka
5.Eric Larsen Explore – Eric Larsen
6.Section Hiker – Philip Werner
7.Wild Junket – Nellie Huang
8.SoCal Hiker – Jeff Hester
          
          1.  The Expert Vagabond – Matthew Karsten

          As stated on his site, the definition of a vagabond is “wandering from place to place without any settled home; nomadic” and this perfectly sums up Karsten’s life. At the age of 29 Matthew quit his job, sold his possessions and headed out on the road. Karsten has traveled across the globe for five years while travel blogging to share his adventures with the world and he doesn’t have any plans to slow down. The Expert Vagabond is living proof that it is possible to live an adventurous life and follow your dreams.

          2.  Alison’s Adventures – Alison Teal

          Continuously on the go, nothing can stop this worldwide adventurer who is dubbed “The Female Indiana Jones”. Whether she is surfing in Hawaii, exploring the ancient city of Petra, or backpacking through Indonesia, Alison Teal, through her adventures teaches people to follow their dreams while also showing the beauty of the world for all of us to see. Alison’s Adventures is one of the best adventure travel blogs on the web.

          3.  Alastair Humphreys

          This British adventurer who coined the term ‘micro adventure’ advocates that people don’t need to go across the world to find adventure, but can actually find it closer to home. Although Humphreys has written a best selling book on micro adventures which you can check out HERE, this doesn’t stop him from continuously testing the boundaries of global exploration. Nominated as a National Geographic Adventurer in 2012, Humphreys has crossed Iceland by foot and pack raft, rowed across the Atlantic ocean, and cycled round the world for four years. This adventure travel blog is a must for anyone who loves to explore!

          4.  Andrew Skurka

          Described by National Geographic as “one of the best traveled and fastest hikers on the planet”, Andrew Skurka has made a name for himself by hiking super human distances across rugged terrain. One example is his 7,775-mile, eleven month sea-to-sea route expedition. The sea-to-sea route connects the Atlantic and Pacific Oceans in the United States.

          Being awarded the National Geographic Adventurer of the Year in 2007, Skurka has perfected the art of moving fast and lightly through the mountains, and has actually published a gear guide on the subject titled “The Ultimate Hiker’s Gear Guide: Tools & Techniques to Hit the Trail” which you can find HERE.
          
          5.  Eric Larsen Explore – Eric Larsen

          The best way to describe explorer Eric Larsen is that he LOVES the cold. The seasoned polar explorer has skied to both the North and South Pole, and after summiting Mount Everest in October of 2010 Eric became the first person to reach the three poles in a 365 day period. He also uses his expeditions as a platform to create awareness on the effects of climate change on the earth.

          I first saw Eric speak in 2014 at the REI Adventure Store in New York City and have been following this polar explorers’ adventures ever since.
          
          6.  Section Hiker – Philip Werner

          Whenever I have a question on gear, backpacking skills, or a trail I am about to hike I always check out the Section Hiker blog. Section Hiker is an encyclopedia of information and is one of my go-to resources on the web for anything hiking related. The blog is penned by Philip Werner, who is an accomplished adventurer and has completed notable adventures such as the 272 mile long trail in Vermont and two coast-to-coast backpacking trips across the Scottish highlands.

          7.  Wild Junket – Nellie Huang

          Professional adventure traveller Nellie Huang has been traveling the world since 2003 and documenting her journeys in the adventure blog, Wild Junket. With over ninety countries under her belt, regardless of whether she is climbing active volcanos in Guatemala, scuba diving in Borneo or exploring the Silk Road, Nellie is always in search of her next great adventure.

          8.  SoCal Hiker – Jeff Hester

          The SoCal hiker blog was created by Jeff Hester and is an excellent resource of trails for those who live in the Southern California area. Many of the blog posts are written as detailed guides with trail descriptions and photos to help you navigate. For those who are interested in hiking the John Muir trail, there is one of the most comprehensive guides that I have seen, which will help you plan your adventure. Anyone that loves to explore the mountains, the SoCal Hiker is one of the best travel blog sites on the web.
        </p>
      </div>
    </div>
  );
}
