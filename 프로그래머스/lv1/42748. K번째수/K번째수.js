function solution(array, commands) {
 
  let result = [];
  
  for(let i = 0; i< commands.length ; i++){
      
      let j = commands[i][0]
      let k = commands[i][1]
      let m = commands[i][2]
      
     let cut_list = array.slice(j-1,k)
     let sort = cut_list.sort((a,b) => { return a-b})
     result.push(sort[m-1])
        
   }
  
    return result
}

