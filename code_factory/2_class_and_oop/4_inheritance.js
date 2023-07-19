/**
 * Inheritance
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// 상속 받는애(자식)에는 extends keyword + 부모 이름
class FemaleIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2003);
console.log(yujin);
