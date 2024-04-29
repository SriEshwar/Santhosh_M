function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  function customMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
  }
  

  const tasks = [
    { id: 1, title: "Complete project report", completed: false },
    { id: 2, title: "Prepare presentation slides", completed: true },
    { id: 3, title: "Review meeting agenda", completed: false },
  ];
  
  
  console.log("Tasks:");
  customForEach(tasks, (task, index) => {
    console.log(`${index + 1}. [${task.completed ? '✓' : ' '}] ${task.title}`);
  });

  const taskTitles = customMap(tasks, (task) => {
    return task.title;
  });
  
  console.log("\nTask Titles:", taskTitles);
  