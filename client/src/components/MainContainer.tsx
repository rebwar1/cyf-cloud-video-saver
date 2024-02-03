import React, { useEffect, useState } from "react";
import CardsContainer from "./CardsContainer";
import VideoForm from "./VideoForm";
import { baseUrl } from "../config";

interface Video {
  id: number;
  title: string;
  url: string;
}

function MainContainer(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState<Video[]>([]);
  const [videoAdded, setVideoAdded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`${baseUrl}/videos`);
        const data: Video[] = await response.json();
        setVideoData(data);
        setLoading(false);
        setVideoAdded(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [videoAdded]);

  return (
    <div>
      <VideoForm videoData={videoData} setVideoAdded={setVideoAdded} />

      {loading ? (
        <div className="m-9 flex items-center justify-center p-9 text-center text-4xl">
          <h6>Loading...</h6>
          <div className="mx-4 h-12 w-12 animate-spin rounded-full border-b-4 border-t-4 border-gray-600"></div>
        </div>
      ) : (
        <CardsContainer videoData={videoData} setVideoData={setVideoData} />
      )}
    </div>
  );
}

export default MainContainer;
