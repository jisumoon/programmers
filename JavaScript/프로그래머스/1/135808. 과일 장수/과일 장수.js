const solution = (k, m, score) => {

  score.sort((a, b) => b - a);
  
  let maxProfit = 0;


  for (let i = 0; i <= score.length - m; i += m) {
    const minScoreInBox = score[i + m - 1]; 
    maxProfit += minScoreInBox * m; 
  }

  return maxProfit;
};
