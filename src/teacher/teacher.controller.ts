import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:id')
  getTeacherById(@Param('id') id: string) {
    return `Get teacher with id: ${id}`;
  }

  @Post()
  createTeacher(@Body() body) {
    return `Create teacher with data ${JSON.stringify(body)}`;
  }

  @Put('/:id')
  updateTeacher(@Param('id') id: string, @Body() body) {
    return `Update teacher with id: ${id} with data ${JSON.stringify(body)}`;
  }

  @Delete('/:id')
  deleteTeacher() {
    return 'Delete teacher';
  }
}
