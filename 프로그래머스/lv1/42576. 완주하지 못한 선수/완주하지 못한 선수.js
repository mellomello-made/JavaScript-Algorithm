function solution(participant, completion) {
  
    participant.sort();
    completion.sort();
    
    for(let i = 0 ; i < participant.length ; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
   
}
   


//해시 테이블(Hash table)이란 검색하고자 하는 키값을 입력받아서 해쉬 함수를 통해 얻은 해시를 배열의 인덱스로 환산해서 데이터에 접근하는 자료구조입니다.


//1. participant 와 completion 배열을 정렬한다.
//2. 배열을 순회하며 participant요소가 completion요소에 매칭되지 않은 것을 return 한다 