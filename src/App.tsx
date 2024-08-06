import { useState, FormEvent } from 'react'
import { Task } from './task'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'


function App() {

  const [newTast, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
     {
       id: "0",
       name: "Lavar o Carro !"
     },
     {
       id: "1",
       name: "Ir Treinar !"
     },
     {
       id: "2",
       name: "Pagar as Contas !"
     },
  ])


  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (newTast === "") return;

    const newItem = {
      id: `${tasks.length + 1}`,
      name: newTast
    }
    setTasks(allTasks => [...allTasks, newItem])
    setNewTask("")
  }

  function reorder<T>(List: T[], startIndex: number, endIndex: number) {
    const result = Array.from(List);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    
    return result;
  }


  function onDragEnd(result: any) {
    if(!result.destination){
      return;
    }

    const items = reorder(tasks, result.source.index, result.destination.index)
    setTasks(items)
  }

  return (
    <div className="w-full h-full flex flex-col items-center px-4 ">
      <h1 className="font-bold text-4xl text-white mb-4">Meu kanban</h1>


      <form className="w-full max-w-2xl mb-4 flex" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Digite o nome da tarefa..."
          className="flex-1 h-10 rounded-md px-2"
          value={newTast}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          type="submit"
          className="bg-[#27ae60] hover:bg-[#2ecc71] ml-4 rounded-md px-4 text-white font-medium"
        >
          Add
        </button>
      </form>
      <div className='flex gap-4'>
        <section className="bg-[#e1e1e1] p-3 rounded-md w-[300px] h-[400px]">          
          <div className='text-center text-3xl text-white mb-2 font-bold bg-slate-700 rounded-md'><span>BackLog</span></div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                  {(provided) => (
                    <article ref={provided.innerRef} {...provided.droppableProps}>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index}/>
                      ))}
                      {provided.placeholder}
                    </article>
                  )}
                </Droppable>
              </DragDropContext>                
        </section>
        <section className="bg-[#e1e1e1] p-3 rounded-md w-[300px] h-[400px]">          
          <div className='text-center text-3xl text-white mb-2 font-bold bg-slate-700 rounded-md'><span>Todo</span></div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                  {(provided) => (
                    <article ref={provided.innerRef} {...provided.droppableProps}>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index}/>
                      ))}
                      {provided.placeholder}
                    </article>
                  )}
                </Droppable>
              </DragDropContext>                
        </section>
        <section className="bg-[#e1e1e1] p-3 rounded-md w-[300px] h-[400px]">          
          <div className='text-center text-3xl text-white mb-2 font-bold bg-slate-700 rounded-md'><span>InProcess</span></div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                  {(provided) => (
                    <article ref={provided.innerRef} {...provided.droppableProps}>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index}/>
                      ))}
                      {provided.placeholder}
                    </article>
                  )}
                </Droppable>
              </DragDropContext>                
        </section>
        <section className="bg-[#e1e1e1] p-3 rounded-md w-[300px] h-[400px]">          
          <div className='text-center text-3xl text-white mb-2 font-bold bg-slate-700 rounded-md'><span>Done</span></div>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                  {(provided) => (
                    <article ref={provided.innerRef} {...provided.droppableProps}>
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index}/>
                      ))}
                      {provided.placeholder}
                    </article>
                  )}
                </Droppable>
              </DragDropContext>                
        </section>
      </div>  
    </div>
    
  )
}

export default App
