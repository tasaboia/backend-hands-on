import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUserByEmail(email: string) {
    if (!email) {
      throw new BadRequestException('Email é obrigatório.');
    }

    try {
      const user = await this.prisma.user.findUnique({ where: { email } });

      if (!user) {
        throw new BadRequestException('Usuário não encontrado.');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar usuário: ${error.message}`,
      );
    }
  }
}
