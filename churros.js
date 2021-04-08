function assignGrade(numberScore) {
  switch (true) {
    case numberScore >= 90:
      return "A";
    case numberScore >= 80:
      return "B";
    case numberScore >= 70:
      return "C";
    case numberScore >= 60:
      return "D";
    default:
      return "F";
  }
}
console.log(assignGrade(76))