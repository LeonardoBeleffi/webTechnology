-- ----------
-- Example db
-- ----------

CREATE DATABASE giugno;

USE giugno;

CREATE TABLE `insiemi` (
  `id` int(11) NOT NULL,
  `valore` int(11) NOT NULL,
  `insieme` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

ALTER TABLE `insiemi`
ADD PRIMARY KEY (`id`);

ALTER TABLE `insiemi`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `insiemi` (`id`, `valore`, `insieme`) VALUES
(1, 19, 1),
(2, 2, 1),
(3, 14, 1),
(4, 98, 2),
(5, 1, 2),
(6, 19, 2);

