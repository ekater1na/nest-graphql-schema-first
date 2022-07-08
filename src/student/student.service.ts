import { Injectable } from '@nestjs/common';
import { Student } from 'src/graphql';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Injectable()
export class StudentService {
  students: Student[] = [
    {
      _id: 'abc1',
      FirstName: 'Alisa',
      LastName: 'Ar',
      Standard: 7,
      FatherName: 'Anna Ar',
      MotherName: 'Ally',
    },
    {
      _id: 'abc2',
      FirstName: 'Bob',
      LastName: 'Boom',
      Standard: 7,
      FatherName: 'Barny',
      MotherName: 'Beep',
    },
    {
      _id: 'abc3',
      FirstName: 'Camilla',
      LastName: 'Camp',
      Standard: 7,
      FatherName: 'Celly',
      MotherName: 'Caap',
    },
  ];

  create(CreateStudentInput: CreateStudentInput): Student {
    this.students.push(CreateStudentInput);
    return CreateStudentInput;
  }

  findAll() {
    return this.students;
  }

  findOne(id: string) {
    const filteredStudent = this.students.filter((_) => _._id === id)[0];
    return filteredStudent;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
