/**
 * class keyword
 */

// class 는 빵 틀
// 객체(인스턴스)는 만들어진 빵

//class 이름은 꼭 대문자여야한다
class IdolModel {
  name;
  year;

  //생성자 : 새롭게 만들어낼 때 씀
  constructor(name, year) {
    this.name = name; //this : 현재 인스턴스
    this.year = year;
  }

  //method 이름을 function keyword없이 가능
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

//생성자

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);

const gaeul = new IdolModel("가을", 2002);
const ray = new IdolModel("레이", 2004);
const wonYoung = new IdolModel("원영", 2004);
const liz = new IdolModel("리즈", 2004);
const eseo = new IdolModel("이서", 2007);

console.log(yuJin.name);
console.log(yuJin.year);

// class IdolModel {
//   //생성자 : 새롭게 만들어낼 때 씀
//   constructor(name, year) {
//     this.name = name; //this : 현재 인스턴스
//     this.year = year;
//   }

// }

//이렇게 해도 속성 정의 한것처럼 name, year 속성이 존재
//근데 정의 해두는 게 좋다

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // function, class는 함수다 _> 나중에 배울것(역사)
console.log(typeof yuJin); // object 클래스로 생성된 인스턴스는 객체다
