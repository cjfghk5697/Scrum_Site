import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove,onMove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
	  <span>:</span>
	  <span>
	   {todo.mode}
	  </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
	  <button onClick={() => onMove(todo.id)}>옮기기</button>
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
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
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