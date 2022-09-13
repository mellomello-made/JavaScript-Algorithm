function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    
    d.sort((a,b) => a-b);
    
    for(let i = 0 ; i < d.length ; i++){
        sum += d[i];
        answer++;
        
        if (sum > budget) 
            answer--;
       
    }
        return answer; 
}


//1. 1<= d.length <= 100
//2. d[sum] <= budget 경우의수 구하기