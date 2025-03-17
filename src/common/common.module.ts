import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.NEXTAUTH_SECRET || 'default-secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [JwtAuthGuard],
  exports: [JwtModule, JwtAuthGuard],
})
export class CommonModule {}
