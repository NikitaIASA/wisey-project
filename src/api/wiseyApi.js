import axios from "../axios";

const setAuthorizationToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const { data } = await axios.get("/auth/anonymous?platform=subscriptions");
    setAuthorizationToken(data.token);
  } catch (error) {
    throw new Error("Failed to fetch token");
  }
};

export const getCourses = async () => {
  try {
    await getToken();
    const { data } = await axios.get("/core/preview-courses");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch Courses");
  }
};

export const getCourseById = async (id) => {
  try {
    await getToken();
    const { data } = await axios.get(`/core/preview-courses/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch course");
  }
};


