import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput,changeDate, insert, toggle, remove, move } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos, time } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
	time:todos.time,
  }));

  const [onChangeInput,onChangeDate ,onInsert, onToggle, onRemove, onMove] = useActions(
    [changeInput,changeDate, insert, toggle, remove, move],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
	  time={time}
      onChangeInput={onChangeInput}
	  onChangeDate={onChangeDate}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
	  onMove={onMove}
    />
  );
};

export default React.memo(TodosContainer);