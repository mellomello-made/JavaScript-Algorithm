function solution(num) {
    let count = 0;

    
    // num이 1이 아니면 while 조건문 반복, 1이면 조건문 종료 
    
    while(num != 1){
    
        if(num % 2 === 0){ //num이 짝수면
            num /= 2;      
        } else {  //num이 홀수면
            num = ( num * 3 ) + 1;
        }
        count++;   //반복횟수 반환   
    } 
    
    if (count >= 500){
        return -1;
    } else {
        return count ;
    }
    
}

// 1. num이 짝수면 2로 나눈다
// 2. 2로 나눈 결과의 수가 홀수면 3을 곱하고 1을 더한다
// 3. 1이 될 때 까지 1,2를 반복한다
// 4. 몇번 반복했는지 반환한다. 몇번 반복해야하는지 정해진 횟수가 없다 -> while문
// 5. num 이 1이면 0 리턴
// 6. 500번 해도 1이 안나오면 -1 리턴
//   answer = num / 2; 을 하면 if문에서 변수를 바꿔야하니까 num /= 2; 으로 num 써주기 
