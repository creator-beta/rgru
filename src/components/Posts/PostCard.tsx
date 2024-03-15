import { FC } from "react";
import { PostData } from "../../types/posts";
import Styles from "./Posts.module.css";

const PostCard: FC<PostData> = ({ id, title, body }) => (
  <article className="card">
    <span className={Styles["card__badge"]}>ID: {id}</span>
    <h2 className={Styles["card__title"]}>{title}</h2>
    <p className={Styles["card__description"]}>{body}</p>
  </article>
);

export default PostCard;
