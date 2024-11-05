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

CREATE TABLE dogs_owner_rq (
  owner_first_name TEXT,
  owner_last_name TEXT,
  owner_st_address TEXT,
  owner_city TEXT,
  owner_state TEXT,
  owner_zip TEXT,
  owner_email TEXT,
  owner_home_phone TEXT,
  owner_cell_phone TEXT,
  photos TEXT,
  dog_name TEXT,
  dog_sex TEXT,
  dog_age TEXT,
  dog_color TEXT,
  dog_breed TEXT,
  relinquish_reason TEXT,
  how_far_owner TEXT,
  dog_purchase TEXT,
  dog_bite TEXT,
  dog_nip TEXT,
  dog_health TEXT,
  dog_vet_hist TEXT,
  dog_heartform TEXT,
  dog_kids TEXT,
  dog_negative TEXT,
  dog_fearful TEXT,
  dog_negative_deets TEXT,
  dog_noises TEXT,
  dog_movement TEXT,
  dog_tricks TEXT,
  dog_adjectives TEXT,
  dog_agro_examples TEXT,
  dog_improvement TEXT,
  dog_location TEXT,
  dog_alone TEXT,
  dog_crate_time TEXT,
  dog_crate_behavior TEXT,
  dog_crate_behavior_deets TEXT,
  dog_animals TEXT,
  attest TEXT
);

CREATE TABLE dogs_shelter_rq (
  shelter_name TEXT,
  contact_name TEXT,
  contact_type TEXT,
  contact_method TEXT,
  contact_method_details TEXT,
  owner_city TEXT,
  owner_state TEXT,
  owner_zip TEXT,
  owner_email TEXT,
  owner_home_phone TEXT,
  owner_cell_phone TEXT,
  photos TEXT,
  dog_name TEXT,
  dog_sex TEXT,
  dog_age TEXT,
  dog_color TEXT,
  dog_breed TEXT,
  relinquish_reason TEXT,
  how_far_owner TEXT,
  dog_purchase TEXT,
  dog_bite TEXT,
  dog_nip TEXT,
  dog_health TEXT,
  dog_vet_hist TEXT,
  dog_heartform TEXT,
  dog_kids TEXT,
  dog_negative TEXT,
  dog_fearful TEXT,
  dog_negative_deets TEXT,
  dog_noises TEXT,
  dog_movement TEXT,
  dog_tricks TEXT,
  dog_adjectives TEXT,
  dog_agro_examples TEXT,
  dog_improvement TEXT,
  dog_location TEXT,
  dog_alone TEXT,
  dog_crate_time TEXT,
  dog_crate_behavior TEXT,
  dog_crate_behavior_deets TEXT,
  dog_animals TEXT,
  attest TEXT
);