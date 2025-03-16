import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  const user1 = await prisma.user.upsert({
    where: { email: 'msilva@gmail.com' },
    update: {},
    create: {
      email: 'msilva@gmail.com',
      name: 'Maria Silva',
      profileImage: 'https://example.com/user1.jpg',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'jcarlos@gmail.com' },
    update: {},
    create: {
      email: 'jcarlos@gmail.com',
      name: 'José Carlos',
      profileImage: 'https://example.com/user2.jpg',
    },
  });

  const prayer1 = await prisma.prayerRequest.create({
    data: {
      userId: user1.id,
      text: 'Peço oração pela minha família.',
    },
  });

  const prayer2 = await prisma.prayerRequest.create({
    data: {
      userId: user2.id,
      text: 'Preciso de força para minha caminhada espiritual.',
    },
  });

  const testimony1 = await prisma.testimony.create({
    data: {
      userId: user1.id,
      text: 'Fui curado de uma enfermidade após muitas orações!',
    },
  });

  const testimony2 = await prisma.testimony.create({
    data: {
      userId: user2.id,
      text: 'Deus abriu portas para um novo emprego!',
    },
  });

  await prisma.comment.createMany({
    data: [
      {
        userId: user1.id,
        prayerRequestId: prayer1.id,
        text: 'Estou orando por você!',
      },
      {
        userId: user2.id,
        prayerRequestId: prayer2.id,
        text: 'Confie, Deus está no controle!',
      },
      {
        userId: user1.id,
        testimonyId: testimony1.id,
        text: 'Glória a Deus por isso!',
      },
      { userId: user2.id, testimonyId: testimony2.id, text: 'Deus é fiel!' },
    ],
  });

  console.log('✅ Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
