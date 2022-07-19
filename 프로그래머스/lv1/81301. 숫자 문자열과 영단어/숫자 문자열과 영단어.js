function solution(s) {
    
   let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"]
   
   let result = s;
    
    for(i =0 ; i < numbers.length ; i++){
       let arr = result.split(numbers[i]);
        result = arr.join(i);
    }
    return parseInt(result);
}


 //영문+숫자 조합으로 입력되면 영문을 해석하서 숫자로 반환한다.
 //영어 단어에 대응되는 숫자를 변환하는 방법 찾기.