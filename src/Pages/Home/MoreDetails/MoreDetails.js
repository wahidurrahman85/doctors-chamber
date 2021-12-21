import React, { useEffect, useState } from "react";

const MoreDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/service/`;
    fetch(url);
  }, []);
  return <div></div>;
};

export default MoreDetails;
