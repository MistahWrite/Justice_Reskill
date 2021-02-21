var student = {
  name : "Rebecca",
  program : "Front End",
  module : 1,
  alum : false,
  projects: ["Dog Party", "Number Guesser", "Check Yo Self", "Another One"]
}

function SentenceOutput() {
  var projects = '';
  for (var i = 0; i < student.projects.length; i++) {
    if (i > 0) projects += ", ";
    if (i == student.projects.length-1) projects += "and ";
    projects += student.projects[i];
  }
  projects += ".";

  console.log(student.name + " is an awesome " + student.program + " student.  They have built the following projects: " + projects);
}
SentenceOutput();