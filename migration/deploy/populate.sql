-- Deploy allint:populate to pg
BEGIN;

INSERT INTO "role" ("name") VALUES
('admin'),
('user');

INSERT INTO "user" ("lastname", "firstname", "email", "password", "role_id") VALUES
('DURAND', 'Alexandre', 'alexandredurand@gmail.com', 'gdsKLHFGd36', 2),
('LEFEBVRE', 'Julie', 'julielefebvre@gmail.com', 'juelrieren97', 2),
('ROUX', 'Nicolas', 'nicolasroux@hotmail.fr', 'ùmlkjhgfdsqSDFGHJKLKKKJHDFDXGC', 2),
('LEROY', 'Nathalie', 'nathalieleroy@gmail.com', 'nathalieieruei798752', 2),
('ROUSSEAU', 'Michel', 'michelrousseau@gmail.com', 'pmoperzormez975', 2),
('DUPOND', 'jean-Julien', 'jeanjuliendupond@gmail.com', 'jeanjean98$', 2),
('MERCIER', 'Laura', 'lauramercier@gmail.com', '12345', 2),
('BLANC', 'Clitorine', 'clitorineblanc@gmail.com', 'cliclidu93', 2),
('PERRIN', 'Marie', 'marieperrin@gmail.com', 'azerty', 2),
('GIRAUD', 'Benjamin', 'benjamingiraud@gmail.com', 'motdepas$(', 2),
('QUEEN T', 'Tatiana', 'tatianaqueent@gmail.com' , '12345', 1),
('MISTER T', 'Thibaut','MisterT@king.com', 'IamaKingoftheworld', 2),
('Monsieur D', 'Damien', 'damdamLeD@damien.com', 'erziyughjfsdwcxvbn', 2),
('Mademoiselle M', 'Mathilde', 'McommeMatou@gmail.com', '12345', 2),
('Mister G', 'Geoffroy', 'MG@gg.com', 'MisterG', 2);


INSERT INTO "allergy" ("name", "allergens") VALUES
('Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut ou leurs souches hybridées) et produits à base de ces céréales', TRUE),
('crustacés et produits à base de crustacés', TRUE),
('Œufs et produits à base d’œufs', TRUE),
('Arachides et produits à base d''arachides', TRUE),
('Poissons et produits à base de poissons', TRUE),
('Soja et produits à base de soja', TRUE),
('Lait et produits à base de lait (y compris de lactose)', TRUE),
('Fruits à coques (amandes, noisettes, noix, noix de cajou, pécan, macadamia, du Brésil, du Queensland, pistaches) et produits à base de ces fruits', TRUE),
('Céleri et produits à base de céleri', TRUE),
('Moutarde et produits à base de moutarde', TRUE),
('Graines de sésame et produits à base de graines de sésame', TRUE),
('Anhydride sulfureux et sulfites en concentration de plus de 10 mg/kg ou 10 mg/l', TRUE),
('Lupin et produits à base de lupin', TRUE),
('Mollusques et produits à base de mollusques', TRUE),
('tomate', FALSE),
('Choux', FALSE);

INSERT INTO "user_allergy" ("user_id", "allergy_id") VALUES
(1, 15),
(1, 4),
(1, 16);

INSERT INTO "brand" ("name") VALUES
('Ferrero'),
('Panzani'),
('Heinz');
/*
('Lactel'),
('Nestle'),
('Jardin Bio'),
('florette'),
('Fleury Michon'),
('Puget'),
('Saupiquet'),
*/
INSERT INTO "category" ("name") VALUES
('Pâte à tartiner'),
('Pâtes'),
('Condiment');
/*
('Boissons'),
('Cereales'),
('Fruits'),
('Légumes'),
('Viandes'),
('Condiments'),
('Poissons'),
*/

INSERT INTO "product" ("id", "name", "product_picture", "ingredients_picture", "ingredients", "category_id", "brand_id") VALUES
('3017620425035', 'Nutella', 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.400.jpg', 'https://images.openfoodfacts.org/images/products/301/762/042/5035/ingredients_fr.423.400.jpg', 'Sucre, huile de palme, NOISETTES 13%, LAIT écrémé en poudre 8,7%, cacao maigre 7,4%, émulsifiants: lécithines [SOJA]; vanilline, Lait, Fruits à coque, Soja', 1, 1),
('3038350013606', 'Torti', 'https://images.openfoodfacts.org/images/products/303/835/001/3606/front_fr.120.400.jpg', 'https://images.openfoodfacts.org/images/products/303/835/001/3606/ingredients_fr.89.400.jpg', '100% semoule de blé dur de qualité supérieure, Gluten', 2, 2),
('8715700017006', 'ketchup', 'https://images.openfoodfacts.org/images/products/871/570/001/7006/front_fr.58.400.jpg', 'https://images.openfoodfacts.org/images/products/871/570/001/7006/ingredients_fr.40.400.jpg', 'tomates (148 g pour 100 g de Tomato Ketchup), vinaigre, sucre, sel, extraits d''épices et d''herbes (contiennent du céleri), épice, allergènes : Céleri, traces : Céleri', 3, 3);
/*
('Lait'),
('Chocapic'),
('Tomate'),
('Salade'),
('Jambon'),
('Huile Olive'),
('colin'),
*/

COMMIT;
