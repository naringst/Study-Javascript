//동일한 생성자 함수로 객체 만들기

/***
 * 생성자 함수가 하나 있고, 이 생성자 함수를 사용해 만든 임의의 객체 obj가 있다고 가정해봅시다. 지금은 이 생성자 함수를 사용해 새로운 객체를 만들어야하는 상황입니다.

정체를 모르는 생성자 함수를 사용해 새로운 객체를 만드는게 가능할까요?
 */

// let obj2 = new obj.constructor();

/**
 * 위와 같은 코드를 사용해 객체를 만들 수 있게 해주는 생성자 함수를 작성해보세요.
 * 여기에 더하여 위와 같은 코드가 동작하지 않도록 하는 예시도 하나 만들어보세요.
 */

function BoongBread(inside) {
  this.inside = inside;
}

let patBoong = new BoongBread("pat");
let shoecreamBoong = new patBoong.constructor("shoecream");
console.log(patBoong);
console.log(shoecreamBoong);

//동작하지 않게 하려면 prototype 자체를 덮어써버리면 된다.
function BoongBread2(inside) {
  this.inside = inside;
}
BoongBread2.prototype = {};

let patBoong2 = new BoongBread2("pat");
let shoecreamBoong2 = new patBoong2.constructor("shoe");
console.log(patBoong2);
console.log(shoecreamBoong2); //constructor를 찾지 못함 .
console.log(shoecreamBoong2.inside);

/**
 * 왜 user2.name이 undefined가 될까요?

그 이유는 new user.constructor('Pete')가 아래와 같이 동작하기 때문입니다.

new user.constructor('Pete')는 user에서 constructor를 찾는데 아무것도 찾지 못합니다
.
객체에서 원하는 프로퍼티를 찾지 못했기 때문에 프로토타입에서 검색을 시작합니다. 
user의 프로토타입은 User.prototype인데, User.prototype은 빈 객체입니다.

User.prototype은 일반 객체 {}이고, 일반 객체의 프로토타입은 Object.prototype입니다.
 Object.prototype.constructor == Object이므로 Object가 사용됩니다.
결국에 let user2 = new user.constructor('Pete');는 
let user2 = new Object('Pete')가 됩니다. 그런데 Object의 생성자는 인수를 무시하고 
항상 빈 객체를 생성합니다. 
따라서 let user2 = new Object('Pete')는 let user2 = {}와 같다고 생각할 수 있습니다. 
user2.name이 undefined인 이유가 여기에 있습니다.
 */
