import React,{useState} from 'react';
import {MdAdd,MdCheckBoxOutlineBlank,MdCheckBox}  from 'react-icons/md'
import { AiOutlineDelete,AiOutlineRight} from 'react-icons/ai'
import './TodoTemplate.scss';
import './TodoInsert.scss';
import './TodoListItem.scss';
import './TodoList.scss';
import cn from 'classnames';
import './Table.css';
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";


const TodoItem = ({ todo,  onToggle, onRemove,onMove }) => {

  return (
    <div className="TodoListItem">
      <div
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
		className={cn('checkbox', todo.done)}
      >
			{ todo.done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
        	<div style={{textDecoration:todo.done?'line-through':'none'}}>
				{todo.text}    {todo.mode} 
		  	<p>마감 시한 : {todo.time.getFullYear()}/ {todo.time.getMonth() + 1} / {todo.time.getDate()}</p>
				
			</div>
		</div>
	<button className="remove" onClick={() => onRemove(todo.id)}><AiOutlineDelete/></button>
	<button onClick={() => onMove(todo.id)}><AiOutlineRight/></button>
	  </div>



  );
};

const Todos = ({
  input,
  time,// 인풋에 입력되는 텍스트
  todos,// 할 일 목록이 들어있는 객체
  onChangeInput,
  onChangeDate,
  onInsert,
  onToggle,
  onRemove,
  onMove,

}) => {

  const onSubmit = e => {
    e.preventDefault();
    onInsert(input,time=date);
    onChangeInput(''); // 등록 후 인풋 초기화
  };
  const onChange = e => onChangeInput(e.target.value);
	
  const onTime = date => {
	  onChangeDate(date);
	  setDate(date);
  };
  const [date,setDate]=useState(new Date());

  return (

    <div className="TodoTemplate">
		<div className="app-title">
		Scrum
	 	</div>
		  
		<div>
			<form onSubmit={onSubmit} className="TodoInsert">
        		<input placeholder="할일 입력" value={input} onChange={onChange} />
				<DatePicker selected={date} value={date} onChange={(date)=>onTime(date)} ></DatePicker>
				<button type="submit"><MdAdd/></button>
      		</form>

      	</div>
		  

		  	  
		<div className="TodoList">
		<div>
			<table>
      			<thead>
        			<tr>
         	 			<th>ice box</th><th>emergency</th><th>in progress</th><th>testing</th><th>complete</th>
        			</tr>
      			</thead>
          <td>
        	 {todos.filter(todo => todo.mode.includes('IceBox')).map(todo => (
          		<TodoItem
            	todo={todo}
            	key={todo.id}
            	onToggle={onToggle}
            	onRemove={onRemove}
				onMove={onMove}
          	/>
        ))}
		</td>
		<td>
        	 {todos.filter(todo => todo.mode.includes('Emergency')).map(todo => (
          		<TodoItem
            	todo={todo}
            	key={todo.id}
            	onToggle={onToggle}
            	onRemove={onRemove}
				onMove={onMove}
          	/>
        ))}
		</td>
		<td>
        	 {todos.filter(todo => todo.mode.includes('InProgress')).map(todo => (
          		<TodoItem
            	todo={todo}
            	key={todo.id}
            	onToggle={onToggle}
            	onRemove={onRemove}
				onMove={onMove}
          	/>
        ))}
		</td>
		<td>
        	 {todos.filter(todo => todo.mode.includes('Testing')).map(todo => (
          		<TodoItem
            	todo={todo}
            	key={todo.id}
            	onToggle={onToggle}
            	onRemove={onRemove}
				onMove={onMove}
          	/>
        ))}
		</td>
		<td>
        	 {todos.filter(todo => todo.mode.includes('Complete')).map(todo => (
          		<TodoItem
            	todo={todo}
            	key={todo.id}
            	onToggle={onToggle}
            	onRemove={onRemove}
				onMove={onMove}
          	/>
        ))}
		</td>

			</table>
		</div>
      </div>
    </div>
  );
};

export default Todos;