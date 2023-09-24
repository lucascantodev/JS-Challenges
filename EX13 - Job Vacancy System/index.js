const jobs = [];
const candidates = [];
let currentVacancyIndex;

function menu() {
      const option = parseInt(prompt("Welcome! Choose an option:\n " +
        "1. List available job vacancies\n " +
        "2. Create a new job vacancy\n " +
        "3. View a job vacancy\n " +
        "4. Register a candidate for a vacancy\n " +
        "5. Delete vacancy\n " +
        "6. Exit"));
    return option;
}

function validateDeadline() {
    while (true) {
        const date = prompt("Deadline for the vacancy:\n   (PS.: using this format dd/mm/yyyy)");
        dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
        if (dateFormat.test(date)) {
            return date;
        } else {
            alert("Date format is invalid. Please try using the following format: dd/mm/yyyy")
        }
    }
}

function createVacancy() {
  const vacancyTitle = prompt("Type the vacancy title: ");
  const vacancyDesc = prompt("Write a description for your job vacancy: ");
  const deadline = validateDeadline();

  let saveVacancy = prompt("Save vacancy? Y|N").toUpperCase();

  if (saveVacancy === "Y") {
    const vacancyInfo = {
      vacancyTitle,
      vacancyDesc,
      deadline,
      candidates: [],
    };
    
    jobs.push(vacancyInfo);
    
    currentVacancyIndex = jobs.indexOf(vacancyInfo);
    
    alert("Job vacancy saved!");
    alert(`Job vacancy created:\n
    Index: ${currentVacancyIndex}
    Title: ${vacancyTitle}
    Description: ${vacancyDesc}
    Deadline: ${deadline}`);
  } else {
    alert("Job vacancy not saved.");
  }
}

function removeVacancy() {
  alert("Choose a vacancy to remove based on its index");
  showJobVacancies();
  const vacancyRemove = parseInt(prompt(`Type a vacancy index: `));
  if (!isNaN(vacancyRemove) && vacancyRemove >= 0 && vacancyRemove < jobs.length) {
    const vacancyInfo = jobs[vacancyRemove];
    jobs.splice(vacancyRemove, 1);
    alert(`Vacancy removed:\n
    Index: ${vacancyRemove}
    Title: ${vacancyInfo.vacancyTitle}
    Description: ${vacancyInfo.vacancyDesc}
    Deadline: ${vacancyInfo.deadline}
    Total of Candidates: ${vacancyInfo.candidates.length}
    Candidates: ${vacancyInfo.candidates.map(candidate => candidate.candidateName).join(', ')}\n`);
  } else {
    alert("Invalid vacancy index. Please try again.");
  }
}


function viewJobVacancy() {
  if (jobs.length === 0) {
    alert("No job vacancies available.");
  } else {
    const searchIndex = parseInt(prompt("Enter the index of the job vacancy: "));
    
    if (!isNaN(searchIndex) && searchIndex >= 0 && searchIndex < jobs.length) {
      const vacancyInfo = jobs[searchIndex];
      alert(`Job Vacancies Available:\n
      Index: ${searchIndex}
      Title: ${vacancyInfo.vacancyTitle}
      Description: ${vacancyInfo.vacancyDesc}
      Deadline: ${vacancyInfo.deadline}
      Total of Candidates: ${vacancyInfo.candidates.length}
      Candidates: ${vacancyInfo.candidates.map(candidate => candidate.candidateName).join(', ')}\n`);
    } else {
      alert("Invalid index. Please try again.");
    }
  }
}

function showJobVacancies() {
  if (jobs.length > 0) {
    jobs.forEach(function(singleJob, index) {
      alert(`Job Vacancies Available:\n
      Index: ${index}
      Title: ${singleJob.vacancyTitle}
      Description: ${singleJob.vacancyDesc}
      Deadline: ${singleJob.deadline}
      Total of Candidates: ${singleJob.candidates.length}
      Candidates: ${singleJob.candidates.map(candidate => candidate.candidateName).join(', ')}\n`);
    });
  } else {
    alert("No jobs vacancy");
  }
}

function registerCandidate() {
  const candidateName = prompt("Candidate's name: ");
  let vacancyIndex = parseInt(prompt("Select a vacancy based on the vacancy's index:\n"));

  if (!isNaN(vacancyIndex) && vacancyIndex >= 0 && vacancyIndex < jobs.length) {
    const selectedVacancy = jobs[vacancyIndex];

    selectedVacancy.candidates.push({ candidateName });

    alert(`Candidate ${candidateName} registered for job vacancy ${selectedVacancy.vacancyTitle}`);
  } else {
    alert("Invalid job vacancy index. Please try again.");
  }
}

let option; 

do {
  option = menu();
  switch(option) {
    case 1:
      showJobVacancies();
      break;
    case 2:
      createVacancy();
      break;
    case 3:
      viewJobVacancy();
      break;
    case 4:
      registerCandidate();
      break;
    case 5:
      removeVacancy();
      break;
    case 6:
      alert("Finishing...");
      break;
    default:
      alert("Invalid option!");
  }
} while (option !== 6)