import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Query,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(
    @Query('name') name?: string,
    @Query('email') email?: string,
  ) {
    return this.usersService.findAll({ name, email });
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    data: Partial<{ name: string; email: string; profileImage: string }>,
  ) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
