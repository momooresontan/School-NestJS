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

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All Students';
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string): FindStudentResponseDto {
    //console.log(id);
    return `Get student with id of ${id}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    //console.log(body);
    return `Create student with the following data ${JSON.stringify(body)}`;
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
