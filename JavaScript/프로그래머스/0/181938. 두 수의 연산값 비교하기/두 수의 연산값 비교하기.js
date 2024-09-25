const solution = (a, b) => {
 
    const ab = Number(String(a) + String(b));
    
    const product = 2 * a * b;
    

    return ab >= product ? ab : product;
};


