// 1
const puzzle = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
  
  console.log(puzzle(8, 4));

  //1.2
  const puzzle = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
  
  console.log(puzzle(6, 6));

  //2
  const task = (n) => {
    if (n % 2 == 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
  };
  console.log(task (5));
  console.log(task (4));

  
