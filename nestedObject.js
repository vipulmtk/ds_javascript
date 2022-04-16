//  Can you get the last 3 values?  [f, g, h]
const obj = {
    data: 'a',
    next: {
      data: 'b',
      next: {
        data: 'c',
        next: {
          data: 'd',
          next: {
            data: 'e',
            next: {
              data: 'f',
              next: {
                data: 'g',
                next: {
                  data: 'h',
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  };

    // 1st logic
const lastThree = (obj) => {
 
    const result = [];
    let current = obj
    
    while(current){
      result.push(current.data);
      current = current.next
    }
      return result.splice(-3)
  
  }

  // little bit modified logic
const lastThree2 = (obj) => {
 
  const result = [];
  let current = obj
  
  while(current){
    if(result.length>2){
      result.shift();
    }
    result.push(current.data);
    current = current.next
  }
	return result.splice(-3)

}

// Fully modified performase 

const lastThree3 = (obj) => {
    const result = [];
    let current = obj;
    while(current.next.next.next){
    if(result.length > 2){
        result.shift();
    } 
    result.push(current.next.next.next.data);
    current = current.next;
    }
    return result;
    }
    
console.log(lastThree(obj))
