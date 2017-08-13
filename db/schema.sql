-- Schema for eatdaburger db 

create database if not exists burgers_db; 

use burgers_db; 

create table burgers (
	id int not null auto_increment,
    burger_name varchar(100) not null,
    devoured bool default false, 
    time_stamp timestamp default current_timestamp,
    primary key (id)
);  

