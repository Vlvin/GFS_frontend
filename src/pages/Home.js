import { useEffect, useState } from "react";
import PostsAPI from '../scripts/PostsAPI';
import Post from "./Post";

export default function Home() {
  const [posts, setPosts] = useState([{ author: { email: "", userName: "" }, title: "", description: "", questions: [], likes: [] }]);
  useEffect(() => {
    const intervalId = setInterval(() => {

      const loadPosts = async () => {
        const result = await PostsAPI.all()
        if (result.success === true) {
          setPosts(() => [...result.data.posts]);
        }
      };
      loadPosts();
    }, 1000);
    return () => clearInterval(intervalId);
  });
  return (
    <div className="container">
      <div className="d-flex justify-content-center alighn-items-center">
        <h1>Home</h1>
      </div>
      <div className="d-flex justify-content-center alighn-items-center">
        {posts?.map((p, key) => <Post model={p} key={key} />)}
      </div>
    </div>
  )
}
