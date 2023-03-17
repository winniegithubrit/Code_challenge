let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge










finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge













finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge











finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})