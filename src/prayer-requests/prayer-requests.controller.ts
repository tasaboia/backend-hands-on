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
import { PrayerRequestsService } from './prayer-requests.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('prayer-requests')
@UseGuards(JwtAuthGuard)
export class PrayerRequestsController {
  constructor(private prayerRequestsService: PrayerRequestsService) {}

  @Post()
  createPrayerRequest(@Body() data: { userId: string; text: string }) {
    return this.prayerRequestsService.createPrayerRequest(data);
  }

  @Get()
  getAllPrayerRequests() {
    return this.prayerRequestsService.getAllPrayerRequests();
  }

  @Get(':id')
  getPrayerRequestById(@Param('id') id: string) {
    return this.prayerRequestsService.getPrayerRequestById(id);
  }

  @Patch(':id')
  updatePrayerRequest(@Param('id') id: string, @Body() data: { text: string }) {
    return this.prayerRequestsService.updatePrayerRequest(id, data.text);
  }

  @Delete(':id')
  deletePrayerRequest(@Param('id') id: string) {
    return this.prayerRequestsService.deletePrayerRequest(id);
  }
}
