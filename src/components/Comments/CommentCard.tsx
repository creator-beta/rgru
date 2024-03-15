import { FC } from "react";
import { CommentData } from "../../types/comments";

const CommentCard: FC<CommentData> = ({ email, body }) => (
  <article className="card">
    <p>{body}</p>
    <address>{email}</address>
  </article>
);

export default CommentCard;
