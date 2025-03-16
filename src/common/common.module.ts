import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt.guard';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './guards/strategies/jwt.strategy';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtStrategy, JwtAuthGuard],
})
export class CommonModule {}
