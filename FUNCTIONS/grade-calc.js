// students score, total possible score
// 15/20 -> You got a C (75%)!

let grade = function (scoreReceived, totalPossible){
    let gradeReceived = scoreReceived / totalPossible*100;
    let gradeLetter;

    if (gradeReceived >= 90 && gradeReceived <= 100){
        gradeLetter = 'A';
    } else if (gradeReceived >= 80){
        gradeLetter = 'B';
    } else if (gradeReceived >= 70){
        gradeLetter = 'C';
    } else if (gradeReceived >= 60){
        gradeLetter = 'D';
    } else {
        gradeLetter = 'F';
    }

    return `You got a ${gradeLetter} (${gradeReceived})!`
}

let student1 = grade(15, 20);
let student2 = grade(14, 20);
let student3 = grade(20, 20);

console.log(student1);
console.log(student2);
console.log(student3);
