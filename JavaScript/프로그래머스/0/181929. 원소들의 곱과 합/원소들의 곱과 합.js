const solution = (num_list) => {
    let answerA = 1;
    let answerB = 0; 

    for (let i = 0; i < num_list.length; i++) {
        answerA *= num_list[i]; 
        answerB += num_list[i]; 
    }


    return answerA < answerB ** 2 ? 1 : 0;
};