import FormTask from "./FormTask";
import TableLists from "./TableTasks";


function TasksComponet() {
    return ( <>
     <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 ">
        < FormTask/>
        </div>
        <div className=" col-12 col-lg-8">
         <TableLists/>
        </div>
      </div>
     </div>
    </> );
}

export default TasksComponet;