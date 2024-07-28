/* Your Code Here */

// Standalone function to create a time-in event
function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
}

// Standalone function to create a time-out event
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
}

// Standalone function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date);
    let timeOut = this.timeOutEvents.find(event => event.date === date);

    return (timeOut.hour - timeIn.hour) / 100;
}

// Standalone function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    let hours = this.hoursWorkedOnDate(date);
    return hours * this.payPerHour;
}

// Standalone function to calculate total wages for an employee
function allWagesFor() {
    let dates = this.timeInEvents.map(event => event.date);
    let totalWages = dates.reduce((total, date) => total + this.wagesEarnedOnDate(date), 0);
    return totalWages;
}

// Function to create an employee record with methods
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
        createTimeInEvent,
        createTimeOutEvent,
        hoursWorkedOnDate,
        wagesEarnedOnDate,
        allWagesFor
    };
}

// Function to create multiple employee records
function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

// Function to find an employee by their first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
}

// Function to calculate the total payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => total + employee.allWagesFor(), 0);
}
