CREATE DATABASE tuf_users;
USE tuf_users;

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    lang VARCHAR(255) NOT NULL,
    stdin TEXT,
    src_code VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW();
)
INSERT INTO users (username, lang, src_code)
VALUES
('ptech12', 'python', 'print("Hello World")')
