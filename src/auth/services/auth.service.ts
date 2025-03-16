import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateOAuthLogin(email: string, name: string, profileImage: string) {
    try {
      let user = await this.prisma.user.findUnique({ where: { email } });

      if (!user) {
        if (!email) {
          throw new BadRequestException('Informações de usuário inválidas.');
        }

        user = await this.prisma.user.create({
          data: { email, name, profileImage },
        });

        if (!user) {
          throw new InternalServerErrorException('Erro ao criar usuário.');
        }
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro na autenticação: ${error.message}`,
      );
    }
  }
}
