let buttons=document.querySelector('.buttons')
let container=document.querySelector('.container')
let outputarea=document.querySelector('.outputarea')
let inputarea=document.querySelector('.inputarea')
let msg=document.querySelector('#msg')
let yellowButtons=document.querySelectorAll('.yellow')
let greyButtons=document.querySelector('.grey')
let lightgreyButtons=document.querySelector('.lightgrey')
let numbers=document.querySelectorAll('.number')
let signs=document.querySelectorAll('.sign')


let AC=document.querySelector("#AC")
let reverse=document.querySelector("#reverse")
let percent=document.querySelector("#percent")
let divide=document.querySelector('#divide')
let seven=document.querySelector("#seven")
let eight=document.querySelector('#eight')
let nine=document.querySelector('#nine')
let multiply=document.querySelector('#multiply')
let four=document.querySelector('#four')
let five=document.querySelector('#five')
let six=document.querySelector('#six')
let subtract=document.querySelector('#subtract')
let one=document.querySelector('#one')
let two=document.querySelector('#two')
let three=document.querySelector('#three')
let add=document.querySelector('#add')
let zero=document.querySelector('#zero')
let point=document.querySelector('#point')
let equals=document.querySelector('#equals')

let isFirstVal=true;
let isSecondVal=false;
let val1='';
let val2='';
let ='';
let sign='';
let resultVal='';


for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',(e)=>{
        let value=e.target.getAttribute('value')
        if(isFirstVal === true){
           getVal1(value)
        }if(isSecondVal === true){
            getVal2(value)
        }
       
    })
}


function getVal1(val){
    msg.innerHTML="";
    val1=val1+val;
    msg.innerHTML=val1;
    val1= +val1;
    console.log(val1)
}

function getVal2(val){
   if(val !== "" && sign !==""){
        val2=val2 + val;
        msg.innerHTML=val2;
        val2= +val2;
        console.log(val2)
    }
}


function getSign(){
    for(let i=0;i < signs.length ;i ++ ){
      signs[i].addEventListener('click',(e)=>{
         sign=e.target.getAttribute('value')
         isFirstVal=false;
         isSecondVal=true;
      })
    }
}

getSign()
equals.addEventListener('click',()=>{
    msg.innerHTML=''
    if(sign ==="+"){
       resultVal=val1+val2;
    }else if(sign === '-'){
        resultVal = val1-val2;
    }else if(sign === '*'){
        resultVal=val1*val2;
    }else if(sign === '/'){
        resultVal=val1/val2;
    }else if(sign === ''){
        resultVal=val1
    }
    msg.innerHTML=resultVal;
    val1=resultVal;
    val2='';

})

function checkResult(){
    resultVal = JSON.stringify(resultVal)
    if(resultVal.length >= 8){
        resultVal= JSON.parse(resultVal)
        msg.innerHTML=resultVal.toFixed(5)
        resultVal = parseFloat(resultVal)
    }
}

percent.addEventListener('click',()=>{
    msg.innerHTML=''
    if(val1 != ""){
        resultVal= val1 /100;
        val1= resultVal;
    }if(val1 != '' && val2 != '' && sign !=''){
        resultVal= resultVal/100;
}

    msg.innerHTML=resultVal;
})


reverse.addEventListener('click',()=>{
    msg.innerHTML='';
    if(val1 !=""){
        resultVal= -val1;;
        val1=resultVal;
    }
    if(val1 != '' && val2 != '' && sign !=''){
            resultVal= -resultVal;
    }


    msg.innerHTML= resultVal;
})

AC.addEventListener('click',()=>{
    
    val1=0;
    val2=0;
    isFirstVal=true;
    isSecondVal=false;
    sign=0;
    resultVal=0;
    msg.innerHTML=resultVal;
})

point.addEventListener('click',()=>{
    msg.innerHTML='';
    if(isFirstVal=== true){
        val1=JSON.stringify(val1)
        let indexOfDecimal=val1.indexOf('.');
        if(indexOfDecimal=== -1 || indexOfDecimal === val1.length -1){
            val1=val1+'.'
        }
         resultVal=parseFloat(val1)
        msg.innerHTML=resultVal;
    }else{
        val2=JSON.stringify(val2)
        let indexOfDecimal=val2.indexOf('.');
        if(indexOfDecimal=== -1 || indexOfDecimal === val2.length -1){
            val2=val2+'.'
        }
         resultVal=parseFloat(val2)
        msg.innerHTML=resultVal;
    }

})




