function solution(numbers) {
    let answer = [];
   
    for(let i =0 ; i < numbers.length ; i++){
         for(let j = i + 1 ; j < numbers.length ; j++){
               answer.push(numbers[i] + numbers[j]);
             
         }
    }
    
   const arr =  [...new Set(answer)];
   let uniqueArr =  arr.sort((a, b) => a - b );
    
    return uniqueArr;

    
}

// ex) [2,1,3,4,1]	
// 1. numbers 배열 오름차순 정렬한다 [1,1,2,3,4]
// 2. 제일 작은 값 하나와 그 뒤에 숫자 하나씩 뽑아서 더한다. a[0] + a[1] a[0] + a[2] a[0] + a[3] a[0] + a[4]
// 3. 더한 값을 새 배열에 push 한다
// 4. 1+4 , 2+3 결과가 같은 식은 하나로 봐서 중복된 것은 없앤다.
// 5. 중복 요소 없애기 전 오류: 실행한 결괏값 [2,3,4,5,3,4,5,5,6,7]이 기댓값 [2,3,4,5,6,7]과 다릅니다.
// 6. 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환한다.
