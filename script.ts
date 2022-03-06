interface IDog {
  name: string;
  age: number;
  favoritePark?: string;
}

type IDogReadOnly = {
  readonly [k in keyof IDog]: IDog[k]
}

class MyDog implements IDogReadOnly {
  name
  age

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const myDog = new MyDog('Odie', 4)

myDog.age = 5

console.log(myDog);
