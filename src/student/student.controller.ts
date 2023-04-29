import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string) {
    //console.log(id);
    return `Get student with id of ${id}`;
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
