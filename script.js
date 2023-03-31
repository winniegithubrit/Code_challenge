let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
let marks = prompt("Please enter the student's marks (between 0 and 100):");
// Convert marks to a number
marks = Number(marks);

// Check if marks are within the valid range
if (marks < 0 || marks > 100) {
  console.log(finalOutput("Invalid marks entered. Please enter a value between 0 and 100."));
} else {
  // assigning grades according to the marks gotten
  let grade;
  if (marks > 79) {
    finalOutput=('Grade is A');
  } else if (marks >= 60 && marks <= 79) {
    finalOutput =('Grade is B');
  } else if (marks >= 50 && marks <= 59) {
    finalOutput=('Grade is C');
  } else if (marks >= 40 && marks <= 49) {
     finalOutput=('Grade is D');
  } else {
    finalOutput=('Grade is E');
  }
    grade = finalOutput
  // the FinalOutput  
  console.log(`The student's grade is ${finalOutput}.`);
  
}


//finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput);

})
let speedBtn = document.getElementById('speed');
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
// prompting the user to enetr a value
 let speed = parseInt(prompt("Enter the speed of the car: "));
  //let demeritPoints = 0;

if (speed <= 70) {
 console.log(finalOutput=("Ok"));
 } else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  console.log(finalOutput=(`Points ${demeritPoints}`))
 if (demeritPoints > 12) {
  console.log(finalOutput=("License suspended"));
 } else {
     console.log(`Demerit points: ${demeritPoints}`);
  }
 }

    

//finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)

// write Code For the Code challenge
//declaring the various kra rates as variables
const taxExempt = 28800;
const kraRate1 = 0.1;
const kraRate2 = 0.15;
const kraRate3 = 0.20;
const kraRate4 = 0.25;
//declaring the nhif rates also as variables
const nhifRates = [150,300,400,500,600,750,850,900,950];
const nhifExempt = 6000;
//declaring the basic salary as variables and prompting the user to enter the basic salary and the benefits
let basicSalary = parseFloat(prompt("Enter your basic salary: "));
let benefits = parseFloat(prompt("Enter your benefits"));
let grossSalary = basicSalary + benefits;
let payee = 5000;
if (grossSalary > taxExempt){
    if (grossSalary <= 36000){
        payee = (grossSalary - taxExempt) * kraRate1;
    }else if(grossSalary <= 72000){
        payee = 720 * kraRate1 + (grossSalary - 36000 - 720) * kraRate2;
    }else if(grossSalary <=108000){
        payee = 720 * kraRate1 + 2160 *kraRate2 + (grossSalary - 72000 - 2160) * kraRate3;
    }else {
        payee = 720 * kraRate1 + 2160 * kraRate2 + 3600 * kraRate3 + (grossSalary - 108000 -3600) * kraRate4;
    }
}
//declaring the nhif deductions 
let nhifDeductions = 1000;
if(grossSalary > nhifExempt){
    for(let i=1; i<nhifRates.length; i++){
        if (grossSalary <=(i+1)*nhifExempt){
            nhifDeductions = nhifRates[i];
            break;
        }
    }
}else{
    nhifDeductions = nhifRates;
}
let nssfRates = 0.56;
const nssfDeductions = grossSalary * nssfRates;
//this is where the final output will come .....it will display the finalOutput
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
 finalOutput = `grossSalary :${grossSalary}
payee:${payee}
nhifDeductions:${nhifDeductions}
nssfDeductions:${nssfDeductions}
netSalary:${netSalary}`


let Output = finalOutput;
console.log(Output);


 










//finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})