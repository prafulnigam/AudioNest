import React, { useContext } from "react";
import songContext from "../../contexts/songContext";

const HomeMusic = ({ info, playSound }) => {
  const { currentSong, setCurrentSong } = useContext(songContext);

  return (
    <div
      className="bg-black bg-opacity-40 w-1/6 p-4 rounded-lg mb-4"
      onClick={() => {
        setCurrentSong(info);
      }}
    >
      <div className="pb-4 pt-2">
        <div className="w-full rounded-md overflow-hidden" style={{ paddingTop: "100%", position: "relative"}}>
          <img className="absolute inset-0 w-full h-full object-cover rounded-md" src={info.thumbnail} alt="Song Thumbnail" />
        </div>
      </div>
      <div className="text-white font-semibold py-3">{info.name}</div>
      <div className="text-gray-500 text-sm">
        {info.artist.firstName} {info.artist.lastName}
      </div>
    </div>
  );
};

export default HomeMusic;
