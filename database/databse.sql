create database if not exists projectdb;
use projectdb;
create table users(
    id int auto_increment primary key,
    name varchar(100),
    email varchar(100)
);