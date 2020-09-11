import axios from "axios";

const db = axios.create({
  baseURL: "https://da8fcqr6bl.execute-api.us-west-2.amazonaws.com/dev",
});

export const getThemes = async (userId) => {
  let result = await db.get(`/user/${userId}`);
  return result.data.Items;
};

export const createTheme = (themeObject) => {
  db.post("/new", themeObject);
};

export const deleteTheme = (userId, themeId) => {
  db.delete(`/delete/${userId}/${themeId}`);
};

export const editTheme = (userId, themeId, themeObject) => {
  db.put(`/update/${userId}/${themeId}`, themeObject);
};
