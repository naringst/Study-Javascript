/**
 * Static keyword
 * 객체(인스턴스)에 구속되는 것이 아니라, 클래스에 귀속
 */

// class IdolModel {
//   name;
//   year;
//   //공통적인 그룹 이름을 만들 때
//   static groupName = "ive";

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGrupName() {
//     return "아이브";
//   }
// }

// const yu = new IdolModel("안유진", 2003);
// console.log(yu);

// //groupName은 객체를 출력해봐도 없다!

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGrupName());

/**
 * 현대에 많이 쓰이는 방식
 * factory cosntrctor
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    //어떤 object 값을 받아와서 거기에  이름. 연도 속성이 있으면
    //새로운 idolmodel 인스턴스로 만들어준다
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yujin = IdolModel.fromObject({
  name: "안유진",
  year: 2003,
});

console.log(yujin);

const won = IdolModel.fromList(["장원영", 2003]);
console.log(won);
