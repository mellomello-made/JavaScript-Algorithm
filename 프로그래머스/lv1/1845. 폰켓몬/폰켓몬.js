function solution(nums) {
   
    const togopoke = Math.floor(nums.length/2);
    
    const exceptsamepoke = new Set(nums).size;
    
    return togopoke < exceptsamepoke? togopoke : exceptsamepoke; 
    
    
}

// N 마리의 폰켓몬 중에서 N/2마리 가져오기 >>> 가져올 포켓몬 nums.length/2
// nums 4개면 2개 가져오기
// nums 6개면 3개 가져오기
// 중복 제외하는 포켓몬 const exceptsamepoke = new Set();
// 가져올 포켓몬 보다 중복제거한 포켓몬 개수가 크면 => 가져올 포켓몬 진행 
// 가져올 포켓몬 보다 중복제거한 포켓몬 개수가 작으면 => 중복제거 개수로 진행

