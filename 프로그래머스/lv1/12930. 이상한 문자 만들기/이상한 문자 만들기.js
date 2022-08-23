function solution(s) {
    let answer = '';
    let str = s.split(' ');
    
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < str[i].length; j++) {
          (j % 2 === 0) ? 
                answer += str[i][j].toUpperCase() : answer += str[i][j].toLowerCase()
            }
        
        if (i < str.length -1) {
            answer += ' ';
        }
}
    
    return answer;
}


// 1. 단어(공백을 기준)별로 나눈다-> s.split('').
// 2. 단어 별로 짝/홀수 인덱스를 판단한다. 
// 3. 짝수일 때 대문자로 치환한다.
// 4. 홀수일 때 소문자로 치환한다.
// 5. s[0] 첫번째 글자는 짝수로 처리한다. j%2 === 0 조건에 부합된다.
// 6. 문자열이 공백없이 출력되니까 공백 추가한다.
