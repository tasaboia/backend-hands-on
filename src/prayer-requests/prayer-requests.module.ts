import { Module } from '@nestjs/common';
import { PrayerRequestsService } from './prayer-requests.service';
import { PrayerRequestsController } from './prayer-requests.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [PrismaModule, CommonModule],
  controllers: [PrayerRequestsController],
  providers: [PrayerRequestsService],
  exports: [PrayerRequestsService],
})
export class PrayerRequestsModule {}
