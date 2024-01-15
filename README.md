# Blog Domain Challenge 1

## Learning Objectives

- Modify an incomplete entity relationship diagram to include relationships
- Use an ORM to implement a database design
- Use an ORM to create data in a database

## Introduction

This challenge is an opportunity to practice everything we've learned about database design and ORM's. An incomplete entity relationship diagram has already been provided in the first requirement file; your task is to give the entities some appropriate fields and relationships, implement that design in Prisma and then populate the database with seed data.

## Setting up

**Note: Although we do need a new primary database for this exercise, we can reuse the shadow database created in the earlier exercise across as many new projects as we like. This is because prisma always resets it back to a fresh state after using it.**

1. Rename the `.env.example` file to `.env`. The [.gitignore](./.gitignore) file ensures that `.env` won't be tracked in the repository, keeping sensitive data safe.
2. Create a new database instance in [ElephantSQL](https://www.elephantsql.com/).
3. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
4. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the **shadow database you created in the previous exercise**. Leave `?schema=shadow` at the end. (Note that if you create a new instance for your shadow database, you will need to create the `shadow` schema too.)
6. Run `npm ci` to install the project dependencies.
7. Run `npx prisma migrate reset` to execute the existing migration & data seed. Press `y` when it asks if you're sure.

## Instructions
- Add an image of your complete entity relationship diagram to the root directory of this repository
- Work through each requirement in the `./requirements/` directory in numeric order
- Ensure that your `seed.js` file creates the following data as a minimum:
    - 3 users
    - 3 profiles
    - Each user has at least 2 posts (so you will have at least 6 posts in total)
    - Each user has at least 1 post with 1 comment and at least 1 post with no comments (so you will have at least 3 comments in total)
- In the project root directory, create a `src` folder, and in it:
  - Create a `db.js` file where you create your Prisma client instance
  - Create an `index.js` file where you will write some queries
- In the `src/index.js` file, write the following queries:
    - Get all rows of data from the users table
    - Get all posts that belong to the user with ID 2
    - Get the user with ID 1 and include their profile in the response
    - Update the post with ID 1 so that its text/content is different from what was created in the seed file
    - Delete the post with ID 3

> Use the [Prisma docs](https://www.prisma.io/docs/orm/reference/prisma-client-reference) to help you.

## Extension 1

Once you've completed every requirement, here are some additional challenges you should complete:

1. Add a one-to-many self-relation to the Comment model to allow comments to have replies, and update the seed file to accomodate this change
    - [Self-relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/self-relations#one-to-many-self-relations)
