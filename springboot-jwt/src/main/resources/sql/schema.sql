create table app_user
(
    id              integer      not null auto_increment,
    name             varchar(255) not null,
    email            varchar(255) not null,
    password         varchar(255) not null,
    primary key (id)
);