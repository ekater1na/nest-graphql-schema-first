
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateStudentInput {
    _id?: Nullable<string>;
    FirstName?: Nullable<string>;
    LastName?: Nullable<string>;
    Standard?: Nullable<number>;
    FatherName?: Nullable<string>;
    MotherName?: Nullable<string>;
}

export interface UpdateStudentInput {
    id: number;
}

export interface Student {
    _id?: Nullable<string>;
    FirstName?: Nullable<string>;
    LastName?: Nullable<string>;
    Standard?: Nullable<number>;
    FatherName?: Nullable<string>;
    MotherName?: Nullable<string>;
}

export interface IQuery {
    getAllStudents(): Nullable<Student>[] | Promise<Nullable<Student>[]>;
    getStudentById(id?: Nullable<string>): Nullable<Student> | Promise<Nullable<Student>>;
}

export interface IMutation {
    createStudent(createStudentInput: CreateStudentInput): Student | Promise<Student>;
    updateStudent(updateStudentInput: UpdateStudentInput): Student | Promise<Student>;
    removeStudent(id: number): Nullable<Student> | Promise<Nullable<Student>>;
}

type Nullable<T> = T | null;
