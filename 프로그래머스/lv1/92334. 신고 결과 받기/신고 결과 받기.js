function solution(id_list, report, k) {
    
    //answer 배열을 id_list 만큼 할당하고
  const answer = new Array(id_list.length);
    
    //fill 함수를 사용하여 0으로 초기화.
    answer.fill(0) 
    const report_list = {} //
    
    //report_list객체에 key는 user의 id값, value는 신고한 사람을 담는 빈 배열 추가 
    id_list.map((user)=>{
        report_list[user] = [] //key로 userid를 value로 빈 배열을 가지는 객체
    })
    
    //report의 원소는 "이용자id 신고한id"형태의 문자열이라서
    //report 값이 ['신고한id, 신고당한id'] 형식의 띄어쓰기로 구분된 문자열을 split으로 각각 자른다.
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        
         //배열에 포함되는지 여부를 확인해서 포함하지 않으면 신고자 이름을 추가한다.
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    //report_list의 배열 길이가 k값 이상이면 정지된 유저.
    //answer에 해당 유저를 신고한 유저가 받은 메일의 수를 +1한다. 
    for(const key in report_list){
        if(report_list[key].length >= k){ //이용정지 유저
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}
    




// User A -> B (1회 처리)
// k번 이상 신고되면 이용 정지. 모든 유저에게 메일 발송
// 신고 아이디와 정지 아이디 배열로 정리 
// 정지된 아이디 기준으로 메일 받음
// 신고당한 유저 id : [신고 한 유저 id 배열] 
// report_list = { muzi: [apeach] , frodo: [muzi, apeach], neo: [frodo, muzi],apeach: [])

