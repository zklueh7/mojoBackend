\echo 'Delete and recreate catchapp db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE mojo;
CREATE DATABASE mojo;
\connect mojo

\i mojo-schema.sql
\i mojo-seed.sql

\echo 'Delete and recreate catchapp_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE mojo_test;
CREATE DATABASE mojo_test;
\connect mojo_test

\i mojo-schema.sql
