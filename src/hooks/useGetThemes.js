import { useState, useEffect } from "react";
import { getThemes } from "../api/index.js";

export const useGetThemes = () => {
  const [themes, setThemes] = useState([]);
  console.log(themes);
  useEffect(() => {
    let userId = 1234567;

    async function fetchData() {
      const result = await getThemes(userId);
      setThemes(result);
    }

    fetchData();
    return () => {};
  }, []);

  return [themes];
};
