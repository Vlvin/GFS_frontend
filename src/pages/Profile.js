import { useEffect, useState } from "react";
import Post from "./Post";
import PostsAPI from "../scripts/PostsAPI";
import { useParams } from "react-router";
import AccountAPI from "../scripts/AccountAPI";



export default function Profile() {
  const [user, setUser] = useState({ id: null, email: null, username: null });
  const [posts, setPosts] = useState([]);
  const [me, setMe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const loadPosts = async () => {
      const result = await PostsAPI.userPosts(id);
      if (result.success)
        setPosts(result.data.posts);
    }
    const loadUser = async () => {
      const result = await AccountAPI.getProfile(id);
      if (result.success) {
        setUser(result.data);
        console.log(result.data.id, id);
      }
    }
    const checkMe = async () => {
      const result = await AccountAPI.getMyProfileData();
      if (result.success) {
        setMe(result.data.id == id);
      }
    }
    loadPosts();
    loadUser();
    checkMe();
  }, [id]);
  console.log(id);
  return (
    <>
      {me ? <h1>My Page</h1> : me === false ? <h1>Page of {user.username}</h1> : <></>}
      <h1>Posts:</h1>
      {
        posts.map((p, key) => <Post model={p} key={key} />)
      }
    </>
  );
}
