import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:id/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get all students that belong to a teacher';
  }

  @Put('/:id')
  updateStudentTeacher() {
    return 'Update student teacher';
  }
}
