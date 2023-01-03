class Calculator{

    // Constructor

  constructor(numberX, numberY) {
    if (typeof numberX === 'number' && typeof numberX !== " "){
        this._numberX = numberX;
    }else {
        throw new Error("NumberX is not validate value or value is empty");
    };

    if (typeof numberY === 'number' && typeof numberY !== ""){
        this._numberY = numberY;
    }else {
        throw new Error("NumberY is not validate value or value is empty");
    }
  }

  // Accessors

  get numberX(){
    return this._numberX;
  }

  set numberX(numberX){
    if (numberX !== "" && typeof numberX === 'number'){
        this._numberX = numberX;
    }else {
        throw new Error("NumberX is not validate value or argumet is empty");
    }
  }

  get numberY(){
    return this._numberY;
  }

  set numberY(numberY){
    if (numberY !== "" && typeof numberY === 'number'){
        this._numberY = numberY;
    }else {
        throw new Error("NumberY is not validate value or argumet is empty");
    }
  }

  // Methods

  logSum(){
    return `${this._numberX} + ${this._numberY} = ${this._numberX + this._numberY}`;
  }

  logMul(){
    return `${this._numberX} * ${this._numberY} = ${this._numberX * this._numberY}`;
  }

  logSub(){
    return `${this._numberX} - ${this._numberY} = ${this._numberX - this._numberY}`;
  }

  logDiv(){
    if (this._numberY === 0){
        throw new Error("division on zero is impossible")
    }else{
        return `${this._numberX} / ${this._numberY} = ${this._numberX / this._numberY}`;

    }
  }

}
 let calcTest = new Calculator(5,10)
 console.log(calcTest.logSum())
 console.log(calcTest.logMul())
 console.log(calcTest.logSub())
 console.log(calcTest.logDiv())