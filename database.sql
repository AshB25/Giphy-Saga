-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"image_url" VARCHAR (250) NOT NULL,
	"category_id" INT REFERENCES "categories"
);

-- Placeholder images
INSERT INTO "favorites" ("image_url", "category_id")
    VALUES
    ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXN1Z3l6c2luYzJ1NnNodHRxNnVvOWk0YTFxZzR4d2lkeXM0c3UwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lCbSAbRrFEfkY/giphy.gif', 4),
    ('https://media.giphy.com/media/gVlgj80ZLp9yo/giphy.gif', 5),
    ('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHpxZWR6em91ZjNkZ3RtdW1ydDkxMDdxOGlmM3Rjc3B1ZXBhcDhmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ofSBzfEkuZhDZs9t6/giphy.gif', 2);