function solution(a, b) {
    let result = 0;
    
    if(a === b){
        return a;
    }
    
     if(a < b){
       for(let i=a ; i<=b ; i++)
         result += i
            return result;
    } 
     if(a > b){
       for(let i=a ; i>=b ; i--)
         result += i
            return result;
    } 
}


// 1. a와 b 대소관계를 판단한다.
// 2. a = b 같은경우 return a
// 3. a < b 경우, 인자 a부터 +1해서 인자 b가 될 때까지 증가시킨다. 
// 4. 초깃값은 a로 설정, i는 b보다 작거나 같을 때 까지 증가하여 합을 리턴한다.
// 5. 반대로 a > b 경우, 인자 a부터 -1해서 인자 b가 될 때까지 감소.
// 6. 초깃값은 a로 설정, i는 b보다 크거나 같을 때 까지 감소하여 합을 리턴한다.