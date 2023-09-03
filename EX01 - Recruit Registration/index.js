class Recruit {
    constructor(firstName, lastName, fieldOfStudy, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fieldOfStudy = fieldOfStudy;
        this.dateOfBirth = dateOfBirth;
    }
}

function getRecruitInfo() {
    let firstName = prompt("First Name:");
    let lastName = prompt("Last Name:");
    let fieldOfStudy = prompt("Field of Study:");
    let birthDay = prompt("Birth Day:");
    let birthMonth = prompt("Birth Month:");
    let birthYear = prompt("Birth Year:");

    let dateOfBirth = new Date(birthYear, birthMonth - 1, birthDay);

    return new Recruit(firstName, lastName, fieldOfStudy, dateOfBirth);
}

function calculateAge(dateOfBirth) {
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

    if (
        dateOfBirth.getMonth() > currentDate.getMonth() ||
        (dateOfBirth.getMonth() === currentDate.getMonth() &&
            dateOfBirth.getDate() > currentDate.getDate())
    ) {
        age--;
    }

    return age;
}

let recruit = getRecruitInfo();
let age = calculateAge(recruit.dateOfBirth);

alert("Full Name: " + recruit.firstName + " " + recruit.lastName);
alert("Field of Study: " + recruit.fieldOfStudy);
alert("Age: " + age + " years");
