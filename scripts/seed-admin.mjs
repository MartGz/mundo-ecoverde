import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const email = process.argv[2] || process.env.ADMIN_EMAIL;
const password = process.argv[3] || process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error('Uso: node scripts/seed-admin.mjs <email> <password>');
  console.error('(o define ADMIN_EMAIL / ADMIN_PASSWORD en .env)');
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword, role: 'ADMIN' },
    create: { email, password: hashedPassword, role: 'ADMIN', name: 'Administrador' },
    select: { id: true, email: true, role: true },
  });

  console.log(`Usuario ADMIN listo: ${user.email} (id: ${user.id})`);
}

main()
  .catch((err) => {
    console.error('Error creando el usuario admin:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
