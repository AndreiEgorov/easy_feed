import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const myAPI = "getFeeds";
const path = "/feeds";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    try { 
      const newFeedsObj = await API.get(myAPI, path);
      setFeeds([...newFeedsObj.feeds])
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="allFeeds">
      {feeds.map((feed, index) => {
        return <p key={index}>{feed}</p>;
      })}
    </div>
  );
};

export { Feeds };
