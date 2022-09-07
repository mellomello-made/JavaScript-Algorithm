function solution(n) {
   
 
return (Math.sqrt(n) % 1 === 0? Math.pow(Math.sqrt(n)+1,2) : -1);
    
//return (n !== Math.sqrt(n) ?  -1 : num);
    
}

// pow는 특정숫자의 거듭제곱 값을 계산해주는 함수이며,
// Math.pow([대상 숫자], [거듭제곱 횟수]);
// Math.pow(2, 3) : 8

// sqrt는 특정숫자의 제곱근 값을 계산해주는 함수입니다.
// Math.sqrt([대상 숫자]);
// Math.sqrt(1024) : 32
// Math.sqrt(121) : 11

// 1번 입출력 예 성공 => return Math.pow(Math.sqrt(n)+1,2);
// 2번 입출력 예 성공 => return (n !== Math.sqrt(n) ?  -1 : null);

// 따로 적으면 통과되는데 같이 적으면 통과안된다.
// n이 제곱근 값이라면 true가 되기 때문에 true 조건을 만족시킨다.
// 1로 나눈 나머지가 0일 때로 조건 만들어준다.