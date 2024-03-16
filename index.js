class HashMap {
  constructor(size = 16) {
    this.bucket = new Array(size); // we create a new array to store as our buckets
  }

  hash(key) {
    let hash_code = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hash_code = primeNumber * hash_code + key.charCodeAt(i); // charCodeAt returns a unicode of a particular key
    }
    return hash_code % this.bucket.length;
  }

  set(key, value) {
    const index = this.hash(key); // for each new object we create, we give it a hash index

    if (!this.bucket[index]) {
      this.bucket[index] = []; // for each new key value pair, we a new object
    }
    // we store the value as a linked list
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        this.bucket[index][i][1] = value; // the value at item [0] is the key and the item at index [1] is the value;
        return;
      }
    }
    this.bucket[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.bucket[index]) return null;
    if (this.bucket[index]) {
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i][0] === key) {
          return this.bucket[index][i][1]; // it checks whether the value at index [0] is the key and then returns the corresponding value at index [1]
        }
      }
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.bucket[index]) return;

    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        this.bucket[index].splice(i, 1); // we splice 1 item at index
        return;
      }
    }
  }

  // to implement the rest of the code, we use array methods
  length() {
    let totalLength = 0;
    this.bucket.forEach((item) => {
      totalLength += item.length;
    });
    console.log(totalLength);
  }

  keys() {
    this.bucket.forEach((item) => {
      item.forEach((item) => console.log(item[0]));
    });
  }

  values() {
    this.bucket.forEach((item) => {
      item.forEach((item) => console.log(item[1]));
    });
  }

  entries() {
    this.bucket.forEach((item) => console.log(item));
  }
}

const map = new HashMap();

map.set("name", "John");
map.set("age", 30);
map.set("city", "Pasedena");
// map.remove("city");

console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("city"));

map.length();
map.keys();
map.values();
