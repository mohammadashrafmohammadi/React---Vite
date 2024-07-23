import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Posts() {
  const [isloading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiData = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((json) => json);
        setPosts(apiData);
      } catch (error) {
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isloading || !posts) {
    return <div>Loading... </div>;
  }
  return (
    <div>
      <Link to="/" className="underline">
        Dashboard
      </Link>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
