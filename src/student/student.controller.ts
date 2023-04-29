import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:id')
  getStudentById() {
    return 'Get student by id';
  }

  @Post()
  createStudent() {
    return 'Create student';
  }

  @Put('/:id')
  updateStudent() {
    return 'Update student by id';
  }

  @Delete('/:id')
  deleteStudent() {
    return 'Delete student';
  }
}
