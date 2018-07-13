const num = (num) => {
  let nums = []
  let result = []
  let final = []
  for(let i=0; i< num ; i++){
    nums.push(i+1)
    if(nums.length == num){
      nums.forEach((number, index) => {
        for (let i = 0; i < number; i++) {
          if (number % i === 0 && number !== i && i !== 1) {
            if (!result.includes(number)) {
              result.push(number)
              if (index === nums.length - 1) {
                result.forEach((current, index) => {
                  if (result[index + 1] - current !== 1) {
                    final.push(result[index] + 1)
                    if (index === result.length - 1) {
                      final.unshift(1, 2, 3)
                      
                      console.log(final[final.length-1])
                      // final.forEach((current, index) => {
                      //   console.log(current[])
                      // });
                    }
                  }
                })
              }
            }
          }
        }
      });  
    }
  }  
}
