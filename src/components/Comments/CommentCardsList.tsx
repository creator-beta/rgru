import { FC } from "react";
import { CommentData } from "../../types/comments";
import CommentCard from "./CommentCard";
import Styles from "./Comments.module.css";

interface CommentCardsListProps {
  comments: CommentData[];
}

const CommentCardsList: FC<CommentCardsListProps> = ({ comments }) => {
  return (
    <ul className={Styles["cards-list"]}>
      {comments.map((comment, index) => (
        <li key={index}>
          <CommentCard {...comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentCardsList;
