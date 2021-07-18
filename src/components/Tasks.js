import Task from "./Task"

const Tasks = function({tasks, onDelete, onToggle}){
    return(
        <>
            {tasks.map(function(task){
                return(
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
                )
            })}
        </>
    )
}

export default Tasks