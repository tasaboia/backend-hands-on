import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { PrayerRequestsModule } from './prayer-requests/prayer-requests.module';
import { CommonModule } from './common/common.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    TestimoniesModule,
    PrayerRequestsModule,
    CommonModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
