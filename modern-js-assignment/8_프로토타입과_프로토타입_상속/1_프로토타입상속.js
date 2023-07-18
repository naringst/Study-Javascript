/**
 * 프로토타입 상속
 */

/**
 * 프로토타입 상속을 활용하면 원래 있는 객체인 user와 유사한
 * 하지만 다른 admin, guest 객체를 만들기 용이하다
 */

//프로토타입 이해하기
//true
//null
//error ? undefined

//검색 알고리즘

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

//head.glasses가 빠르다.
//pockests.glasses는 상속받아서 써야 하기 때문에
//위 답은 츨렷다.

/**
 * 모던 엔진에서 객체에서 프로퍼티를 가져오는 것과
 * 객체의 프로토타입에서 프로퍼티를 가져오는 것 사이에 성능 차이는 없다
 * 모던 엔진은 프로퍼티가 어디서 발견됐는지 기억하고 있다가 다음 요청 시
 * 이 정보를 재사용한다.
 *
 * glasses가 발견된 곳 (head)를 기억학 있다가 다음 요청부턴 이 프로퍼티가
 * 발견된 곳에서 검색을 시작한다.
 *
 */

//어디에 프로퍼티가 추가될까요?

/**
 * animal을 상속받는 rabbit이 있습니다.
rabbit.eat()을 호출했을 때, animal과 rabbit 중 어떤 객체에 full 프로퍼티가 생길까요?
 */

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

//rabbit 객체에 생긴다.
// rabbit.eat을 했을 때, eat함수의 this 는 rabbit 객체를 가리키기 떄문이다.

//매서드를 실행할 땐 this가 rabbit이 되어 해당 매서드가 실행된다.

//왜 햄스터 두 마리 모두 배가 꽉 찼을 까요

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// 햄스터 speedy가 음식을 먹습니다.
speedy.eat("apple");
console.log(speedy.stomach); // apple

// 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
console.log(lazy.stomach); // apple

//왜냐하면 stomch가 hamster에 정의돼 있기 때문에 둘의 prototype인 hasmster의 배에 차버린다.
//따라서 하나만 배가 차도 나머지가 차게 된다.
//따라서 stomach를 각각의 속성으로 넣어주면 된다.

/**
 * 답
 * push 메서드 말고 this.stomach= 로 음식을 할당
 * 내가 쓴 답이 일반적인 해결 방법 .
 * 객체 내 상태를 설명하는 프로퍼티이기 떄문에 객체 자체에 정의.
 */
