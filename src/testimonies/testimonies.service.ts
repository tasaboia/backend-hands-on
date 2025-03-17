import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TestimoniesService {
  constructor(private prisma: PrismaService) {}

  async createTestimony(data: { userId: string; text: string }) {
    return await this.prisma.testimony.create({ data });
  }

  async getAllTestimonies() {
    return await this.prisma.testimony.findMany();
  }

  async getTestimonyById(id: string) {
    const testimony = await this.prisma.testimony.findUnique({ where: { id } });
    if (!testimony) throw new NotFoundException('Testemunho não encontrado.');
    return testimony;
  }

  async updateTestimony(id: string, text: string) {
    return await this.prisma.testimony.update({
      where: { id },
      data: { text },
    });
  }

  async deleteTestimony(id: string) {
    return await this.prisma.testimony.delete({ where: { id } });
  }
}
