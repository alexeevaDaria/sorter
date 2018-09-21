class Sorter {
  constructor() {
   // var Arr = [];
   this.Arr = [];
   this.func=function(a,b){return a-b;}
    // your implementation
  }

  add(element) {
    if(typeof(element)==='symbol'){
      element = element.toString().slice(7,-1);
    }
   /* if(typeof(element)!=='number'){
      element=Number(element);
    }*/
    this.Arr.push(element);
  }

  at(index) {
    return this.Arr[index];
    // your implementation
  }

  get length() {
    return this.Arr.length;
    // your implementation
  }

  toArray() {
    return this.Arr;
    // your implementation
  }

  sort(indices) {
    var tempArr = [];
    indices.sort(function(a, b) {
      return a - b;
    });
    for(var i=0;i<indices.length;i++){
      tempArr.push(this.Arr[indices[i]]);
    }
    tempArr.sort(this.func);
    for(i=0; i<indices.length;i++){
      this.Arr[indices[i]]=tempArr[i];
    }

    
    /*this.Arr.length=0;
    this.Arr=tempArr;*/

    // your implementation
  }

  setComparator(compareFunction) {
    this.func=compareFunction;
    this.Arr.sort(this.func);
    // your implementation
  }
}

module.exports = Sorter;