/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = "코드팩토리";
console.log(name);

var age = 32;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다
 */

ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

// newJeans = "code factory";
//TypeError: Assignment to constant variable.

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것 : var name;
 * 2) 할당 : 값을 넣어주는 것 name = 'dd'
 *
 * 변수 선언과 할당을 동시에 할 수도 있지만, 선언만 하고 할당은 안할 수도 있다.
 *
 */

let gf;
console.log(gf); // undefined

//const gf2; // const 선언은 초기화하면서 선언해야만 한다.
