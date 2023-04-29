import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:id')
  getTeacherById() {
    return 'Get teacher by id';
  }

  @Post()
  createTeacher() {
    return 'Create teacher';
  }

  @Put('/:id')
  updateTeacher() {
    return 'Update teacher by id';
  }

  @Delete('/:id')
  deleteTeacher() {
    return 'Delete teacher';
  }
}
