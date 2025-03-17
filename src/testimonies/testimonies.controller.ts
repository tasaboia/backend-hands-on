import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('testimonies')
@UseGuards(JwtAuthGuard)
export class TestimoniesController {
  constructor(private testimoniesService: TestimoniesService) {}

  @Post()
  createTestimony(@Body() data: { userId: string; text: string }) {
    return this.testimoniesService.createTestimony(data);
  }

  @Get()
  getAllTestimonies() {
    return this.testimoniesService.getAllTestimonies();
  }

  @Get(':id')
  getTestimonyById(@Param('id') id: string) {
    return this.testimoniesService.getTestimonyById(id);
  }

  @Patch(':id')
  updateTestimony(@Param('id') id: string, @Body() data: { text: string }) {
    return this.testimoniesService.updateTestimony(id, data.text);
  }

  @Delete(':id')
  deleteTestimony(@Param('id') id: string) {
    return this.testimoniesService.deleteTestimony(id);
  }
}
