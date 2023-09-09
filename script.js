const c=document.getElementById("celcius");
const f=document.getElementById("fahrenheit");
const k=document.getElementById("kelvin");


function Temperature(){
    const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celcius":
      k.value = currentValue + 273.15;
      f.value = currentValue * 1.8 + 32;
      break;
    case "fahrenheit":
      c.value = (currentValue - 32) / 1.8;
      k.value = (currentValue -32) / 1.8 + 273.15;
      break;
    case "kelvin":
      c.value = currentValue - 273.15;
      f.value = (currentValue - 273.15) * 1.8 + 32;
      break;

    default:
      break;
  }
}


