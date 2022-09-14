function solution(n) {
   
    for (let i = 2 ; i < n ; i++ ){
       
       if(n % i === 1){
            return i;
       }
      
    }
  
    
}


// 1. 10을 3으로 나누면 나머지 1 
// 2. 12를 11로 나누면 나머지 1
// 3. 나머지가 1이 되게 하는 가장 작은 수 구하기 
