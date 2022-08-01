function solution(arr1, arr2) {
    
    let newArray = [];
   
    for(let i = 0; i < arr1.length; i++){
        let temp = [];
        for(let j = 0; j < arr1[i].length; j++){
           temp.push(arr1[i][j] + arr2[i][j]);
        }
       newArray.push(temp);
    }
     return newArray;
  } 

// 1. 이차원 배열은 차례대로 [행,열]이다.
// 2. arr1, arr2 배열 인덱스가 같은 것을 더하면 같은 행, 같은 열의 값을 서로 더한 결과가 나온다. 
// 3. 먼저 덧셈이 되는 arr1[0][0] + arr2[0][0]를 임시 저장공간 temp에 할당해준다. 
// 4. 리턴하는 newArry 배열로 push해서 행렬의 덧셈을 반환한다. 
