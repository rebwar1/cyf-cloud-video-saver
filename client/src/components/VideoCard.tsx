// import React from "react";
// import DeleteButton from "./DeleteButton";

// const VideoCard = React.memo(({ singleVideo, handleDelete }) => {
//   return (
//     <div className="w-400 grid-col mx-4 grid sm:mx-3 sm:my-3 sm:w-72">
//       <p className="text-left text-lg font-bold lg:text-2xl">
//         {singleVideo.title}
//       </p>

//       <div className="grid-col grid w-fit gap-2">
//         <iframe
//           width="100%"
//           height="120"
//           src={singleVideo.url.replace("watch?v=", "embed/")}
//           title={singleVideo.title}
//           allowFullScreen
//         ></iframe>

//         <DeleteButton handleDelete={handleDelete} id={singleVideo.id} />
//       </div>
//     </div>
//   );
// });

// export default VideoCard;


import React from 'react';
import DeleteButton from './DeleteButton';

interface Video {
  id: string;
  title: string;
  url: string;
}

interface VideoCardProps {
  singleVideo: Video;
  handleDelete: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = React.memo(({ singleVideo, handleDelete }) => {
  return (
    <div className="w-400 grid-col mx-4 grid sm:mx-3 sm:my-3 sm:w-72">
      <p className="text-left text-lg font-bold lg:text-2xl">
        {singleVideo.title}
      </p>

      <div className="grid-col grid w-fit gap-2">
        <iframe
          width="100%"
          height="120"
          src={singleVideo.url.replace('watch?v=', 'embed/')}
          title={singleVideo.title}
          allowFullScreen
        ></iframe>

        <DeleteButton handleDelete={handleDelete} id={singleVideo.id} />
      </div>
    </div>
  );
});

export default VideoCard;
