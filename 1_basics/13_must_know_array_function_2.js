//완료

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

//원래 배열을 바꾸지 않는 함수들
//현대에 많이 사용

//concat()
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

//slice() , 몇번 인덱스부터 몇번인덱스까지(마지막 인덱스는 제외) -파이썬과 동일
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator : ...뒤에 쓴 배열 내부의 모든 원소가 새로운 배열로 들어간다.
//spread 안쓰면 그냥 리스트 내 리스트
let iveMembers2 = [...iveMembers];

console.log(iveMembers2);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers); // true , 같은 메모리 공간을 가리키는 변수 둘

console.log([...iveMembers] === iveMembers); //false , 다른 매모리 공간에 존재하는 새로운 배열

//join()
console.log(iveMembers.join()); // string으로 조인됨
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

//sort() : 정렬
iveMembers.sort(); //반환값 없음, 원래 어레이 변경
console.log(iveMembers.reverse()); //정렬된 새로운 배열 반환

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

//소트에 함수 적용 가능
//a,b 비교시
//a를 b보다 나중에 정렬하려면(뒤에두려면) 0보다 큰 숫자를 반환(그냥 규칙)//오름차숨
// a를 b보다 먼저 정렳려면 (앞에두려면) 0보다 작은 숫자를 반환(그냥 규칙)
// 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1; //오름차순ㄴ
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

//map() : 각 원소에 대해 함수를 적용한 뒤 새로운 배여 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `ive ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `ive ${x}`;
    } else {
      return x;
    }
  })
);

//filter()
number = [1, 8, 7, 6, 3];

console.log(number.filter((x) => true));
console.log(number.filter((x) => false));

console.log(number.filter((x) => x < 5));

//find(), fisrt answer return only
console.log(number.find((x) => x < 5));

//findIndex(), same with find but only return index of the answer
console.log(number.findIndex((x) => x < 5));

//reduce() 함수, 시작하고 싶은 값, n자리에 배열 원소가 하나씩 들어가고, pㅇ에는 기존 룹의 반환값이 들어간다.
//맨처음에는 이전값이 없으니 두번째 파라미터인 0이 들어간다.
console.log(number.reduce((p, n) => p + n, 0));
//reduce ( 콜백함수, initial value)

/**
 * 1. 초기값인 0이 p에 입력,
 * number array의 1이 n에 입력
 * p+n = 0+1 = 1 반환
 * 반환한 1이 p에 들어간다. array 8이 n에 입력
 * ...
 * numbers 리스트의 모든 갑을들 다 순회할 때까지 반복
 *
 * 모든값을 더하거나 곱하거나 나누거나 가 가능
 * */
