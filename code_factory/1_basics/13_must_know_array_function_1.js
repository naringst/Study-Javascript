//완료

/**
 * Array Functions
 *
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

//push(), return 값 ? 푸쉬 후 명수
iveMembers.push("코드팩토리");
console.log(iveMembers);
console.log(iveMembers.push("채채"));

//pop() : 마지막 값 삭제, pop은 삭제하는 배열의 마지막 값을 리턴
console.log(iveMembers.pop());
console.log(iveMembers);

//shift : 첫번쨰 값 반환받고 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift : 값을 맨앞에 추가,새로 추가된 어래이의 길이 반환
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

//splice 어떤인덱스부터 삭제, 몇개 삭제
console.log(iveMembers.splice(0, 3));
//안유진, 가을 레이 삭제
console.log(iveMembers);
// 장원영부터 남아있음
