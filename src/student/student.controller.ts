import { Controller, Get } from '@nestjs/common';

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
}
