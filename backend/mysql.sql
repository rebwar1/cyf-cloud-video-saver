-- CREATE DATABASE IF NOT EXISTS video_app;
-- USE video_app;
-- CREATE TABLE IF NOT EXISTS videos (
--        id INT AUTO_INCREMENT PRIMARY KEY,
--       title VARCHAR(255) NOT NULL,
--        youtube_url VARCHAR(255) NOT NULL
--      );





CREATE DATABASE IF NOT EXISTS video_app;
USE video_app;
DROP TABLE IF EXISTS videos;

✅✅✅✅✅✅
mysql -u root -p -h flask-db.cy6umk9m6bqn.eu-west-2.rds.amazonaws.com

CREATE USER 'user1'@'%' IDENTIFIED BY 'azad4582';

GRANT ALL PRIVILEGES ON video_app.* TO 'user1'@'%';

FLUSH PRIVILEGES;

USE video_app;
🍇🍇🍇🍇🍇🍇🍇🍇🍇

CREATE TABLE videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  url VARCHAR(100) NOT NULL
);

-- Insert sample data (without rating and createdAt)
INSERT INTO videos (title, url)
VALUES
  ('Use ChatGPT to Code a Full Stack App – Full Course', 'https://www.youtube.com/watch?v=GizsSo-EevA'),
  ('Advanced C# Programming Course', 'https://www.youtube.com/watch?v=YT8s-90oDC0'),
  ('Harvard CS50 – Full Computer Science University Course', 'https://www.youtube.com/watch?v=8mAITcNt710'),
  ('JavaScript DOM Manipulation – Full Course for Beginners', 'https://www.youtube.com/watch?v=5fb2aPlgoys'),
  ('Python for Beginners – Full Course [Programming Tutorial]', 'https://www.youtube.com/watch?v=eWRfhZUzrAc'),
  ('Self-Driving Car with JavaScript Course', 'https://www.youtube.com/watch?v=Rs_rAxEsAvI'),
  ('Python for Data Science - Course for Beginners', 'https://www.youtube.com/watch?v=LHBE6Q9XlzI'),
  ('Statistics - A Full University Course on Data Science Basics', 'https://www.youtube.com/watch?v=xxpc-HPKN28'),
  ('Why Most Self-Taught Developers Never Land The Job', 'https://www.youtube.com/watch?v=_fI-b32KxX8');

-- Select all data from the videos table
SELECT * FROM videos;

how to se all DATABASES
SHOW DATABASES;


DROP TABLE IF EXISTS videos;


mysql -u root -p

mysql -u root -p -h flask-db.cy6umk9m6bqn.eu-west-2.rds.amazonaws.com

✅✅✅✅✅✅

////////////////////////

CREATE USER 'user1'@'%' IDENTIFIED BY 'azad4582';

GRANT ALL PRIVILEGES ON video_app.* TO 'user1'@'%';

FLUSH PRIVILEGES;

USE video_app;


🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧
pkill node
sudo lsof -i :3001

Install PM2:

sudo npm install -g pm2
sudo pm2 install pm2-logrotate

Start App as Background Service:

sudo pm2 start server.js --name node-app

sudo pm2 logs 1

🍇
sudo pm2 kill
sudo pm2 resurrect

✅✅✅✅✅✅

sudo vim ~/.aws/config

💫
aws configure
aws s3 sync build/ s3://youtube-saver      -this is name of bucket-

🍉

 rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
 -e "ssh -i ~/.ssh/cyf.pem" \
 . ubuntu@ec2-35-198-437-240.eu-west-2.compute.amazonaws.com:~/app


