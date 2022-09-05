function solution(n) {
    
    let answer = [];
    let count = 0;
    
     for(let i = 0 ; i < n + 1 ; i++){
       answer.push(true);
     }
    
    for(let i = 2 ; i * i <= n ; i++){
        if (answer[i]) {
            for (let j = i * i; j <= n ; j+= i){
                answer[j] = false;
            }
        }
    }
    answer.splice(0, 2, false, false);
    for(let i = 0; i < answer.length; i++){
        if(answer[i]) count ++;
    }
    return count ++;
    
}
    
    

// 1. 1부터 N 사이에 있는 소수를 찾는다.
// 2. 1은 소수에서 제외하고, 2부터 소수 담는 배열에 넣는다.
// 3. 나눠지는 수가 있는지 반복문으로 찾는다. 
// 4. 나눠지면 false , 나눠지는 수가 없는 소수의 경우이면 배열에 push한다.
// 5. 배열의 원소 갯수를 반환한다.

