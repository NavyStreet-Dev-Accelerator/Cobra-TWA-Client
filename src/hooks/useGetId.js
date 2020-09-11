import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

const useGetId = () => {
  const [uuid, setUuid] = useState();
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      const newUuid = uuidv4();
      localStorage.setItem("user", uuid);
      setUuid(newUuid);
    } else {
      const currentUuid = localStorage.getItem("user");
      setUuid(currentUuid);
    }
  }, []);

  return [uuid];
};

export default useGetId;
