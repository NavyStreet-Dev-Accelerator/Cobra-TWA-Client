import axios from 'axios';

export const getThemes = async (userId) => {
  let result = await axios('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user/' + userId)
  return result.data.Items
}

export const createTheme = (themeObject) => {
  axios.post('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user', themeObject)
}
