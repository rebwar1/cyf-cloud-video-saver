// import { useState } from "react";
// import validUrl from "valid-url";
// import { baseUrl } from "../config";

// import "../assets/css/videoForm.css";

// function VideoForm({ setVideoAdded }) {
//   const [errorMessage, setErrorMessage] = useState("");

//   function addVideoHandler(event) {
//     event.preventDefault();

//     // Validate the form inputs
//     function validateUrl(urlObject) {
//       return (
//         validUrl.isUri(urlObject) &&
//         (urlObject.startsWith("https://www.youtube.com/") ||
//           urlObject.startsWith("https://youtu.be") ||
//           urlObject.startsWith("https://m.youtube.com") ||
//           urlObject.startsWith("https://youtube.com/"))
//       );
//     }

//     const formTitle = event.target.form.title.value;
//     const formUrl = event.target.form.url.value;
//     // cleaning up the YouTube url with timestamp or other paths so that I get to display the thumbnails of the YouTube videos in my app. For eg: https://www.youtube.com/watch?v=Pmx2cbLGzzo&t=2908s
//     const cleanedUrl = formUrl.includes("&") ? formUrl.split("&")[0] : formUrl;

//     if (validateUrl(formUrl) && formTitle !== "") {
//       const newData = {
//         title: formTitle,
//         url: cleanedUrl,
//       };

//       fetch(`${baseUrl}/videos`, {
//         method: "post",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newData),
//       })
//         .then((response) => {
//           setVideoAdded(true);

//           // Reset the form and clear the error message
//           event.target.form.reset();
//           setErrorMessage("");
//         })
//         .catch((error) => {
//           console.log("Error adding video", error);
//         });
//     } else if (formTitle === "" && !validateUrl(formUrl)) {
//       setErrorMessage("Add a title and a valid YouTube video URL");
//     } else if (formTitle === "") {
//       setErrorMessage("Add a title");
//     } else {
//       setErrorMessage("Add a valid YouTube video URL");
//     }
//   }

//   const mainStyle = {
//     margin: "1rem 0 3rem 0",
//     padding: "0.5rem 1rem",
//     borderRadius: "0.375rem",
//     height: "90%",
//   };

//   return (
//     <div
//       className="main flex h-screen items-center justify-center"
//       style={mainStyle}
//     >
//       <form className="custom-form sm:w-500 mx-5 mb-3 mt-1 flex flex-col gap-2 rounded-lg border border-gray-300 pb-1 text-lg sm:mx-9 sm:px-9 sm:text-2xl">
//         <div className="p-1 font-bold"></div>

//         <div className="grid gap-2 ">
//           <div className="flex flex-col">
//             <input
//               type="text"
//               name="title"
//               id="title"
//               placeholder="Video title"
//               required
//               className="input h-8 w-full rounded border bg-gray-200 p-2 pl-4 pr-4"
//             />
//           </div>
//           <div className="flex flex-col">
//             <input
//               type="url"
//               name="url"
//               id="url"
//               placeholder="YouTube video URL"
//               required
//               className="input h-8 w-full rounded border bg-gray-200 p-2 pl-4 pr-4"
//             />
//           </div>
//         </div>

//         <button
//           className="mt-4 rounded bg-black px-4 py-2 font-bold text-white transition duration-200 hover:bg-red-500"
//           onClick={addVideoHandler}
//           type="submit"
//         >
//           Add
//         </button>

//         {errorMessage && <p className="mt-2 text-red-700">{errorMessage}</p>}
//       </form>
//     </div>
//   );
// }

// export default VideoForm;

// 🍇🍇🍇🍇🍇🍇🍇

import React, { useState } from "react";
import validUrl from "valid-url";
import { baseUrl } from "../config";

import "../assets/css/videoForm.css";

interface VideoFormProps {
  setVideoAdded: React.Dispatch<React.SetStateAction<boolean>>;
}

function VideoForm({ setVideoAdded }: VideoFormProps) {
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    title: "",
    url: "",
  });

  function addVideoHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    function validateUrl(urlObject: string) {
      return (
        validUrl.isUri(urlObject) &&
        (urlObject.startsWith("https://www.youtube.com/") ||
          urlObject.startsWith("https://youtu.be") ||
          urlObject.startsWith("https://m.youtube.com") ||
          urlObject.startsWith("https://youtube.com/"))
      );
    }

    const formTitle = formValues.title;
    const formUrl = formValues.url;
    const cleanedUrl = formUrl.includes("&") ? formUrl.split("&")[0] : formUrl;

    if (validateUrl(formUrl) && formTitle !== "") {
      const newData = {
        title: formTitle,
        url: cleanedUrl,
      };

      fetch(`${baseUrl}/videos`, {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => {
          setVideoAdded(true);

          // Reset the form values and clear the error message
          setFormValues({
            title: "",
            url: "",
          });
          setErrorMessage("");
        })
        .catch((error) => {
          console.log("Error adding video", error);
        });
    } else if (formTitle === "" && !validateUrl(formUrl)) {
      setErrorMessage("Add a title and a valid YouTube video URL");
    } else if (formTitle === "") {
      setErrorMessage("Add a title");
    } else {
      setErrorMessage("Add a valid YouTube video URL");
    }
  }

  const mainStyle = {
    margin: "1rem 0 3rem 0",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    height: "90%",
  };

  return (
    <div
      className="main flex h-screen items-center justify-center"
      style={mainStyle}
    >
      <form
        className="custom-form sm:w-500 mx-5 mb-3 mt-1 flex flex-col gap-2 rounded-lg border border-gray-300 pb-1 text-lg sm:mx-9 sm:px-9 sm:text-2xl"
        onSubmit={addVideoHandler}
      >
        <div className="p-1 font-bold"></div>

        <div className="grid gap-2 ">
          <div className="flex flex-col">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Video title"
              required
              value={formValues.title}
              onChange={(e) =>
                setFormValues({ ...formValues, title: e.target.value })
              }
              className="input h-8 w-full rounded border bg-gray-200 p-2 pl-4 pr-4"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="YouTube video URL"
              required
              value={formValues.url}
              onChange={(e) =>
                setFormValues({ ...formValues, url: e.target.value })
              }
              className="input h-8 w-full rounded border bg-gray-200 p-2 pl-4 pr-4"
            />
          </div>
        </div>

        <button
          className="mt-4 rounded bg-black px-4 py-2 font-bold text-white transition duration-200 hover:bg-red-500"
          type="submit"
        >
          Add
        </button>

        {errorMessage && <p className="mt-2 text-red-700">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default VideoForm;
