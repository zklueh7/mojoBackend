-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email)
VALUES ('momo123',
        'password',
        'Momo',
        'Pluenneke',
        'momo@gmail.com');

INSERT INTO dogs_owner_rq (  
        owner_first_name,
        owner_last_name,
        owner_st_address,
        owner_city,
        owner_state,
        owner_zip,
        owner_email,
        owner_home_phone,
        owner_cell_phone,
        photos,
        dog_name,
        dog_sex,
        dog_age,
        dog_color,
        dog_breed,
        relinquish_reason,
        how_far_owner,
        dog_purchase,
        dog_bite,
        dog_nip,
        dog_health,
        dog_vet_hist,
        dog_heartform,
        dog_kids,
        dog_negative,
        dog_fearful,
        dog_negative_deets,
        dog_noises,
        dog_movement,
        dog_tricks,
        dog_adjectives,
        dog_agro_examples,
        dog_improvement,
        dog_location,
        dog_alone,
        dog_crate_time,
        dog_crate_behavior,
        dog_crate_behavior_deets,
        dog_animals,
        attest)
VALUES (  
        'Zoey',
        'Klueh',
        '1260 Kalmia Ave',
        'Boulder',
        'CO',
        '80304',
        'zklueh@gmail.com',
        '407-575-8381',
        '407-575-8381',
        'pics',
        'June',
        'Female',
        '4',
        'Merle',
        'Mutt',
        'Poopy butt',
        '1 min',
        'This is a joke shes mine',
        'No',
        'Yes she crazy',
        'Oh yeah',
        'Current on shots',
        'Negative',
        'She likes kiddos',
        'Sometimes with other dogs',
        'Scared of the beep beeps',
        'ajdsfh',
        'asdf',
        'adsf',
        'adsf',
        'cuteeee',
        'adsf',
        'adfafdadfadfadf',
        'adfadsf',
        'adsfdsf',
        'asdfad',
        'adsfadf',
        'adsfadf',
        'adsf',
        'okie');