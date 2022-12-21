function task02() {
  const value1 = prompt("Число 1");
  const value2 = prompt("Число 2");
  let resultSum = 0
  let resultDegree = 0

  if(typeof value1 === "object" || typeof value2 === "object"){
    console.log("Повторите ввод");
    return;
  }
  
  if (value1.trim() !== "" && value2.trim() !== "") {
    if (parseInt(Number(value2)) === 0 ) {
      console.log("Деление на ноль невозможно");
      return;
    } else if (isFinite(value1) && isFinite(value2)) {
      resultSum = Number(value1) + Number(value2)
      resultDegree = Number(value1) / Number(value2)
      console.log(`Ответ: ${resultSum}, ${Math.floor(resultDegree)}`);
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

task02();