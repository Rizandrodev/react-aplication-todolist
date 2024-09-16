import { useRef, useState } from "react";
import { Tasks } from "./components/tasks";
import Styles from './app.module.css'

const data=[];

export function App() {
  
  const inputRef=useRef(null)       
  const [tasks,setTasks]=useState(data);


  function handleAddTask(){
    const newTask={
      id:tasks.length+1,
      title:inputRef.current.value,
      completed:false
    }
    
    setTasks([...tasks,newTask])
    inputRef.current.value=''
    //console.log(inputRef.current.value)
  }


  function handlecompleteTAsk(id) {

  const taskIndex =tasks.findIndex(item=>item.id ===id)

  if (taskIndex === -1) {
    return;

  }

  const newTasks = [...tasks];
  newTasks[taskIndex].completed = true; // toggle completed state
  setTasks(newTasks);
}
      
  
  return (
    <main className={Styles.container}>
      <h1 className={Styles.titulo}>Todo App</h1>
      
      <div className={Styles.inputGroup}>
        <input className={Styles.input}  ref={inputRef} placeholder="Adicione tarefa" type="text" />
        <button className={Styles.button} onClick={handleAddTask} >Add</button>
      </div>
    <div className={Styles.tasks} >
      {tasks.length > 0 && tasks.map(item=>( 
        //<p key={item.id}> {item.id} . {item.title}</p>
        <Tasks key={item.id} task={item}  handlecompletedTAsk={handlecompleteTAsk}  />
      ))}
      {!tasks.length && <p>Tarefa ainda nao concluida...🙁</p>  }
      </div>   
    </main>
  )
}

 