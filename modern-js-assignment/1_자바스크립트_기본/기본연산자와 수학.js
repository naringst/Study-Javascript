// 전위형과 후위형
let a = 1,
  b = 1;

let c = ++a; // 2, 먼저 1이 더해진 후 할당된다
let d = b++; // 1, 할당된 후 1이 더해진다

console.log(c);
console.log(d);

// 할당후 결과 에측
let a1 = 2; // ** 여기에 2가 아니라 4가 저장된다.

let x = 1 + (a1 *= 2); // 여기에서 2배를 해서 a1에 저장을 했기 떄문!!

//형 변환 : 아래 표현식의 값 에측
console.log("----");
console.log("" + 1 + 0); //1 땡 10
console.log("" - 1 + 0); //-1
console.log(true + false); // 1
console.log(6 / "3"); //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //45px 땡 9px
"$" + 4 + 5; //$45
"4" - 2; //2
console.log("4px" - 2); //undefined ? no NaN
console.log(7 / 0); //Infinity
console.log("  -9  " + 5); // -4? no "-9 5"
console.log("  -9  " - 5); //-14
console.log(null + 1); //1? ok null == 0
console.log(undefined + 1); // unddeiginded  == NaN
console.log(" \t \n" - 2); //문자형이 숫자형으로 변환시 앞뒤 공백 제거 따라서 0
