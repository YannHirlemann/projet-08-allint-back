-- Revert allint:init from pg

BEGIN;

DROP TABLE IF EXISTS "allergy_product", "user_allergy", "product", "category", "brand", "allergy", "user", "role";

COMMIT;
