/**
 * Prototype
 */

const testObj = {};

//__proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값.
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);
// {} 라는 객체가 던져짐, 감춰져서 안보이는 것

console.dir(IdolModel.prototype, {
  showHidden: true,
});

//이렇게 해보면
/**
 * <ref *1> { //아이돌 모델이라는 함수를 생성자로 가짐
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}

 */

//circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yj = new IdolModel("안유진", 2003);

console.log(yj.__proto__);
console.log(yj.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

//some functions for all Objects

console.log(yj.toString());
console.log(Object.prototype.toString());

//알고 있으면 뭉엇이 유용하냐?
function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다`;
  };
}

const yj2 = new IdolModel2("안유진", 2003);
const wy = new IdolModel2("장원영", 2002);
console.log(yj2.sayHello === wy.sayHello); //false
//sayHello도 각 객체에 속하는 고유 값이라 다른 멤리 공간 차지

console.log(yj2.hasOwnProperty("sayHello")); //true : yk2만의 고유

//공유하도록?
function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다`;
  //idolmodel3 인스턴스에서 사용할것이므로 this.name 가능
};

const yj3 = new IdolModel3("안유진", 2003);
const wy3 = new IdolModel3("장원영", 2002);

console.log(yj3.sayHello());
console.log(wy3.sayHello());
console.log(yj3.sayHello === wy3.sayHello);

console.log(yj3.hasOwnProperty("sayHello"));

/**
 * static keyword?
 */
IdolModel3.sayStaticHello = function () {
  return "안녕하세요 저는 static method 입니다";
};

console.log(IdolModel3.sayStaticHello());

/**
 *
 * Overriding
 */

function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return "안녕하세요 저는 인스턴스 메서드 입니다";
  };
}

IdolModel4.prototype.sayHello = function () {
  return "안녕하세요 저는 prototype method 입니다";
};

const yj4 = new IdolModel4("안유진", 2003);
console.log(yj4.sayHello());

//이걸 Idolmodel4함수에 직접 쓰면 프로토타입 내용이 오버라이딩 된다
// 프로퍼티 셰도잉

/**
 * //상속받는 클래스를 바꿀 수 있다.
 * //인스턴스 생성 후에도 가능하다
 * getPrototypeOf, setPrototypeof
 *
 * 인스턴스의 __proto__ vs 함수의 prototype 변경
 *
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const gaEul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("ray", 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());

//하지만 이건 안됨. ray에는 sayHello 선언 안했으니까
//이떄 idol 모델거를 상곡
// console.log(ray.sayHello());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);

console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
//이를 통해 ray라는 인스턴스의 proto만 바뀌고, FemaleMdoel 자체의 proto는 그대로
//임을 알 수 있음
//여기까지 인스턴스의 __proto__ 변경

//이제 함수의 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel("이서", 3005);
//위에서 프로토타입을 직접 변경했으므로 Femalemodel이 만드는
//인스턴스들은 바뀐 프로토타입을 상속받는다.
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
