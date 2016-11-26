DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `description` text,
    `created_at` datetime DEFAULT NULL,
    `updated_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

LOCK TABLES `posts` WRITE;
INSERT INTO `posts` VALUES (34, 'Testing, testing...','2016-11-16 20:18:09','2016-11-16 20:18:09');
UNLOCK TABLES;