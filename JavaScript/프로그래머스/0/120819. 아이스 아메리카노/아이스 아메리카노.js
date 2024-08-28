function solution (money) {

 const price = 5500;
 const drink = Math.floor(money/price);
 const result = money - (price*drink);
 const arr = [drink, result]
 
 return arr ;    

}