// 피자 1판당 = 7조각
// 피자를 나눠먹을 사람의 수는 n
// 모든 사람들이 한조각 이상 먹기 위해 필요한 피자의 수는?

function solution(n){
    const result = Math.ceil(n/7);
    return result;
}