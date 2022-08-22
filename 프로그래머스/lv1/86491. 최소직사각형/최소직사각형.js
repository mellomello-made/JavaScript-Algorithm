function solution(sizes) {
  let result = 1
  let width_max = 0;
  let height_max = 0;


  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]
    }
  }


  width_max = sizes.sort((a, b) => b[0] - a[0])[0][0]
  height_max = sizes.sort((a, b) => b[1] - a[1])[0][1]
  result = width_max * height_max;
  return result;
}

// 2차원 배열
// [0][0] [0][1]
// [1][0] [1][1]
// [2][0] [2][1] 
// [3][0] [3][1] 
// [4][0] [4][1] 
        
//1. 배열을 순회한다.
//2. 세로길이 sizes[i][1]가 가로길이 sizes[i][0]보다 큰 경우에
//3. 위치를 바꾼다. [sizes[i][1], sizes[i][0]]으로 바꾼다.
//4. 가로,세로 배열 요소중 큰 수를 찾는다.
//5. 요소를 곱한다.
//6. 리턴한다.
