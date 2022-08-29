function solution(n, lost, reserve) {
    
    let answer = 0;
  
    let clothes = new Array(n).fill(1);
    
    
    for(let i = 0; i < lost.length ; i++){
       clothes[lost[i] - 1]--;
    }
    
    for(let i = 0; i < reserve.length ; i++){
        clothes[reserve[i] - 1]++;
    }
    
    for(let i = 0; i <= clothes.length ; i++){
    if (clothes[i] === 0){
        if (clothes[i-1] === 2){
            clothes[i-1]--;
            clothes[i]++;
        }
        else if (clothes[i+1] === 2){
              clothes[i+1]--;
              clothes[i]++ ;
        }
            
      }
 
        if (clothes[i] >= 1){
        answer++;
        }
    }
    
    return answer;
}


// 1. 바로 앞 번호나 뒷번호에만 빌려줄 수 있다
// 2. 체육복 개수가 N 만큼있다고 치고 체육복 배열 원소를 1로 초기화한다. -> fill
// 3. 체육복 배열에서 도난 당한(lost) 학생은 체육복 원소에서 -1 한다. -> 0
// 4. 체육복 배열에서 여벌옷 있는(reserve) 학생은 체육복 원소에서 +1 한다. -> 2
// 5. [2,0,2,0,2] -> [1,1,1,1,2]
// 6. 원소[i] 값이 0일 때, [i-1] && [i+2] 값이 2이면 [i-1]값을 1 감소시킨다.
// 7. [i]는 +1 한다.
// 8. [i] >= 1 이상이면 answer 1증가.

