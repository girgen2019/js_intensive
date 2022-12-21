function task01() {
  const value1 = prompt("Число 1");
  const value2 = prompt("Число 2");

  if(typeof value1 === "object" || typeof value2 === "object"){
    console.log("Некорректный ввод");
    return;
  }
  
  if (value1.trim() !== "" && value2.trim() !== "") {
    if (parseInt(Number(value2)) === 0 ) {
      console.log("Некорректный ввод");
      return;
    } else if (isFinite(value1) && isFinite(value2)) {
      console.log(Number(value1).toString(Number(value2)));
    } else if (!isFinite(value1) && isFinite(value2)) {
      console.log("Некорректный ввод");
      return;
    } else if (isFinite(value1) && !isFinite(value2)) {
      console.log("Некорректный ввод");
      return;
    }else if (!isFinite(value1) && !isFinite(value2)) {
      console.log("Некорректный ввод")
      return;
  } 
  } else{
    console.log("Некорректный ввод")
    return;
  }
}

task01();