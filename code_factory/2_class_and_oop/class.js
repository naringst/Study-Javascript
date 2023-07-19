class Boong {
  name;
  inside;
  cookedDegree;

  constructor(name, inside, cookedDegree) {
    this.name = name;
    this.inside = inside;
    this.cookedDegree = cookedDegree;
  }
  introduce() {
    return "안녕하세요 저는 붕어빵입니다.";
  }
  price() {
    let result = 0;
    this.inside === "팥" ? (result += 500) : (result += 1000);

    if (this.cookedDegree === "촉촉") {
      result += 100;
    } else if (this.cookedDegree == "중간") {
      result += 200;
    } else {
      result += 300;
    }

    return `총 ${result}원 입니다.`;
  }
}
const boongBread1 = new Boong("귀여운붕어", "팥", "바삭");
console.log(boongBread1.price());
