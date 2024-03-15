import { MAX_POSTS_PER_PAGE } from "./config";

export const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch:", error);
    return error;
  }
};
export const getPostsData = async (
  url: string,
  start: number,
  limit: number = MAX_POSTS_PER_PAGE
) => {
  try {
    const data = await getData(`${url}?_start=${start}&_limit=${limit}`);
    if (!data.length) {
      throw new Error("Data not found");
    }
    return data;
  } catch (error) {
    return error;
  }
};
export const getCommentsByPostId = async (url: string, id: number) => {
  try {
    const data = await getData(`${url}?postId=${id}`);
    if (!data.length) {
      throw new Error("Data not found");
    }
    return data;
  } catch (error) {
    return error;
  }
};

export const isResponseOk = (response: unknown): boolean => {
  return !(response instanceof Error);
};
