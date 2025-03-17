import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrayerRequestsService {
  constructor(private prisma: PrismaService) {}

  async createPrayerRequest(data: { userId: string; text: string }) {
    return await this.prisma.prayerRequest.create({ data });
  }

  async getAllPrayerRequests() {
    return await this.prisma.prayerRequest.findMany();
  }

  async getPrayerRequestById(id: string) {
    const request = await this.prisma.prayerRequest.findUnique({
      where: { id },
    });
    if (!request)
      throw new NotFoundException('Pedido de oração não encontrado.');
    return request;
  }

  async updatePrayerRequest(id: string, text: string) {
    return await this.prisma.prayerRequest.update({
      where: { id },
      data: { text },
    });
  }

  async deletePrayerRequest(id: string) {
    return await this.prisma.prayerRequest.delete({ where: { id } });
  }
}
