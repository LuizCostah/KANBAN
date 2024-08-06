import { Draggable } from "@hello-pangea/dnd";

interface TaskProps {
  task: {
    id: string;
    name: string;   
  };
  index: number;
}

export function Task({ task, index }: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="w-full bg-zinc-400 mb-2 last:mb-0 px-2 py-3 rounded border-[2px] border-zinc-400">
          <div  className="flex justify-between" >
            <span className="font-semibold">{task.name}</span>
            <img className="w-6 h-6 rounded-full" src="../public/marsh.png"/>
          </div>
          <div  className="flex justify-end">
            <span>data</span>
          </div>
        </div>
      )}
    </Draggable>
  );
}