CREATE DATABASE apptracker;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255),
    position VARCHAR(255),
    location VARCHAR(255),
    process VARCHAR(255),
    userid INT
);

ALTER TABLE "jobs" ADD CONSTRAINT "jobs_fk0" FOREIGN KEY ("userid") REFERENCES "users"("id");