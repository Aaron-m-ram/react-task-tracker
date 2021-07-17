import Task from "./Task"

const Tasks = function({tasks, onDelete}){
    return(
        <>
            {tasks.map(function(task){
                return(
                <Task key={task.id} task={task} onDelete={onDelete}/>
                )
            })}
        </>
    )
}

export default Tasks