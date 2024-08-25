-- Table: public.product
-- DROP TABLE IF EXISTS public.product;
CREATE TABLE
  IF NOT EXISTS product (
    sku CHARACTER VARYING(100) NOT NULL,
    product_name CHARACTER VARYING(100) NOT NULL,
    price CHARACTER VARYING(25) NOT NULL,
    product_type CHARACTER VARYING(25) NOT NULL,
    product_attribute CHARACTER VARYING(25) NOT NULL,
    CONSTRAINT product_pkey PRIMARY KEY (sku)
  ) TABLESPACE pg_default;

ALTER TABLE IF EXISTS product OWNER TO postgres;

-- Index: product_sku_key
-- DROP INDEX IF EXISTS public.product_sku_key;
-- CREATE UNIQUE INDEX IF NOT EXISTS product_sku_key ON product USING btree (sku COLLATE ASC NULLS LAST) TABLESPACE pg_default;
-- Dumping data for table `product`
INSERT INTO
  product (sku, product_name, price, product_type, product_attribute)
VALUES
  ('SKUTestSKU000', 'NameTest000', '25', 'DVD', '200'),
  ('SKUTestSKU001', 'NameTest001', '25', 'Book', '200'),
  ('SKUTestSKU002', 'NameTest002', '25', 'Furniture', '200x200x200');

-- ------------------------------------------------------------------------
-- Table: public.account
-- DROP TABLE IF EXISTS public.account;
CREATE TABLE
  IF NOT EXISTS account (
    id SERIAL NOT NULL,
    username CHARACTER VARYING(100) NOT NULL,
    user_email CHARACTER VARYING(100) NOT NULL UNIQUE,
    user_role CHARACTER VARYING(20) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_last_updated TIMESTAMP NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id)
  ) TABLESPACE pg_default;

ALTER TABLE IF EXISTS account OWNER TO postgres;

-- Index: user_id_key
-- DROP INDEX IF EXISTS public.user_id_key;
-- CREATE UNIQUE INDEX IF NOT EXISTS user_id_key ON account USING btree (id COLLATE ASC NULLS LAST) TABLESPACE pg_default;
-- Dumping data for table account
INSERT INTO
  account (username, user_email, user_role, date_created, date_last_updated)
VALUES
  ('Name test 001', 'test01test@test.com', 'admin', '2022-08-31 11:23:12', '2023-10-31 12:05:14'),
  ('Name test 002', 'test02test@test.com', 'user', '2020-08-31 11:23:12', '2023-10-31 12:05:14'),
  ('Name test 003', 'test03test@test.com', 'admin', '2022-08-31 11:23:12', '2022-10-31 12:05:14'),
  ('Ambrosio Nascimento', 'ambrosionasci@test.com', 'verified', '2020-08-31 11:23:12', '2023-10-31 12:05:14'),
  ('Benjamin Carmine', 'b.carmine@test.com', 'verified', '2021-08-31 00:00:00', '2023-10-31 12:05:14');

COMMIT;