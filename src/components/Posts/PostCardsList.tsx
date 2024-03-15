import { FC } from "react";
import { Link } from "react-router-dom";
import { PostData } from "../../types/posts";
import PostCard from "./PostCard";
import Styles from "./Posts.module.css";

interface PostCardsListProps {
  posts: PostData[];
}

const PostCardsList: FC<PostCardsListProps> = ({ posts }) => {
  return (
    <ul className={Styles["cards-list"]}>
      {posts.map((post, index) => (
        <li key={index}>
          <Link to={post.id.toString()} state={post}>
            <PostCard id={post.id} title={post.title} body={post.body} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostCardsList;
