import { useState } from "react";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    if (response.err) {
      alert("Could not create song");
      return;
    }
    alert("Success");
    navigate("/home");
  };

  return (
    <LoggedInContainer>
      <div className="content p-8 pt-0 h-full">
        <div className="text-2xl font-semibold mb-5 text-white mt-8">
          Upload Your Music
        </div>
        <div className="flex flex-col space-y-6 py-4">
          <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2 ">
              <TextInput
                label="Name"
                labelClassName={"text-white"}
                placeholder="Enter the song name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <TextInput
                label="Thumbnail URL"
                labelClassName={"text-white"}
                placeholder="Enter the thumbnail URL"
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
  <div className="w-1/4 py-4">
    {uploadedSongFileName ? (
      <div className="bg-gray-200 rounded-lg p-3 w-full">
        {uploadedSongFileName.substring(0, 35)}...
      </div>
    ) : (
      <CloudinaryUpload
        setUrl={setPlaylistUrl}
        setName={setUploadedSongFileName}
      />
    )}
  </div>
  <div className="w-1/4">
    <button
      className="bg-green-500 w-full hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
      onClick={submitSong}
    >
      Submit Song
    </button>
  </div>
</div>

          
<div className="flex justify-center items-center w-full h-full relative">
  {thumbnail && (
    <div className="relative rounded-lg overflow-hidden border border-4 border-green-400">
      <img
        src={thumbnail}
        alt="Thumbnail Preview"
        className="rounded-lg"
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
        <p className="text-white text-center font-semibold">{name}</p>
      </div>
    </div>
  )}
</div>




          
         
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default UploadSong;
