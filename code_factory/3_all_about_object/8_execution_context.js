/**
 * Execution Context?
 * 실행하려는 js 코드, 코드를 실행할 때 필요한 정보를 담고 있는 특수 환경
 * 코드 실행에 필요한 모든 데이터를 들고 있는 환경
 *
 * 타입은 두가지
 * 1) global context : 최상위 실행 컨텍스트. 코드 실행시 무조건 생성되며,
 * 웹에서 window 객체나 nodejs 의 global객 체를 생성해 들고 있는다.
 *
 * 2) 함수 컨텍스츠 : 함수가 실행될 때마다 함수별로 실행되는 context .
 * 함수 실행에 대한 모든 정보를 갖고있는다.
 */

/**
 * 실행 컨텍스트 스택
 * 1) creation phase -> 2) execution phase
 * 1) creation phase : global object를 생성. window or global 객체가 생성되고
 * 함수에서는 arguments 객체가 생성된다.
 * this를 window or global에 바인딩한다
 * 변수와 함수를 memory heap에 배정하고 기본값을 undefined 로 저장
 * (호이스팅이 일어남)
 *
 * 2) execution phase
 * - 코드를 실행
 * - 필요하다면 새로운 실행 컨텍스트 생성
 *
 */
