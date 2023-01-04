function Stack() {
    this.count = 0;
      this.storage = {};
    
      this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
      }
    
      this.pop = function () {
        if (this.count === 0) {
          return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    
      this.peek = function () {
        return this.storage[this.count - 1];
      }
    
      this.size = function () {
        return this.count;
      }
    }

    let stackOfAuto = new Stack()
    stackOfAuto.push("BMW")   
    stackOfAuto.push("Ford")   
    stackOfAuto.push("Mazda")
    console.log(stackOfAuto.storage)   
    console.log(stackOfAuto.size())   
    console.log(stackOfAuto.peek())
    console.log(stackOfAuto.pop())
    console.log(stackOfAuto.storage)   
    console.log(stackOfAuto.size())  