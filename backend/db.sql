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
	collaboration varchar(255),
	quantity integer
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Дата создания заказа
    user_id INTEGER NOT NULL, -- ID пользователя (предполагается наличие таблицы users)
    status VARCHAR(50) NOT NULL, -- Статус заказа: 'pending', 'shipped', 'delivered' и т.д.
    total_price INTEGER NOT NULL, -- Общая стоимость заказа
    delivery_address TEXT, -- Адрес доставки
    payment_method VARCHAR(50), -- Метод оплаты
    UNIQUE(id) -- Уникальность ID заказа
);

create table person_basket (
	id serial primary key,
	person_id integer not null references person(id),
	quantity integer not null,
	product_id integer not null references product(id),
	size integer,
	title varchar(255),
	max_quantity integer,
	description varchar(255),
	color varchar(255),
	unique(product_id, person_id, color, size)
);

CREATE TABLE order_product (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES product(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price_per_unit INTEGER NOT NULL,
    size INTEGER NOT NULL,
    color VARCHAR(255) NOT NULL,
    UNIQUE(order_id, product_id, size, color) -- Уникальность связи между заказом, продуктом, размером и цветом
);

create table person (
	id serial primary key,
	passwordhash varchar(255),
	firstname varchar(20),
	surname varchar(20),
	email varchar(255) unique,
	phone varchar(255),
	basket integer []
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