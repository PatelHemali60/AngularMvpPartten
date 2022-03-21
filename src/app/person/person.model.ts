

export class Person{
    id: number;
    name : string;
    age  : number;
    gender : string;

    constructor(
        id: number,
        name : string,
        age  : number,
        gender : string,
    
    ){
          this.id = id;
          this.age = age;
          this.name = name;
          this.gender = gender
    }
}