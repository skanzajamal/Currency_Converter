DROP TABLE IF EXISTS currency;

CREATE TABLE currency (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  to_Currency VARCHAR(250) NOT NULL,
  from_Currency VARCHAR(250) NOT NULL,
  timestamp VARCHAR(250) NOT NULL,
  to_value DOUBLE NOT NULL,
  from_value DOUBLE NOT NULL
);