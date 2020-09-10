import React, { useState, useEffect } from "react";
import axios from 'axios';

export const useGetThemes = () => {
      const [themes, setThemes] = useState([]);
      let userId = 1234567

      useEffect(() => {
        let ignore = false;

        async function fetchData() {
          const result = await axios('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user/' + userId);
          if (!ignore) setThemes(result.data.Items);
        }

        fetchData();
        return () => { ignore = true; }
      }, []);

      return (
        [themes]
      );
  }
