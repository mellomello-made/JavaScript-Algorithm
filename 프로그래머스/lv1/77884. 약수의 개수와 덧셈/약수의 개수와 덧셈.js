function solution(left, right) {
    let sum = 0;
    
    for(let i = left; i<= right; i++){
        let answer = [];
        for(let j = 1; j <= i ; j++){
            if( i % j === 0){
                answer.push(j);
            }
        }
    
            if(answer.length % 2 === 0){
                sum += i;
            } else {
                sum -= i;
            }
           
    }
      return sum;
}