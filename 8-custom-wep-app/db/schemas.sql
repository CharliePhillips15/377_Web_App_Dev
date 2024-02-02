CREATE TABLE `albums` (
  `alb_id` int NOT NULL AUTO_INCREMENT,
  `alb_title` varchar(200) NOT NULL,
  `alb_duration` int DEFAULT NULL,
  `alb_artist` varchar(200) DEFAULT NULL,
  `alb_genre` varchar(100) DEFAULT NULL,
  `alb_first_week_sales` int DEFAULT NULL,
  `alb_rym` varchar(100) DEFAULT NULL,
  `alb_rating` decimal(3,2) DEFAULT NULL,
  `alb_release_date` datetime DEFAULT NULL,
  `alb_grammy` int DEFAULT NULL,
  PRIMARY KEY (`alb_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
