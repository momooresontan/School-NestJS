/* eslint-disable prettier/prettier */
import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('teachers/:id/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('id') id: string) {
    return `Get all students that belong to teacher with id: ${id}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('id') id: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `Update student with id: ${studentId} with data ${JSON.stringify(
      body,
    )} that belongs to teacher with id: ${id}`;
  }
}
