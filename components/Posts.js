import Post from "./Post";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const posts = [
  {
    id: "123",
    username: "AkhilD",
    userImg: "https://avatars.githubusercontent.com/u/24712956?v=4g",
    img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2021/m4-gt3/bmw-m4-gt3-magazine-teaser.jpg",
    caption:
      "subscribe the button destory the like button for the yt algorithms.",
  },
  {
    id: "130",
    username: "AkhilD",
    userImg: "https://avatars.githubusercontent.com/u/24712956?v=4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHm7JyfU9K3GBmEF83msJ7vbJvuXAQlve1Jg&usqp=CAU",
    caption:
      "subscribe the button destory the like button for the yt algorithms.",
  },
];

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
