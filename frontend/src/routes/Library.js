import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Library = () => {
  const [myPlaylists, setMyPlaylists] = useState([]);
  const [popupContent, setPopupContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await makeAuthenticatedGETRequest("/playlist/get/me");
        setMyPlaylists(response.data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    getData();
  }, []);

  const handlePlaylistClick = async (playlistId) => {
    try {
      const response = await makeAuthenticatedGETRequest(
        `/playlist/get/playlist/${playlistId}`
      );

       console.log(response.songs);

      if (!response.name) {
        console.error("Playlist data or songs not found in response:", response);
        return;
      }

      console.log(response)
      const { songs } = response;
      
      setPopupContent(songs);

      setTimeout(() => {
        setPopupContent(null);
      }, 5000);
    } catch (error) {
      console.error("Error fetching playlist:", error);
    }
  };

  return (
    <LoggedInContainer curActiveScreen={"library"}>
      <div className="text-white text-xl pt-8 font-semibold">My Playlists</div>
      <div className="py-5 grid gap-5 grid-cols-5">
        {myPlaylists.map((item) => (
          <Card
            key={item._id}
            title={item.name}
            imgUrl={item.thumbnail}
            playlistId={item._id}
            onClick={() => handlePlaylistClick(item._id)}
          />
        ))}
      </div>
      {popupContent && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 rounded-lg z-50">
          <div className="text-lg font-semibold pb-2">Playlist Songs</div>
          <ul>
            {popupContent.map((song, index) => (
              <li key={index} className="py-1">
                {song}
              </li>
            ))}
          </ul>
        </div>
      )}
    </LoggedInContainer>
  );
};

const Card = ({ title, imgUrl, playlistId, onClick }) => {
  return (
    <div
      className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imgUrl} alt="Playlist Thumbnail" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
    </div>
  );
};

export default Library;
