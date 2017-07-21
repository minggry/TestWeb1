/**
 * 주석입니다.
 *int 같은 타입이 없다
 * 이 기억장소를 선언합니다 : var
 * var 있고 없고 차이점 : context제한?범위있다
 * system.out.println 처럼 document도 그런거야
 * 문자열 '' 싱글코테이션이여도 에러 아니네
 * => js는 '' , "" 둘다 된다 (한쪽으로만 사용하자)
 * 얘를 가진 html을 통해서 실행할거다 run as가 아니라.. 아직 nod설치전임.
 * '\n' 했는데 줄바뀜 안됌? 약속이 달라서 그래 
 * => <br>
 * f5눌러서 확인하자
 * sysout과 같다 console ! 객체의 변수임.
 * A a / a가 객체의 변수이듯..
 * 우리가 만든 함수가 아닌데 이미 만들어져 있어서 사용 할 수 있다
 * => 내장객체
 */
var i;
i = 10;

for(i = 0 ; i < 10 ; i++ ){
	document.write('하이' + i + '<br>'); 
	console.log('hi');
	
}

console.log('test');
