function solution(nums) {
  
    let sum =0 ;
    let answer =0 ;
 
    
     for(let i =0 ; i < nums.length ; i++){
         for(let j = i + 1 ; j < nums.length ; j++){
              for(let k = j + 1 ; k < nums.length ; k++){
            sum = (nums[i] + nums[j] + nums[k]);
          
             //소수일때++
             if (isPrime(sum)) { 
                    answer++;
                }
            }
        }
    }
 
    function isPrime(sum) {
        if (sum < 2) return true;
        for (let i = 2; i < sum; i++) { 
            if (sum % i == 0) return false;
        }
        return true;
    }
 
    return answer;
}

//1. nums 배열에서 중복되지 않은 원소 3개를 더한다.
//2. 1과 자기 자신으로만 나누어져야 하는 조건을 넣는다.
//3. 맞으면 소수가 되는 경우 + 1 한다.
//4. 1외에 숫자 하나라도 나누어 떨어지면 소수가 아니다. 
