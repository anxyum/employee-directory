const $employeesWrapper = document.querySelector(".employees-wrapper");

let employeeId = 0;

class Employee {
  constructor(firstName, lastName, email, city, profilePicture, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.city = city;
    this.profilePicture = profilePicture;
    this.position = position;
    this.id = employeeId++;
  }
}

const employees = [
  new Employee(
    "Billie",
    "Krenzer",
    "billie.krenzer@gmail.com",
    "Tulsa",
    "https://i.imgur.com/xjK9z2D.jpg",
    "Employee"
  ),
  new Employee(
    "John",
    "Smith",
    "john.smith@gmail.com",
    "New York",
    "https://i.imgur.com/random1.jpg",
    "Employee"
  ),
  new Employee(
    "Sarah",
    "Johnson",
    "sarah.johnson@gmail.com",
    "Los Angeles",
    "https://i.imgur.com/random2.jpg",
    "Employee"
  ),
  new Employee(
    "Michael",
    "Brown",
    "michael.brown@gmail.com",
    "Chicago",
    "https://i.imgur.com/random3.jpg",
    "Employee"
  ),
];

console.log(employees);

employees.forEach((employee) => {
  const employeeCard = document.createElement("div");
  const employeeProfilePicture = document.createElement("img");
  const employeeInformationWrapper = document.createElement("div");
  const employeeName = document.createElement("h2");
  const employeeEmail = document.createElement("p");
  const employeeCity = document.createElement("p");
  const employeePosition = document.createElement("p");

  employeeCard.classList.add("employee-card");
  employeeProfilePicture.classList.add("employee-profile-picture");
  employeeInformationWrapper.classList.add("employee-information-wrapper");
  employeeName.classList.add("employee-name");
  employeeEmail.classList.add("employee-email");
  employeeCity.classList.add("employee-city");
  employeePosition.classList.add("employee-position");

  employeeProfilePicture.src = "./user.jpg";
  employeeName.textContent = `${employee.firstName} ${employee.lastName}`;
  employeeEmail.textContent = employee.email;
  employeeCity.textContent = employee.city;
  employeePosition.textContent = employee.position;

  employeeInformationWrapper.appendChild(employeeName);
  employeeInformationWrapper.appendChild(employeeEmail);
  employeeInformationWrapper.appendChild(employeeCity);
  employeeInformationWrapper.appendChild(employeePosition);

  employeeCard.appendChild(employeeProfilePicture);
  employeeCard.appendChild(employeeInformationWrapper);

  $employeesWrapper.appendChild(employeeCard);
});
