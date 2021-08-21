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

  };

  // SELECT * FROM (all employees)
  function viewEmployees(){

  };

  // SELECT * FROM join by id (employees by departent)
  function employeesByDepartemnt() {

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
  function addRoole() {

  };

  









