import { FC, useEffect, useState } from "react";
import { PostData } from "../types/posts";

import { MAX_POSTS_PER_PAGE, endpoints } from "../api/config";
import { getPostsData, isResponseOk } from "../api/api-utils";

import PostCardsList from "../components/Posts/PostCardsList";
import Preloader from "../components/Preloader";
import Styles from "./Home.module.css";

const HomePage: FC = () => {
  const [data, setData] = useState<PostData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const response = await getPostsData(endpoints.posts, data.length);

    if (isResponseOk(response)) {
      setData((prevData) => [...prevData, ...response]);
      response.length < MAX_POSTS_PER_PAGE && setHasMore(false);
    } else {
      setHasMore(false);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <h1>Главное сегодня</h1>
        <div className={Styles["section-inner"]}>
          {data && <PostCardsList posts={data} />}
          {isLoading && <Preloader />}
          {hasMore && !isLoading && (
            <button onClick={fetchData} disabled={isLoading}>
              Загрузить ещё
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
