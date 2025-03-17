import { Module } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { TestimoniesController } from './testimonies.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [TestimoniesController],
  providers: [TestimoniesService],
  exports: [TestimoniesService],
})
export class TestimoniesModule {}
