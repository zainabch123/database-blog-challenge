const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUser = await prisma.user.create({
        data: {
            username: 'alice'
        }
    })

    console.log('User created', createdUser);

    // Add your code here

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })