import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('oauth')
  async oauthLogin(
    @Body()
    body: {
      email: string;
      name: string;
      profileImage: string;
    },
  ) {
    return this.authService.validateOAuthLogin(
      body.email,
      body.name,
      body.profileImage,
    );
  }
}
