import axios from 'axios';

const db = axios.create({
  baseURL: 'https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user'
})

export const getThemes = async (userId) => {
  let result = await db.get(`/${userId}`)
  return result.data.Items
}

export const createTheme = (themeObject) => {
  db.post('/', themeObject)
}

export const deleteTheme = (userId, themeId) => {
  db.delete(`/${userId}/${themeId}`)
}
