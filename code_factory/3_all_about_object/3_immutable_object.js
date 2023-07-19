/**
 * Immutable object
 *
 */

const yuj = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuj);

/**
 * Seal : 값을 추가하거나 삭제할 순 없지만 프로퍼티 에트리뷰트는 수정가능
 * -> configurable을 false로 바꾼것과 같이 동작
 */

/**
 * Freezed
 *
 * 읽기 외에 아무것도 못함
 */

//확인 방법
console.log(Object.isFrozen(yuj)); // false
//freezing
Object.freeze(yuj);
// add : not working
yuj["groupName"] = "ivee";
console.log(yuj);
//delete : not working
delete yuj["name"];
console.log(yuj);

//error
// Object.defineProperty(yuj, 'name', {
//     value : 'code factory'
// })

console.log(Object.getOwnPropertyDescriptor(yuj, "name"));

//상위 object를 seal or freeze 했을 떄, 하위 object는 freeze 되지 않는다
//하위까지 바꾸러면 재귀써서 다 내부까지 바꿔줭야 한다
