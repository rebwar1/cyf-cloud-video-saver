import React, { FC } from "react";
import VideoCard from "./VideoCard";
import { baseUrl } from "../config";

interface CardsContainerProps {
  videoData: YourVideoDataType[];
  setVideoData: React.Dispatch<React.SetStateAction<YourVideoDataType[]>>;
}

const CardsContainer: FC<CardsContainerProps> = ({
  videoData,
  setVideoData,
}) => {
  const handleDelete = (id: number) => {
    fetch(`${baseUrl}/videos/${id}`, {
      method: "delete",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete video");
        }

        const updatedVideoData = videoData.filter((video) => video.id !== id);
        setVideoData(updatedVideoData);
      })
      .catch((error) => console.log("Error deleting video", error));
  };

  return (
    <div className="grid grid-cols-1 gap-8 sm:mx-10 sm:my-3 sm:grid-cols-2 md:grid-cols-2 lg:mr-24 lg:grid-cols-3 xl:ml-24 xl:grid-cols-3 2xl:grid-cols-4">
      {videoData?.map((singleVideo) => (
        <VideoCard
          key={singleVideo.id}
          singleVideo={singleVideo}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
