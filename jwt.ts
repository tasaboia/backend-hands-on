import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

dotenv.config();

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET is not defined');
}

const token = jwt.sign(
  { email: 'msilva@gmail.com', name: 'Maria Silva' },
  process.env.NEXTAUTH_SECRET,
  { expiresIn: '1h' },
);

console.log('Token JWT gerado:', token);
