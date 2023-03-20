let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
let grade = parseInt(prompt("enter the marks of the student that should be between 0 to 100").value);
 grade = 42;
if(grade >79){
    finalOutput = ("A");
}
else if(grade > 60,grade < 79){
    finalOutput = ("B");
}
else if(grade<59,grade>49){
    finalOutput = ("C");
}
else if(grade<49,grade>40){
    finalOutput = ("D")
}
else{
    finalOutput = ("E");
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
let speed = parseInt(prompt("enter the speed of the car( in km/hr):"));
let speedLimit = 70;
let hrdemeritPoints = 5;
if (speed<=speedLimit){
    finalOutput = "OK";
}
else {
    let demeritPoints =Math.floor((speed - speedLimit) / hrdemeritPoints);
    if (demeritPoints >= 12){
        finalOutput =  "license suspended";
    }else{
        finalOutput = `Points: ${demeritPoints}`;
    }
    
}
console.log(finalOutput);


    

//finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)

// write Code For the Code challenge

const taxExempt = 28800;
const kraRate1 = 0.1;
const kraRate2 = 0.15;
const kraRate3 = 0.20;
const kraRate4 = 0.25;

const nhifRates = [150,300,400,500,600,750,850,900,950];
const nhifExempt = 6000;
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