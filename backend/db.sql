create table product (
	id serial primary key,
	description text,
	price integer[],
	title varchar(255),
	discount integer,
	mainimg varchar(255),
	sizes integer array,
	imgs varchar(255) array,
	article varchar(255),
	category varchar(255),
	color varchar(255) array,
	brand varchar(255) array,
	model varchar(255),
	collaboration varchar(255)
);

create table person (
	id serial primary key,
	passwordhash varchar(255),
	firstname varchar(20),
	surname varchar(20),
	email varchar(255) unique,
	phone varchar(255),
	basket varchar(255)[][],
	addresses integer array
);

create table orders (
	id serial primary key,
	date varchar(255),
	products integer[][],
	status varchar(255),
	userid integer,
	sizes integer[],
	result integer,
	foreign key (userid) references person(id)
);

create table address (
	id serial primary key,
	index integer,
	userid integer,
	city varchar(30),
	country varchar(30),
	street varchar(50),
	house varchar(20),
	apartment integer,
	firstname varchar(30),
	surname varchar(30),
	phone varchar(30),
	company varchar(30),
	foreign key (userid) references person(id)
);

create table tokens (
	id serial primary key,
	userid integer unique,
	refreshToken varchar(255)
);

-- in basket we have to push array (id_product, price, date, status)