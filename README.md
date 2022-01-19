# Blog Domain Challenge 1

## Learning Objectives

- Modify an incomplete entity relationship diagram to include relationships
- Use an ORM to implement a database design
- Use an ORM to create data in a database

## Introduction

This challenge is an opportunity to practice everything we've learned about database design and ORM's. An incomplete entity relationship diagram has already been provided in the first requirement file; your task is to give the entities some appropriate fields and relationships, implement that design in Prisma and then populate the database with seed data.

## Setting up

1. Rename the `.env.example` file to `.env`. The [.gitignore](./.gitignore) file ensures that `.env` won't be tracked in the repository, keeping sensitive data safe.
2. Create a new database instance in [ElephantSQL](https://www.elephantsql.com/).
3. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
4. Create another new instance in ElephantSQL (this will be your [Shadow Database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database)).
5. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created. Leave `?schema=public` at the end.
6. Run `npm ci` to install the project dependencies.
7. Run `npx prisma migrate reset` to execute the existing migration & data seed. Press `y` when it asks if you're sure.

## Instructions
- Work through each requirement in the `./requirements/` directory in numeric order
- Add an image of your complete entity relationship diagram to the root directory of this repository
