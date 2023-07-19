/**
 * Getter and Setter
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * getter의 역할
   * 1) 데이터를 가공해 새로운 데이터를 반환
   * 2) private한 값을 반환
   * 값을 가져올 때 사용
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }
  /**
   * setter
   * 값을 저장할 때 사용
   */

  // same with the property that wants to change
  set setName(name) {
    this.name = name; //name프로터티에 입력받은 name을 할당
  }
}

const yj = new IdolModel("안유진", 2003);
console.log(yj);
console.log(yj.nameAndYear); //하나의 속성처럼 사용 가능

yj.setName = "장원영"; //이떄 setter사용, 등호 ㄷ오른쪽 값이 파라미터로 작용
console.log(yj);

//question. 원래도 이렇게 바꿀 수 있지 않나요?
// property가 private일 때에는 직접 엑세스 불가
// 그럴 때에는 setter사용해 값을 바꿔야 한다.

//setter는 많이 사용하지 않음. 왜냐면 정의한 값을 변경하기 때문

/**
 * getter and setter **  with private
 */

class IdolModel2 {
  #name; //private #
  year;
  constructor(name, year) {
    this.#name = name; //#은 es7부터 가능
    this.year = year;
  }
  get name() {
    //여기는 게터 이름
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}

const yu = new IdolModel2("안유진", 2003);
console.log(yu);

yu.name = "유진";
console.log(yu.name);
