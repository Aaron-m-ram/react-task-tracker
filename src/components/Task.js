import{FaTimes} from 'react-icons/fa'

const Task = function({ task, onDelete, onToggle }){
    return(
        <div className ={`task ${task.reminder? "reminder": ''}`} onDoubleClick={function(id){return onToggle(task.id)}}>
            <h3> 
                {task.text}
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    onClick= {function(){onDelete(task.id)}}
                />
            </h3>
            <p> {task.day}</p>
        
        </div>
    )
}

export default Task

/* className ={`task ${task.reminder? "reminder": ''}`} */
/* 
    what this means is that it has the class name task but,
    if reminder is true within the array,
    then it will have the class name reminder
    this is what give it it greens button. if it not true
    it just stay as task only not task & reminder 


*/