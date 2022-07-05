import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove, move } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));

  const [onChangeInput, onInsert, onToggle, onRemove, onMove] = useActions(
    [changeInput, insert, toggle, remove, move],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
	  onMove={onMove}
    />
  );
};

export default React.memo(TodosContainer);