/**
 * Using functions to create objects
 */

//생성자 함수로 객체 생성
function IdolModel(name, year) {
  //   console.log(this);
  console.log(new.target); // !undefined === true
  if (!new.target) {
    //new를 안넣어서 undefined일 때 new 넣도록
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;

  this.dacne = function () {
    return `${this.name}이 춤을 춥니다`;
  };
}

//새로운 객체 만들 때 : new 키워드 사용
const y = new IdolModel("안유진", 2003);
// this :  IdolModel {}
//new keyword사용안하면? 프로퍼티가 global에 붙어서 문제가 생긴다

// console.log(y);
// console.log(y.name);
// console.log(y.dacne());

const y2 = IdolModel("안유진", 2003);
// console.log(y2); // undefined
// console.log(global.name); //안유진


//애로우 함수로 생성자 함수 ?
// 못함! new keyword는 일반 함수에서만 사용 가능