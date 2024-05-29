interface PersonInfo {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string;
  contacts: string;
}

class School implements PersonInfo {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: number[] = [];
  private _lecturers: string[] = []; // Name, surname, position, company, experience, courses, contacts
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string;
  contacts: string;

  constructor(
    name: string,
    surname: string,
    position: string,
    company: string,
    experience: number,
    courses: string,
    contacts: string
  ) {}

  get areas(): number[] {
    return this._areas;
  }

  get lecturers(): string[] {
    return this._lecturers;
  }

  addArea(area: number): void {
    this._areas.push(area);
  }

  removeArea(): void {
    this._areas.pop();
  }

  addLecturer(lecturer: string): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(): void {
    this._lecturers.pop();
  }
}

// ------

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: number[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get level(): number[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: number): number {
    return this._levels.push(level);
  }
  removeLevel(): number | undefined {
    return this._levels.pop();
  }
}

// ------

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups: string[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get group(): string[] {
    return this._groups;
  }

  set group(value: string[]) {
    this._groups = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  addGroup(group: string): void {
    this._groups.push(group);
  }

  removeGroup(group: string): void {
    this._groups = this._groups.filter((group): boolean => group !== group);
  }
}

// ------

interface Student {
  getPerformanceRating(): number;
}

class StudentForGroup {
  private performanceRating: number;
  constructor(performanceRating: number) {
    this.performanceRating = performanceRating;
  }

  getPerformanceRating(): number {
    return this.performanceRating;
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  private _area: number;
  private _status: string;
  private _students: StudentForGroup[] = []; // Modify the array so that it has a valid toSorted method*
  directionName: string;
  levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  get area(): number {
    return this._area;
  }
  get status(): string {
    return this._status;
  }

  get students(): StudentForGroup[] {
    return this._students;
  }

  addStudent(student: StudentForGroup): void {
    this._students.push(student);
  }

  removeStudent(student: string): void {
    this._students = this._students.filter((student) => student !== student);
  }

  showPerformance(): StudentForGroup[] {
    const sortedStudents: StudentForGroup[] = this._students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

// ------

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: number[] = []; // workName: mark
  private _visits: (boolean | string)[] = []; // lesson: present

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  set grades(value: number[]) {
    this._grades = value;
  }

  set visits(value: boolean[]) {
    this._visits = value;
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade): number => sum + grade, 0) /
      gradeValues.length;
    const attendancePercentage =
      (this._visits.filter((present): boolean | string => present).length /
        this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

// added branch
