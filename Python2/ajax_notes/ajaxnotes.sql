CREATE DATABASE ajaxNotes;
USE ajaxNotes;

CREATE TABLE notes
(
    id int  not null auto_increment,
    title varchar(255) NOT NULL,
    description text,
    created_at datetime NOT NULL,
    updated_at datetime NOT NULL,
    primary key(id)
);

DROP TABLE notes;

INSERT INTO notes(title,description,created_at,updated_at) values('Flask','KALDJFA DAKadjajf akfjdajf adjfaljd.', NOW(), NOW());

SELECT * FROM notes;
