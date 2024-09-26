
const solution = (num, n) => {
    let answer = [0, 1];  
    if (num % n === 0) {
        return answer[1];  
    } else {
        return answer[0];  
    }
}