function solution(price, money, count) {
   let total = 0;
    
   for(let i = 1; i <= count ; i++){ 
   total += price * i;
   }
    
     return money > total ? 0 : total - money;
      
    
}


// 1.가격*횟수가 돈 보다 작은 경우
// 2. 모자란 금액을 리턴 
// 3. price * count > money
// 4. 3 * 1
// 5. 3 * 2
// 6. 3 * 3
// 7. 3 * 4
// 8. 3+6+9+12 = 30 
// 9. 30 > 20 => 10 부족 