CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE test (
  name TEXT NOT NULL,
  food_type TEXT NOT NULL,
  toppings TEXT NOT NULL
);