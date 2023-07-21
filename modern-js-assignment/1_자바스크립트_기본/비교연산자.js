//결과 예측

console.log("apple" > "pineapple"); //false a<p
//문자열 비교?
/**
 * 
 * 두 문자열의 첫 글자를 비교합니다.
첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 
첫 번째 문자열이 두 번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료합니다.
두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교합니다.
글자 간 비교가 끝날 때까지 이 과정을 반복합니다.
비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론 냅니다. 
비교가 종료되었지만 두 문자열의 길이가 다르면 길이가 긴 문자열이 더 크다고 결론 냅니다.
 */
console.log("2" > "12"); //false:  no! true  "문자열이라 사전순 비교"
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // true?? no false : null은 오직 underfine와 같다
console.log(null === +"\n0\n"); // false
