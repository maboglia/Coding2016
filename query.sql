USE Coding2016;

CREATE TABLE IF NOT EXISTS `users` (

	`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(100),
    `email` varchar(100),
    `phone` varchar(15),
    `created` datetime,
	`modified` datetime,
    `status` enum('1', '0')

);


INSERT INTO `users` (`id`, `name`, `email`, `phone`, `created`, `modified`, `status`) VALUES
(1, 'Lino Rossi', 'rossi@gmail.com', '6666666666', '2016-07-13 08:23:23', '2016-07-13 08:23:23', '1'),
(2, 'Gino Neri', 'neri@gmail.com', '8888888888', '2016-07-12 08:23:23', '2016-07-12 08:23:23', '1'),
(3, 'Pino Verdi', 'verdi@gmail.com', '1234321564', '2016-07-14 08:23:23', '2016-07-14 08:23:23', '1'),
(4, 'Tino Gialli', 'gialli@gmail.com', '9999999999', '2016-07-10 08:23:23', '2016-07-10 08:23:23', '0'),
(5, 'Cino Azzurri', 'azzurri@gmail.com', '9898899889', '2016-07-09 08:23:23', '2016-07-09 08:23:23', '1'),
(6, 'Nino Grigi', 'grigi@gmail.com', '7777777777', '2016-06-28 08:23:23', '2016-06-28 08:23:23', '0');
