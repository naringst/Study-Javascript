/**
 * Super and Override
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year); //name = nmame, this.year = year 안써도 됨
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다`;
    //super 키워드는 method에서 사용 불가
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yujin);
console.log(yujin.sayHello());
const won = new IdolModel("장원영", 2002);
console.log(won.sayHello());
