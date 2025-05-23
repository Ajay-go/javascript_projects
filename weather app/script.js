let city_input = document.getElementById("city_name");
let butt = document.getElementById("submit");
let city_result = document.getElementById("city");
let temp = document.getElementById("temp");


async function helper2 (city){
   let city_data = await fetch(`http://api.weatherapi.com/v1/current.json?key=907d2978095d4bedb5482206252305&q=${city}&aqi=no`);
   return await city_data.json();
}
async function helper(){
   let city = city_input.value;
   let res = await helper2(city);
   console.log(res)
   city_result.innerText = city;
   temp.innerText = `temperature : ${res.current.feelslike_c}`;

}
butt.addEventListener("click",helper)
