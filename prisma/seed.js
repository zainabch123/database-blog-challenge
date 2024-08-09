const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createManyAndReturn({
    data: [
      { username: "alicemartn", email: "aliceMartin@gmail.com" },
      { username: "john_smith", email: "johnSmith@gmail.com" },
      { username: "dorisP12", email: "dorisParker@gmail.com" },
    ],
  });

  console.log(`Users created:`, createdUsers);

  // Add your code here
  const createdProfiles = await prisma.profile.createManyAndReturn({
    data: [
      {
        imgURL:
          "https://ids.si.edu/ids/deliveryService?id=NMAH-JN2018-00098-000001",
        bio: "Hi my name is Alice and this is my bio!",
        userId: createdUsers[0].id,
      },
      {
        imgURL:
          "https://www.veggierunners.com/wp-content/uploads/2012/12/Swedishchef.jpg",
        bio: "Hi my name is John and this is my bio!",
        userId: createdUsers[1].id,
      },
      {
        imgURL: "https://upload.wikimedia.org/wikipedia/en/2/22/MissPiggy.jpg",
        bio: "Hi my name is Doris and this is my bio!",
        userId: createdUsers[2].id,
      },
    ],
  });

  console.log(`Profiles created:`, createdProfiles);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
