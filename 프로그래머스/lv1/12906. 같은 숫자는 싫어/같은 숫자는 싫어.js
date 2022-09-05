function solution(arr){
  const newArr = [];
    
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] !== arr[i+1]){
           newArr.push(arr[i]);
     }
          
  }
    return newArr;
}


// 1. 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후
// 2. 전개연산자를 사용하여 Set 객체를 다시 배열로 변환한다. 
// 3. 2번 케이스만 통과됐다.

// 4. 연속된 숫자는 하나만 남겨야하는 조건을 충족시키기.
// 5. i를 하나씩 증가시켜 arr[i]와 arr[i+1] 비교한다.
// 6. 원소 값이 같으면 i만 증가시킨다.
// 7. 다르면 arr[i] 원소값을 새 배열에 push 하고 i 증가한다.
// 8. i값이 마지막 인덱스 이면 마지막 원소값 추가한다.
// 9. 두번째 풀이에서는 2번 케이스가 안됨.

// 10.단순하게 앞자리와 그 뒷자리 원소만 비교해서 원소값이 다르면 push했다. 

//첫번째 풀이

// function solution(arr){
//const set = new Set(arr);
//const uniqueArr = [...set];
//return uniqueArr;
// }
