class Person {
    constructor(firstName,lastName,Age,gender,degree,place) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.age = Age;
        this.gender = gender;
        this.degree = degree;
        this.place = place;
    }
    getfullName() {
return `${this.firstName} ${this.lastname}`;
    }
    info()
    {
         console.log(`Candidate Name: ${this.getfullName()}`);
         console.log(`Age: ${this.age}`);
         console.log(`Gender: ${this.gender}`);
        console.log(`Job place: ${this.place}`);
        console.log(`Degree: ${this.degree}`);
    }
}
const person1 = new Person("Meena", "Jayaraj", 28, "Female", "BE", "Chennai");
person1.info();
