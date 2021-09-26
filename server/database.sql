CREATE DATABASE apptracker;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    position VARCHAR(255),
    process VARCHAR(20),
    userid INT
);

ALTER TABLE "jobs" ADD CONSTRAINT "jobs_fk0" FOREIGN KEY ("userid") REFERENCES "users"("id");