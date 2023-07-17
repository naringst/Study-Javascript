/**
 * Property Attribute
 *
 * 1) data property : 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 : 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때
 *                  호출되는 함수로 구성된 프로퍼티 예를 들면 getter and setter
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
console.log(Object.getOwnPropertyDescriptors(yuJin));

/**
 * 1) value : 실제 프로퍼티의 값
 * 2) writable : 값을 수정할 수 있는지 여부, false로 설정시 프로퍼티
 * 값 설정 불가
 * 3) enumerable : 열거가 가능한지 여부. for ... in 등을 사용할 수 있으면
 *  true로 반환
 * 4) configurable : 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판단
 *  false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 단 writable이 true
 *  인 경우 값 변경과 writable을 변경하는 건 가능하다.
 */

const yuJin2 = {
  name: "안유진",
  year: 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },

  //나이를 넣어주면 몇년도 생인지 계산해서 year에 넣어줌
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2);
console.log(yuJin2.age);
yuJin2.age = 32;

console.log(yuJin2.age);
console.log(yuJin2.year);

//데이터프로퍼티와 엑세서 프로퍼티는 getOwnPropertyDes.. 를 찍어봅면 안다.
console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));
//{ //이렇게 get, set속성이 있으면 엑세스
//    get: [Function: get age],
//    set: [Function: set age],
//     enumerable: true,
//     configurable: true
//   }

//그냥 프로퍼티 추가 시  어트리뷰트가 기본값
yuJin["height"] = 172;
console.log(yuJin);

//프로퍼티 어트리뷰트를 수정하며 프로퍼티를 추가하고 싶다면?
Object.defineProperty(yuJin2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

//writable 변경가능
yuJin2.height = 180;

Object.defineProperty(yuJin2, "height", {
  writable: false,
});

yuJin2.height = 185;
console.log(yuJin2); // 키가 185로 안바뀜

/**
 * Enumerable
 */

console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
console.log("----");

console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

console.log(yuJin2); //여기서도 사라짐 하지만 값은 있음
console.log(yuJin2.name); //여긴 있음

/**
 * Configurable
 */

console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

//configurable이 false일때 enumerable을 false로 바꿔보기 : error
// Object.defineProperty(yuJin2, "height", {
//   enumerable: false,
// });

//writable이 true이면 이를 바꾸는 것과 값 바꾸기는 가능

Object.defineProperty(yuJin2, "height", {
  configurable: false,
  writable: true,
});

Object.defineProperty(yuJin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  writable: false,
});

Object.defineProperty(yuJin2, "height", {
  writable: true,
}); // 이거 안됨

//confi : false면 프로퍼티에트리뷰트 변경 불가
//얘외 writable true면 값만 바꿀 수 있음, 그리고 true -> false도 가능
