//dependencies required
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

//creating mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'AddPAsswordHere',
    database: 'employeesDB'
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    firstPrompt();
  });

  //ask question about action avaliable
  function firstPrompt(){
    inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        "End"]
    })
    .then(function ({ task }) {
      switch (task) {
        case "View Employees":
          viewEmployees();
          break;

        case "View Employees by Department":
            employeesByDepartemnt();
          break;
      
        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employees":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Add Role":
          addRole();
          break;

        case "End":
          connection.end();
          break;
      }
    });
  };

  // SELECT * FROM (all employees)
  function viewEmployees(){
    console.log("Viewing employees\n");

    var query =
      `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
      ON m.id = e.manager_id`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      console.table(res);
      console.log("Employees viewed!\n");
  
      firstPrompt();
    }); 

  };

  // SELECT * FROM join by id (employees by departent)
  function employeesByDepartemnt() {
    console.log("Viewing employees by department\n");

    var query =
      `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      const departmentChoices = res.map(data => ({
        value: data.id, name: data.name
      }));
  
      console.table(res);
      console.log("Department view succeed!\n");
  
      promptDepartment(departmentChoices);
    }); 

  };

  // Ability to choose al employees from departent list 
  function promptDepartment(){

  };


  // Delete eemployee DETELET FROM
  function removeEmployee() {

  };

  // Update employee role UPDATE 
  function updateEmployeeRole() {

  };

  // add role INSERT INTO
  function addRole() {

  };











