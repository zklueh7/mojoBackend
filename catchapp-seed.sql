-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, looking_for_partners, climbing_type, experience_level, picture_url)
VALUES ('zklueh',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Zoey',
        'Klueh',
        'zklueh@gmail.com',
        'Yes',
        'Sport, Trad',
        '2 years',
        'data:image/jpeg;base64,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'),
        
       ('junebug',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'June',
        'Klueh',
        'jklueh@gmail.com',
        'Yes',
        'Sport, Bouldering',
        '10+ years',
        'data:image/png;base64,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'),

        ('billybeans',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Billy',
        'Beans',
        'bbeans@gmail.com',
        'Yes',
        'Bouldering',
        '15 years',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pb_YQ76neL-t6avDpRB0zS9ykfH-s0m4Kg&s');

INSERT INTO areas (name, title, latitude, longitude, description, picture_url)
VALUES ('tensleep',
        'Ten Sleep, WY', 
         '44.03', 
         '-107.45', 
        'Ten sleep canyon is a limestone sport paradise! Expect pockets, edges, and flakes galore. Many crags dot both sides of the canyon, making for pleasantly shaded climbing to be found all summer long.', 
        'https://www.nomadswithapurpose.com/wp-content/uploads/2021/05/Tensleep-climbing-guide-4-1080x720.jpg.webp'),

        ('rifle', 
         'Rifle, CO',
          '39.54', 
          '-107.79', 
         'Although Rifle canyon is only a couple of miles from end to end, dont be fooled - hundreds of pristine lines await. Get ready to try hard and dont forget your kneebar pad!', 
         'https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/1/5d/15d5b0a2-22b4-11ee-bf38-3b8a461451df/64b1feef18879.image.jpg'),

        ('squamish', 
        'Squamish, BC', 
         '49.7', 
         '-123.16', 
        'Squamish is a certified mecca of granite climbing. Whether bouldering, trad, or sport is your thing all will find countless 5 star climbs at this world class destination.', 
        'https://www.exploresquamish.com/site/assets/files/21124/stawamus_chief_srchdixgtnjgw6kunnx_vxt18q0ablzbh_rgb_l.2400x1148.webp'),

        ('wildiris',
        'Wild Iris, WY',
        '42.83',
        '-108.73',
        'Lander is home to many crags, but Wild Iris may be its most unique area. At an elevation of 9000 ft it makes for an excellent escape from the summer heat.',
        'https://www.novaugust.net/blog/wp-content/uploads/2013/07/IMG_8509.jpg?ref=blog.novaugust.net');