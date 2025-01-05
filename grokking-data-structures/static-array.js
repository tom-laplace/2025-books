class UnsortedArray {
  maxSize;
  size;
  array;

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.array = new Array(maxSize);
  }

  insert(newEntry) {
    if (this.size >= this.array.length) {
      throw new Error("The array is already full");
    } else {
      this.array[this.size] = newEntry;
      this.size += 1;
    }
  }

  delete(index) {
    if (this.size === 0) {
      throw new Error("Delete from an empty array");
    } else if (index < 0 || index >= this.size) {
      throw new Error(`Index ${index} out of range.`);
    } else {
      this.array[index] = this.array[this.size - 1];
      this.size -= 1;
    }
  }

  find(target){
    for(let i = 0; i < this.size; i++){
        if(this.array[i] === target){
            return i 
        }
    }

    return null
  }

  traverse(callback){
    for(let i = 0; i < this.size; i++){
        callback(this.array[i])
    }
  }
}

function maxInArray(array){
    if(array.length === 0){
        throw new Error('Max of an empty array')
    }
    let maxIndex = 0 

    for(let index = 1; index < array.length; index++){
        if(array[index] > array[maxIndex]){
            maxIndex = index
        }
    }

    return maxIndex, array[maxIndex]
}

function minInArray(array){
    if(array.length === 0){
        throw new Error('Min of an empty array')
    }
    let minIndex = 0

    for(let index = 1; index < array.length; index++){
        if(array[index] < array[minIndex]){
            minIndex = index
        }
    }

    return minIndex, array[minIndex]
}

function minMaxArray(array){
    if(array.length === 0){
        throw new Error('Min Max of an empty array')
    }

    let minIndex = 0
    let maxIndex = 0

    for(let index = 1; index < array.length; index++){
        if(array[index] < array[minIndex]){
            minIndex = index
        }

        if(array[index] > array[maxIndex]){
            maxIndex = index
        }
    }

    return minIndex, array[minIndex], maxIndex, array[maxIndex]
}

let u = new UnsortedArray(5)
u.insert(1)
u.insert(1)
u.insert(2)
u.insert(3)
u.insert(3) 

console.log(u)

console.log("min", minInArray(u.array))
console.log("max", maxInArray(u.array))
console.log("min - max", minMaxArray(u.array))

console.log("find", u.find(3)) 
console.log("traverse", u.traverse(console.log))
console.log("delete", u.delete(2))