import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters: { name?: string; email?: string }) {
    return this.prisma.user.findMany({
      where: {
        name: filters.name
          ? { contains: filters.name, mode: 'insensitive' }
          : undefined,
        email: filters.email
          ? { contains: filters.email, mode: 'insensitive' }
          : undefined,
      },
    });
  }

  async findUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async update(
    id: string,
    data: Partial<{ name: string; email: string; profileImage: string }>,
  ) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    return user;
  }

  async delete(id: string) {
    await this.findUserById(id);
    return this.prisma.user.delete({ where: { id } });
  }
}
