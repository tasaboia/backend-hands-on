import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('oauth')
  async getUser(@Req() req) {
    const user = await this.authService.getUserByEmail(req.user.email);
    return user;
  }
}
