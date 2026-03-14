function convertTemp(){

let temp = document.getElementById("tempInput").value;
let unit = document.querySelector('input[name="unit"]:checked');
let result = document.getElementById("result");

if(temp === "" || isNaN(temp)){
result.innerHTML = "❌ Please enter valid number";
return;
}

if(!unit){
result.innerHTML = "❌ Please select unit";
return;
}

temp = Number(temp);

let converted;

if(unit.value === "C"){
converted = (temp * 9/5) + 32;
result.innerHTML = `${temp} °C = ${converted.toFixed(2)} °F`;
}

else if(unit.value === "F"){
converted = (temp - 32) * 5/9;
result.innerHTML = `${temp} °F = ${converted.toFixed(2)} °C`;
}

else if(unit.value === "K"){
converted = temp - 273.15;
result.innerHTML = `${temp} K = ${converted.toFixed(2)} °C`;
}

}