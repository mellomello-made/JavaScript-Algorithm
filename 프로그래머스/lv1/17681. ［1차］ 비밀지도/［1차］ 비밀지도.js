function solution(n, arr1, arr2) {
    
    let tobinary = 0;
    let result = [];
   
    for(let i = 0; i < n; i++) {
        tobinary = (arr1[i] | arr2[i]).toString(2);
        
        let answer = [];
        for(let j = tobinary.length-n; j < tobinary.length; j++) { 
            
            if(tobinary[j] === '1') { 
                answer.push('#');
            } else {
                answer.push(' ');
            }
        }
        result.push(answer.join(''));
    }
    return result;
}


// 1. arr1, arr2 배열에 담긴 요소들을 이진수로 나타낸다.
// 1-1. 이진수로 변환하고 or 연산해주기.
// 1-2. 벽(1) | 공백(0) = 1 (1이 있으면 -> 1) 
// 2. 같은 인덱스의 요소끼리 비교한다.
// 3. tobinary 길이가 n보다 작으면 맨앞에 0 들어가야한다.
// 4. j가(인덱스값)이 -1일 경우 undefined 반환.
// (39).toString(2) 100111
// (21).toString(2) 10101
// (49).toString(2) '110001'
