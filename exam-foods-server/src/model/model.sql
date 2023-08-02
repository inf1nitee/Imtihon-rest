
CREATE TABLE categorys(
    category_id serial PRIMARY KEY,
    category_name text not null
);

CREATE TABLE restarans(
    restaran_id serial PRIMARY KEY,
    restaran_name text not null,
    category int REFERENCES categorys(category_id)NOT NULL
);
CREATE TABLE branches(
    branch_id serial PRIMARY KEY,
    branch_name text not null,
    restaran int REFERENCES restarans(restaran_id)NOT NULL
);

CREATE TABLE menus(
    menu_id serial PRIMARY KEY,
    menu_name text not null,
    menu_price int not null,
    branch int REFERENCES branches(branch_id)NOT NULL
);


CREATE TABLE orders(
    orderid serial PRIMARY KEY,
    order_id text not null,
    order_name text not null,
    order_price int not null
);
INSERT INTO categorys(category_name) VALUES('Milliy');
INSERT INTO categorys(category_name) VALUES('FastFood');


INSERT INTO restarans(restaran_name, category) VALUES('Rayhon',1);
INSERT INTO restarans(restaran_name, category) VALUES('Oqtepa Lavash',2);


INSERT INTO branches(branch_name, restaran) VALUES('Rayhon Chilonzor',1);
INSERT INTO branches(branch_name, restaran) VALUES('Rayhon Sergli',1);
INSERT INTO branches(branch_name, restaran) VALUES('Oqtepa Lavash Sergli',2);
INSERT INTO branches(branch_name, restaran) VALUES('Oqtepa Lavash Chilonzor',2);




