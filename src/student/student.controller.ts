import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';

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
  createStudent(@Body() body) {
    //console.log(body);
    return `Create student with the following data ${JSON.stringify(body)}`;
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
