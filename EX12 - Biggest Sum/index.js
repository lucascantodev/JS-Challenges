/* Matrix I used. I used the same one as a user problem in Codewars */
const matrix = [
    [20, 20, 10, 10],
    [10, 20, 10, 10],
    [10, 20, 20, 20],
    [10, 10, 10, 20]
  ];
  
  /* Auxiliary matrix */
  let dp = [];
  
  /* Just to keep the code cleaner */
  const M = matrix.length;
  
  for (let i = 0; i < M; i++) {
    dp.push([]);
    
    /* Initializing the values of the first row and column equal to those of the matrix */
    dp[i][0] = matrix[i][0];
    dp[0][i] = matrix[0][i];
  }
  
  /* Filling in the dp matrix */
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < M; j++) {
      dp[i][j] = matrix[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  
  console.log(dp);