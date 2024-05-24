import { useState, useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../containers/LoggedInContainer";
import HomeMusic from "../components/shared/HomeMusic";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/allSongs");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen="home">
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
        Welcome to AudioNest
      </div>
      <div className="flex flex-wrap justify-start gap-8">
        {songData.map((item, index) => (
          <HomeMusic key={index} info={item} playSound={() => {}} />
        ))}
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
