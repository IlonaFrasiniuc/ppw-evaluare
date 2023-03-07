let students = [
    { name: "John", marks: [8, 10, 7, 5, 4] },
    { name: "Maria", marks: [6, 9, 8, 7, 6] },
    { name: "Alex", marks: [7, 6, 9, 8, 7] },
    { name: "Anna", marks: [5, 4, 6, 7, 8] },
    { name: "David", marks: [9, 8, 7, 10, 9] }
    ];

function printAverage(students) {
    students.forEach(function(student) {
        let sum = student.marks.reduce(function(a, b) {
            return a + b;
        });
        let average = sum / student.marks.length;
        console.log(student.name + " - media: " + average);
    });
}

function printFailingStudents(students) {
    let failingStudents = students.filter(function(student) {
        let sum = student.marks.reduce(function(a, b) {
            return a + b;
        });
        let average = sum / student.marks.length;
        return average < 5;
    });
    console.log("Elevii cu nota medie sub 5:");
    failingStudents.forEach(function(student) {
        console.log(student.name);
    });
}

function printHighAchievers(students) {
    let sum = 0;
    students.forEach(function(student) {
        sum += student.marks.reduce(function(a, b) {
            return a + b;
        });
    });
    let classAverage = sum / (students.length * 4);
    let highAchievers = students.filter(function(student) {
        let sum = student.marks.reduce(function(a, b) {
            return a + b;
        });
        let average = sum / student.marks.length;
        return average > classAverage;
    });
    console.log("Elevii cu nota medie mai mare decat media clasei (" + classAverage + "):");
    highAchievers.forEach(function(student) {
        console.log(student.name + " - media: " + (sum / student.marks.length));
    });
}
