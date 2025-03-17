import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async createComment(data: {
    userId: string;
    parentId: string;
    text: string;
    type: 'prayer' | 'testimony';
  }) {
    if (!data.userId || !data.parentId || !data.text || !data.type) {
      throw new NotFoundException('Campos obrigatórios ausentes.');
    }

    if (data.type === 'prayer') {
      return await this.prisma.comment.create({
        data: {
          userId: data.userId,
          text: data.text,
          prayerRequestId: data.parentId,
        },
      });
    } else if (data.type === 'testimony') {
      return await this.prisma.comment.create({
        data: {
          userId: data.userId,
          text: data.text,
          testimonyId: data.parentId,
        },
      });
    } else {
      throw new NotFoundException('Tipo de comentário inválido.');
    }
  }

  async getCommentsByParent(parentId: string, type: 'prayer' | 'testimony') {
    if (type === 'prayer') {
      return await this.prisma.comment.findMany({
        where: { prayerRequestId: parentId },
        orderBy: { createdAt: 'desc' },
      });
    } else if (type === 'testimony') {
      return await this.prisma.comment.findMany({
        where: { testimonyId: parentId },
        orderBy: { createdAt: 'desc' },
      });
    } else {
      throw new NotFoundException('Tipo inválido.');
    }
  }

  async updateComment(id: string, text: string) {
    return await this.prisma.comment.update({
      where: { id },
      data: { text },
    });
  }

  async deleteComment(id: string) {
    return await this.prisma.comment.delete({ where: { id } });
  }
}
