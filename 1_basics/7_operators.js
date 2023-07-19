/**
 * Operators : 연산자
 */

/**
 * 숫자 타입이 아닌 타입에 +, - 를 사용하면?
 */

let sample = "99"; //string

console.log(typeof +sample); // number
console.log(typeof sample); //string 애는 그대로

sample = true; //
console.log(+sample); // true => 1로 변환
console.log(typeof +sample); //number

sample = false;
console.log(+sample); // false -> 0으로

sample = "안유진";
console.log(+sample); // NaN : not a number

sample = "99";
console.log(-sample); // -99됨 오~

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == "5"); //true
console.log(0 == ""); //  ' ' 는 숫자로 바꾸면 0 따라서 true

/**
 * 대소 관계 비교 연산자
 */

/**
 * 삼항 조건 연산자 ( ternary operator )
 * (조건문 ) ? true일 떄 : false일 때 실행
 */

/**
 * 논리 연산자
 */

/**
 * 단축 평가
 *
 *
 */

/**
 * 널 연산자 ??
 */

let name;
console.log(name); // unde
name = name ?? "코드팩토리"; // 좌측값이 널이나 언디파인드일때 오른쪽 값 반환
