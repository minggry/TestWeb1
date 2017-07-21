/**
 * 기본 데이터 타입 예제
 */

var num = 10;

// 한줄 주석 동적 타입 (값을 넣을 때 그 타입이 결정된다.)
console.log('num : ' + num);
//js도 대소문자 구문함
num = 12.45; 		//실수
console.log('num type: ' + typeof(num)); //type of 함수
num = 'korea';
console.log('num type: ' + typeof num); //type of 연산자 	int라는 타입은 없고 number
num = 3.4;		//값을 넣으면 그 순간 타입이 변한다
console.log('num : ' + num);

num = 3;
if(num = 4){	//semi boolean(0, 거짓, 그 외값 참)//자바는 = 하난 오류떠//js는 오류 안 나
	console.log('같음' );
}else{
	console.log('다름' );
}
console.log('num : ' + num);

var tot; 	//값은 넣은 적이 없다..

colsole.log(tot);
colsole.log('dddddd');

//var a = 'korea';
//var a = null;
//var a ;
//undefind와 null은 내부적으로 다른값을 가진다

colsole.log(a);
if(a){		//semi boolean(0, null, undefind, 거짓, 그 외값 참)//자바는 = 하난 오류떠//js는 오류 안 나
	console.log('같음1' );
}else{
	console.log('다름1' );
}