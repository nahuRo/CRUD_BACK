CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT(11) NOT NULL AUTO_INCREMENT,
    tittle VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tasks (tittle, description) VALUES
    ('task 1', 'some description 1'),
    ('task 2', 'some description 2');
