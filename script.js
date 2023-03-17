let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalVar
// write Code For the Code challenge








finalVar="Output"


document.getElementById('marks-id').append(finalVar)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalVar
// write Code For the Code challenge






    document.getElementById('speed-id').append(finalVar)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalVar
// write Code For the Code challenge









document.getElementById('salary-id').append(finalVar)
        
})