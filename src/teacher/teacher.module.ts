import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { StudentTeacherController } from './student.controller';

@Module({
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
