//변수 가지고 놀기
let admin; //여기를 let admin, name;으로 가능
let name;

name = "John";
admin = name;

alert(admin);

// 올바른 이름 선택하기
let Earth; // 변수를 만들라고 했으니 planetName = 'Earth' 이렇게 했어야
let userName; // 현재 접속중인 사용자이니 currentUserName = 'John'; 이렇게

//대문자 상수 올바로 사용하기
//birthday가 고정된 한 사람의 값만 나타낸다면 대문자 상수로 나타내도 좋다.
//나이는 게속 바뀌기 때문에 대문자 상수로 나타내지 않는 것이 낫겠다

//해설 : 대문자 상수는 하드코딩한 값의 별칭을 나타낼 떄 주로 쓰므로  birthday는 ok
// age는 런타임에 평가되고 덜 상수스럽기 떄문에 대문자 상수에 적절하지 않다.
