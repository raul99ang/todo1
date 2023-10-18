import ListItem from "../components/listitem";

function Todo(){
    return (
       <div>
         <ul>
            <ListItem text="item 1" />
            <ListItem text="item 2" />
            <ListItem text="item 3" />
         </ul>
         
       </div>
    )
}
export default Todo;