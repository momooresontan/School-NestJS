/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudent();
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string): FindStudentResponseDto {
    //console.log(id);
    return this.studentService.getStudentById(id);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    //console.log(body);
    return this.studentService.createStudent();
  }

  @Put('/:id')
  updateStudent(
    @Param('id') id: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update student with id: ${id} with ${JSON.stringify(body)}`;
  }

  @Delete('/:id')
  deleteStudent() {
    return 'Delete student';
  }
}
