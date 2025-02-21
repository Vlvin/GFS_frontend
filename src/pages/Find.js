import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import PostsAPI from "../scripts/PostsAPI";
import Post from "./Post";



export default function Find() {
  let [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const result = await PostsAPI.find(keyword);
      if (result.success)
        setPosts(result.data.posts);
    }
    loadPosts();
  }, [keyword]);
  return (
    <>
      <h2>Posts Containing "{keyword}"</h2>
      {posts.map(p => <Post model={p} />)}
    </>
  );
}
