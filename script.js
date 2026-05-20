let marks = Number(prompt("Enter a marks: "));
let grade;

switch (true) {
  case (marks >= 90):
    grade = 'A';
    break;
  case (marks >= 80):
    grade = 'B';
    break;
  case (marks >= 70):
    grade = 'C';
    break;
  case (marks >= 40):
    grade = 'Pass';
    break;
  default:
    grade = 'Fail';
}

console.log(`Grade: ${grade}`);
