import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student, CreateStudentInput } from 'src/graphql';

@Resolver('Student')
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation('createStudent')
  create(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Student {
    return this.studentService.create(createStudentInput);
  }

  @Query('getAllStudents')
  findAll(): Student[] {
    return this.studentService.findAll();
  }

  @Query('getStudentById')
  findOne(@Args('id') id: string): Student {
    return this.studentService.findOne(id);
  }

  @Mutation('updateStudent')
  update(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.studentService.update(
      updateStudentInput.id,
      updateStudentInput,
    );
  }

  @Mutation('removeStudent')
  remove(@Args('id') id: number) {
    return this.studentService.remove(id);
  }
}
