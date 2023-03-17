let todoList = [];
while (true) {
  // ADDING TO THE LIST
  let action = prompt(
    `What would you like to do? (create, read, update, delete, exit)`
  );
  if (action === `create`) {
    let task = prompt(`Enter a task`);
    todoList.push(task);
    console.log(`Task "${task}" successfully added!`);
    // READING LIST ITEMS
  } else if (action === `read`) {
    console.log(`Items on your list are:`);
    todoList.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    // EDITING LIST ITEMS
  } else if (action === `update`) {
    let newTask = prompt(`What task would you like to replace?`);
    index = todoList.indexOf(newTask);
    replace = prompt(`What would you like to replace "${newTask}" with?`);
    todoList.splice(index, 1, replace);
    console.log(todoList);
    // DELETING A LIST ITEM
  } else if (action === "delete") {
    let ask = prompt(`What would you like to delete from the list?`);
    index2 = todoList.indexOf(ask);
    todoList.splice(index2, 1);
    console.log(todoList);
    // EXITING THE TODO LIST
  } else if (action === "exit") {
    console.log("bye... keep being productive!");
    break;
    // INVALID STRINGS
  } else {
    console.log("Invalid action.");
  }
}
