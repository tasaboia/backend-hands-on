import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  createComment(
    @Body()
    data: {
      userId: string;
      parentId: string;
      text: string;
      type: 'prayer' | 'testimony';
    },
  ) {
    return this.commentsService.createComment(data);
  }

  @Get(':parentId')
  getCommentsByParent(
    @Param('parentId') parentId: string,
    @Query('type') type: 'prayer' | 'testimony',
  ) {
    return this.commentsService.getCommentsByParent(parentId, type);
  }

  @Patch(':id')
  updateComment(@Param('id') id: string, @Body() data: { text: string }) {
    return this.commentsService.updateComment(id, data.text);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }
}
