function solution(n) {
 
   let arr = [];
    
    for(let i = 2; i <= n ; i++) {
        arr[i] = i;
    }
    
    for(let i = 2; i <= n; i++) {
    
        if (arr[i] === 0){
           
        continue;
            
        }
        
        for(let j = i*2; j <= n; j += i) {
            arr[j] = 0;
        }
    }

    return arr.filter(e => e !== 0).length;
}

// 1. 2부터 N 사이에 있는 소수를 찾는다. 0, 1은 제외한다. 
// 2. 인덱스 2부터 반복문 돈다.
// 3. 0이면 다시 다음 반복문을 돈다.
// 4. 각 인덱스의 배수들을 0으로 지정한다.
// 5. filter로 0이 아닌 수들의 갯수를 리턴한다.

//첫번째 시도한 방식
// 1. 1부터 N 사이에 있는 소수를 찾는다.
// 2. 1은 소수에서 제외하고, 2부터 소수 담는 배열에 넣는다.
// 3. 나눠지는 수가 있는지 반복문으로 찾는다. 
// 4. 나눠지면 false , 나눠지는 수가 없는 소수의 경우이면 배열에 push한다.
// 5. 배열의 원소 갯수를 반환한다.
