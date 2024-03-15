import { FC, useEffect, useState } from "react";
import { CommentData } from "../types/comments";
import { useLocation } from "react-router-dom";

import { endpoints } from "../api/config";
import { getCommentsByPostId, isResponseOk } from "../api/api-utils";

import CommentCardsList from "../components/Comments/CommentCardsList";
import Preloader from "../components/Preloader";
import Styles from "./Post.module.css";

const PostPage: FC = () => {
  const [data, setData] = useState<CommentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { id, title, body } = location.state;

  async function fetchData() {
    const response = await getCommentsByPostId(endpoints.comments, id);
    isResponseOk(response) && setData(response);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className={Styles["section-inner"]}>
          <div className={Styles["section-inner__content"]}>
            <h1>{title}</h1>
            <div>
              <p>{body}</p>
            </div>
          </div>
          <div className={Styles["section-inner__content"]}>
            {isLoading && <Preloader />}
            <CommentCardsList comments={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
