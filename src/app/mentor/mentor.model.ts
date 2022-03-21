/** Mentor Model */
export class mentors {
    public id: number;
    public name: string;
    public age: string;
    public gender: string;
    constructor(
      id: number,
      name: string,
      age: string,
      gender: string
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  /** mentor Form Model */
  export class mentorForm {
    public name: string;
    public age: string;
    public gender: string;
    constructor(
      name: string,
      age: string,
      gender: string
    ) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  /** User Edit Details Model */
export class MentorEditDetails {
    public mentorForm: mentorForm;
    public id: number;
    constructor(
      mentorForm: mentorForm,
      id: number
    ) {
      this.mentorForm = mentorForm;
      this.id = id;
    }
  }
  