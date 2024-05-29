import {openUploadWidget} from "../../utils/CloudinaryService";
const cloudinary_upload_preset = "spotify";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dokupw1yu",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        alert("Could Not Upload")
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
        className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
        onClick={uploadImageWidget}
      >
        Select Track
      </button>
      
    );
};

export default CloudinaryUpload;