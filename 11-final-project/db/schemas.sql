CREATE DATABASE `mario_game` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `mario_info` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_username` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_highscore` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
