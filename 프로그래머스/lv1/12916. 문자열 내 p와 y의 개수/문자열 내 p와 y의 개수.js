function solution(s){

let str = s.toLowerCase(); // 소문자로 치환 
let count = 0;
let p_count = 0;
let y_count = 0;
    

    for(let i = 0 ; i < s.length; i++){
        if(str[i] === "p"){
            p_count++;
        }
        if(str[i] === "y"){
            y_count++;
        }
            
    }
    if(p_count === y_count){
        return true;
    }
    return false;
}



// 1. 'p', 'y' 개수가 같으면 true / 다르면 false
// 2. 'p', 'y' 개수가 없으면 true 리턴
// 3. 대소문자 섞인 문자열을 소문자로 치환한다.
// 4. 문자열 길이만큼 반복하여 p 찾고
// 5. 찾으면 count + 1 한다.
// 6. 반복문으로 y 찾고 count - 1 한다.
// 7. count 가 0 이면 true , 아니면 false