// require("dotenv").config();
// const express = require("express");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Credentials for MySQL database
// const db = mysql.createConnection({
//   user: process.env.MYSQL_USER,
//   host: process.env.MYSQL_HOST,
//   database: process.env.MYSQL_DATABASE,
//   password: process.env.MYSQL_PASSWORD,
//   port: process.env.MYSQL_PORT,
// });

// // Connecting to MySQL database
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to MySQL database!");
// });

// // This endpoint is used to get all the videos
// app.get("/videos", (req, res) => {
//   const query = "SELECT * FROM videos ORDER BY title";

//   db.query(query, (err, result) => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).send("Database Error");
//     } else {
//       res.json(result);
//     }
//   });
// });

// // This endpoint is used to get a single video with a given ID
// app.get("/videos/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const query = "SELECT * FROM videos WHERE id = ?";

//   db.query(query, [id], (err, result) => {
//     if (err) {
//       console.log(err.message);
//       res.status(500).json({
//         result: "failure",
//         message: "Database Error",
//       });
//     } else {
//       if (result.length > 0) {
//         res.json(result);
//       } else {
//         res.status(404).json({
//           result: "failure",
//           message: "Video could not be found",
//         });
//       }
//     }
//   });
// });

// // This endpoint is used to add a new video
// app.post("/videos", (req, res) => {
//   const { title, url } = req.body;
//   if (
//     !title ||
//     !url ||
//     (!url.startsWith("https://www.youtube.com") &&
//       !url.startsWith("https://youtu.be") &&
//       !url.startsWith("https://m.youtube.com") &&
//       !url.startsWith("https://youtube.com/"))
//   ) {
//     res.status(400).json({
//       result: "failure",
//       message: "Video could not be saved",
//     });
//   } else {
//     const query =
//       "INSERT INTO videos (title, url, rating, createdAt) VALUES (?, ?, 0, NOW())";

//     // Convert mobile YouTube links to standard format
//     let formattedUrl;
//     if (url.startsWith("https://youtu.be")) {
//       const [, rest] = url.split("https://youtu.be/");
//       const [videoId] = rest.split("?");
//       formattedUrl = `https://www.youtube.com/watch?v=${videoId}`;
//     }

//     db.query(query, [title, formattedUrl || url], err => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Database error");
//       } else {
//         res.status(201).send("Added a new video");
//       }
//     });
//   }
// });

// // This endpoint is used to delete a single video with a given ID
// app.delete("/videos/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const query = "DELETE FROM videos WHERE id = ?";

//   db.query(query, [id], err => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Database error");
//     } else {
//       res.send(`Video ${id} deleted!`);
//     }
//   });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));

//💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫💫

require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Credentials for MySQL database
const db = mysql.createConnection({
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
});

// Connecting to MySQL database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the video API!");
});

// This endpoint is used to get all the videos
app.get("/videos", (req, res) => {
  const query = "SELECT * FROM videos ORDER BY title";

  db.query(query, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("Database Error");
    } else {
      res.json(result);
    }
  });
});

// This endpoint is used to get a single video with a given ID
app.get("/videos/:id", (req, res) => {
  const id = Number(req.params.id);
  const query = "SELECT * FROM videos WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        result: "failure",
        message: "Database Error",
      });
    } else {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.status(404).json({
          result: "failure",
          message: "Video could not be found",
        });
      }
    }
  });
});

// This endpoint is used to add a new video
app.post("/videos", (req, res) => {
  const { title, url } = req.body;
  if (
    !title ||
    !url ||
    (!url.startsWith("https://www.youtube.com") &&
      !url.startsWith("https://youtu.be") &&
      !url.startsWith("https://m.youtube.com") &&
      !url.startsWith("https://youtube.com/"))
  ) {
    res.status(400).json({
      result: "failure",
      message: "Video could not be saved",
    });
  } else {
    const query = "INSERT INTO videos (title, url) VALUES (?, ?)";

    // Convert mobile YouTube links to standard format
    let formattedUrl;
    if (url.startsWith("https://youtu.be")) {
      const [, rest] = url.split("https://youtu.be/");
      const [videoId] = rest.split("?");
      formattedUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }

    db.query(query, [title, formattedUrl || url], err => {
      if (err) {
        console.log(err);
        res.status(500).send("Database error");
      } else {
        res.status(201).send("Added a new video");
      }
    });
  }
});

// This endpoint is used to delete a single video with a given ID
app.delete("/videos/:id", (req, res) => {
  const id = Number(req.params.id);
  const query = "DELETE FROM videos WHERE id = ?";

  db.query(query, [id], err => {
    if (err) {
      console.error(err);
      res.status(500).send("Database error");
    } else {
      res.send(`Video ${id} deleted!`);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
