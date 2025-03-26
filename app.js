const $employeesWrapper = document.querySelector(".employees-wrapper");

// const employee = {
//     id: 1,
//     firstName: "Billy",
//     lastName: "Krenzer",
//     email: "billyK@contact.fr",
//     role: "Dev",
//     picture: "./user.jpg"
// }

const employees = [
  {
    id: 1,
    firstName: "Billo",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
  {
    id: 1,
    firstName: "Billy",
    lastName: "Krenzer",
    email: "billyK@contact.fr",
    role: "Dev",
    picture: "./user.jpg",
  },
];

fetch("https://randomuser.me/api/?results=10")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

employees.forEach(function (employee) {
  const $employeeCard = document.createElement("div");
  $employeeCard.classList.add("employee-card");

  const $employeePicture = document.createElement("img");
  $employeePicture.src = employee.picture;

  const $employeeInfos = document.createElement("ul");
  $employeeInfos.classList.add("employee-infos");

  const $employeeFullname = document.createElement("li");
  $employeeFullname.classList.add("employee-fullname");
  $employeeFullname.textContent = employee.firstName + " " + employee.lastName;

  $employeeInfos.appendChild($employeeFullname);
  $employeeCard.appendChild($employeePicture);
  $employeeCard.appendChild($employeeInfos);
  $employeesWrapper.appendChild($employeeCard);
});
