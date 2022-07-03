var slider = document.getElementById('bar');
var output = document.getElementById('percentage');
output.innerHTML = slider.value;

//Function for increament;

slider.oninput = function(){
    output.innerHTML = `${this.value } %`;

}

// console.log(tip.value);
// console.log(totalBill.value);


const getAmt = ()=>{
    const mainAmt = document.querySelector('#first_amt').value;
    // alert(mainAmt)
    const percentage = slider.value;
    // alert(percentage);
    const tip = document.querySelector('#tip_amt');
    // alert(tip)

    const tipFormula = mainAmt *(percentage/100);
    // console.log(tipFormula);
    tip.value = tipFormula;
    
    const totalBill = document.querySelector('#total_amt');

    totalBill.value = +mainAmt +  +tipFormula;

    // if (mainAmt.value === ""&& percentage.value === "" && totalBill.value === "") {

    //     alert("Fill the values please:");
        
    // }

}