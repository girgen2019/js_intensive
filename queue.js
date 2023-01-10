function Queue() {
    var collection = [];
    this.print = function () {
      console.log(collection);
    };
    this.enqueue = function (element) {
      collection.push(element);
    };
    this.dequeue = function () {
      return collection.shift();
    };
    this.front = function () {
      return collection[0];
    };
  
    this.isEmpty = function () {
      return collection.length === 0;
    };
    this.size = function () {
      return collection.length;
    };
  }
  
  let queueBooks = new Queue();
  
  queueBooks.enqueue("Stephen King");
  queueBooks.enqueue("J. R. R. Tolkien");
  queueBooks.enqueue("C. S. Lewis");
  queueBooks.print();
  console.log(queueBooks.front());
  console.log(queueBooks.isEmpty());
  console.log(queueBooks.size())
  queueBooks.dequeue();
  console.log(queueBooks.front());
  console.log(queueBooks.isEmpty());
  console.log(queueBooks.size())