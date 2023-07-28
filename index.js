const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

const addTask = () => {
  rl.question('Ingrese el indicador de la tarea: ', (indicator) => {
    rl.question('Ingrese la descripción de la tarea: ', (description) => {
      tasks.push({ indicator, description, completed: false });
      console.log('Tarea añadida');
      mainMenu();
    });
  });
}

const removeTask = () => {
  rl.question('Ingrese el indicador de la tarea a eliminar: ', (indicator) => {
    tasks = tasks.filter(task => task.indicator !== indicator);
    console.log('Tarea eliminada');
    mainMenu();
  });
}

const completeTask = () => {
  rl.question('Ingrese el indicador de la tarea a completar: ', (indicator) => {
    const task = tasks.find(task => task.indicator === indicator);
    if (task) {
      task.completed = true;
      console.log('Tarea completada');
    } else {
      console.log('No se encontró la tarea');
    }
    mainMenu();
  });
}

const mainMenu = () => {
  console.log('\nLista de tareas:');
  tasks.forEach(task => {
    console.log(`- [${task.indicator}] ${task.description} (${task.completed ? 'Completada' : 'No completada'})`);
  });
  console.log('\nOpciones:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Salir');
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        mainMenu();
        break;
    }
  });
}

mainMenu();
