import { useEffect, useState, useEFfect } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Footer from './components/Footer.jsx'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";

import { FaEdit } from "react-icons/fa";
function App() {






   
  



  const [todo, settodo] = useState(""); //todos actual
  const [todos, settodos] = useState([]); //array of todos
  const savetols = (params) => { localStorage.setItem("todos", JSON.stringify(todos)) };
  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));

      settodos(todos) //i will have to keep updating it.
    }
  }, [])



  const Adding = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo(" ")
    console.log(todos);
    savetols();

  }
  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id != id;
    }); //new array it will render the new state that is line through
    settodos(newTodos);
    savetols();

  }


  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id != id;
    }); //new array it will render the new state that is line through
    settodos(newTodos);
    savetols();
  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id; //here we get the index
    })
    let newTodos = [...todos]; //new array it will render the new state that is line through
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
    savetols();
  }

  const handleChange = (e) => {
    settodo(e.target.value);  //it helps in changing the input 
  }
  return <>

    <Navbar />
   




    <div  className="flex flex-col container mx-auto min-h-[70vh] text-white  my-20 p-4  rounded-lg items-center justify-center shadow-2xl  bg-purple-500  font-Times New Roman">
      <div className="addtodo text-center  gap-4">
        <h2 className="text-white font-bold text-2xl my-4" >Add a Todo</h2>
        <input onChange={handleChange} value={todo} className="bg-white h-12 text-black w-200 mx-4 rounded-lg shadow-lg" placeholder="enter" type="text" />
        <button id="add" disabled={todo.length < 2} className="bg-gray-500 py-1 rounded-md p-2 disabled:bg-violet-200 hover:bg-gray-800 mx-1 shadow-lg" onClick={Adding}>Add</button>
      </div>


<div className="w-1/2 h-[2px] mt-7 opacity-20 bg-black  mx-auto"></div>



      <h2 className="text-xl font-bold  mt-10">Your Tasks </h2>
      <div className="todos">
        {todos.length == 0 && <div>No Tasks to display</div>}
        {todos.map(items => {

          return <div key={items.id} className="todo flex justify-between gap-2 mt-5">
            <input name={items.id} onChange={handleCheckBox} type="checkbox" checked={items.isCompleted} />
            <div className={items.isCompleted ? "line-through mr-7" : " mr-7"}>{items.todo}</div>
            <div className="buttons gap-4">
              <button onClick={(e) => { handleEdit(e, items.id) }} className='bg-gray-500 py-1 rounded-md p-2  hover:bg-gray-800 mx-1 '><FaEdit /></button>
              <button onClick={(e) => { handleDelete(e, items.id) }} className="bg-gray-500 py-1 rounded-md p-2  hover:bg-gray-800 mx-1">      <MdDelete /></button>
           </div>
          </div>
        })}
      </div>
    </div>
    <Footer />
  </>
}
export default App
