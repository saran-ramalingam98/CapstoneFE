import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/04/18/3defc76b-795c-4cfa-a005-c2fabd43f6fb/adventure-travel-cliff" />
      <Post img="https://imgcld.yatra.com/ytimages/image/upload/t_ann_seo_banner_tab/v1530015312/AdvNation/ANN_TRP156/adventure-trips-in-india_1440486703_aNbqdJ.jpg" />
      <Post img="https://elahoadventures.com/wp-content/uploads/2019/06/Adventure-Travel.jpg"/>
      <Post img="https://warnercnr.colostate.edu/wp-content/uploads/sites/2/2017/04/shutterstock_428626417.jpg"/>
      <Post img="https://cdn.fs.teachablecdn.com/WYHtP9OLTMakOdrrgKs6" />
      <Post img="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
    </div>
  );
}
