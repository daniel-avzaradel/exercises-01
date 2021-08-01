create table users (
	id serial primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	email varchar(255) not null,
	age int not null
)

insert into users (first_name, last_name, email, age)
values ('Daniel', 'Avzaradel', 'daniel.avzaradel@gmail.com', 32),
('David', 'Avzaradel', 'david.avzaradel@gmail.com', 32)

select * from users

delete from users where id = 9