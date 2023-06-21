// 73479a57b83c433391753f2148f894c7 
fetch("https://api.currencyfreaks.com/latest?apikey=73479a57b83c433391753f2148f894c7")
.then((ee)=>{
    // console.log(ee);
  let A =  ee.json()
// console.log(A);
   return  A;
}).then(k=>{
    console.log(k);
    // console.log(k.rates);
    // console.log(k.rates["EGP"]);
    // console.log(k.rates["SAR"]);
    let input_USD = document.querySelector("#USD")
    let input_Egp = document.querySelector("#Egp")
    let input_Sar = document.querySelector("#Sar")

    // let USD = document.querySelector(".Amount");
    let EGP = document.querySelector(".EGP span");
    let SAR = document.querySelector(".SAR span");
    let USD = document.querySelector(".USD span");

// USD.onclick = function () {
//     // console.log(input.value);
//     EGP.innerHTML =Math.round( (k.rates["EGP"])* input_USD.value);
//     SAR.innerHTML =Math.round( (k.rates["SAR"])* input_USD.value);
//     EGP.style.color = "red";
   

// }

input_USD.onchange = function () {
    // console.log(input.value);
    EGP.innerHTML =Math.round( (k.rates["EGP"])* input_USD.value);
    SAR.innerHTML =Math.round( (k.rates["SAR"])* input_USD.value);
    USD.innerHTML =Math.round( input_USD.value);
    input_Egp.value =Math.round( (k.rates["EGP"])* input_USD.value);
    input_Sar.value =Math.round( (k.rates["SAR"])* input_USD.value);
    // return input.value;
}
input_Egp.onchange = function () {
    // console.log(input.value);
    input_USD.value =Math.round( (input_Egp.value / k.rates["EGP"]));
    input_Sar.value =Math.round( (k.rates["SAR"])* (input_Egp.value / k.rates["EGP"]));
    EGP.innerHTML = Math.round(input_Egp.value);
    SAR.innerHTML = Math.round( (k.rates["SAR"])* (input_Egp.value / k.rates["EGP"]));
    USD.innerHTML = Math.round( (input_Egp.value / k.rates["EGP"]));

    // return input.value;
}
input_Sar.onchange = function () {
    // console.log(input.value);
    input_Egp.value =Math.round( (k.rates["EGP"])*(input_Sar.value / k.rates["SAR"]));
    input_USD.value =Math.round( (input_Sar.value / k.rates["SAR"]));
       EGP.innerHTML =Math.round( (k.rates["EGP"])* input_USD.value);
    SAR.innerHTML =Math.round(input_Sar.value);
    USD.innerHTML = Math.round( (input_Sar.value / k.rates["SAR"]));

}




    
})