import React from 'react';
import {MdAdd,MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline}  from 'react-icons/md'
import { AiOutlineDelete,AiOutlineRight} from 'react-icons/ai'
import './TodoTemplate.scss';
import './TodoInsert.scss';
import cn from 'classnames';

const TodoItem = ({ todo, onToggle, onRemove,onMove }) => {
   const {checked}=todo.done;
  return (
    <div className="TodoListItem">
      <div
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
		className={cn('checkbox', {checked})}
      >
		{ todo.done ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
        <div className="text">{todo.text}</div>
	</div>
		  <button className="remove" onClick={() => onRemove(todo.id)}><AiOutlineDelete/></button>
	  <button onClick={() => onMove(todo.id)}><AiOutlineRight/></button>
		  <br/>
	    <div className="text">{todo.mode}</div>

	 </div>
  );
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
  onMove,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(''); // 등록 후 인풋 초기화
  };
  const onChange = e => onChangeInput(e.target.value);
  return (

    <div className="TodoTemplate">
	<div className="app-title">
		Scrum
	 </div>
	<form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit"><MdAdd/></button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
			onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;