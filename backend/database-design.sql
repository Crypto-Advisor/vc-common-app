CREATE TABLE applications(
    id integer PRIMARY KEY,
    name varchar(30),
    username varchar(30) REFERENCES accounts(username)
                        ON DELETE CASCADE
                        ON UPDATE CASCADE
);

CREATE TABLE application_data(
    id integer PRIMARY KEY REFERENCES applications(id),
    amount_to_raise integer,
    resources_links text,
    description text
);

CREATE TABLE accounts(
    username varchar(30) PRIMARY KEY NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    password varchar(30) NOT NULL,
    account_type integer NOT NULL
);

/*
account_type values
    VC    startup    admin
0 : x
1 :         x
2 : x       x
3 : x       x         x

*/


/* Sample Account Data */

INSERT INTO accounts (username, email, password, account_type) 
VALUES ('admin_tester', 'admin_tester@gmail.com', 'pass123', 3);

INSERT INTO accounts (username, email, password, account_type) 
VALUES ('vc_tester', 'vc_tester@gmail.com', 'pass123', 0);

INSERT INTO accounts (username, email, password, account_type) 
VALUES ('startup_tester', 'startup_tester@gmail.com', 'pass123', 1);

INSERT INTO accounts (username, email, password, account_type) 
VALUES ('vc_startup_tester', 'vc_startup_tester@gmail.com', 'pass123', 2);


/* Sample applications Data */

INSERT INTO applications (id, name, username) 
VALUES (1, 'Venture Node', 'admin_tester');

INSERT INTO applications (id, name, username) 
VALUES (2, 'Space X', 'startup_tester');

/* Sample application Data */

INSERT INTO application_data (id, amount_to_raise, resources_links, description)
VALUES (1, 100000, 'twitter.com/random', 'amazing company');

INSERT INTO application_data (id, amount_to_raise, resources_links, description)
VALUES (2, 10, 'twitter.com/better', 'the best company');


/* sample update */

UPDATE accounts
SET password = 'newpass123'
WHERE username = 'admin_tester';