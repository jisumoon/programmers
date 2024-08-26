
function solution(n) {
    let pizzas = 1;
    while ((pizzas * 6) % n !== 0) {
        pizzas++;
    }
    return pizzas;
}
