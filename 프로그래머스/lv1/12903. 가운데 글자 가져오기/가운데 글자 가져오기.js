function solution(s) {
    let middle = parseInt(s.length / 2);
    let result =  s.length % 2 === 0 ? s[middle-1] + s[middle] : s[middle];
    
    return result;
    
}

//substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
//길이가 4이면(2로 나눴을 때 0으로 떨어지는 숫자) 인덱스 0 1 2 3 중에서 1(middle-1),2(middle) 출력 
//길이가 5이면 2로 나웠을 때 1남음 0 1 2 3 4 중에서 2(middle) 출력 