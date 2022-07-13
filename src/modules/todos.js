import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함
const MOVE = 'todos/MOVE'; // todo 를 제거함
const CHANGE_DATE = 'todos/CHANGE_DATE'; // 

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const changeDate = createAction(CHANGE_DATE, date => date);

let mode_index=0;
let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.
const date=new Date();



export const insert = createAction(INSERT, (text,time) => ({
  id: id++,
  text,
  done: false,
  mode_index:0,
  mode:mode[mode_index].mode,
  time,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);
export const move = createAction(MOVE, id => id);


const mode = [
	{
      id: 1,
      mode: 'IceBox',
    },
    {
      id: 2,
      mode: 'Emergency',
    },
    {
      id: 3,
      mode: 'InProgress',
    },
	{
      id: 4,
      mode: 'Testing',
    },
	{
      id: 5,
      mode: 'Complete',
    }
  ];

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
	  mode_index:1,
	  mode:mode[mode_index].mode,
	  time:date
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
	  mode_index:0,
	  mode:mode[mode_index].mode,
	  time:date
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [CHANGE_DATE]: (state, { payload: time }) =>
      produce(state, draft => {
        draft.time = time;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
	[MOVE]:(state,{payload:id})=>
	  produce(state,draft=>{
        const index = draft.todos.find(todo => todo.id === id);
  		if (index.mode_index === 4){
    		index.mode_index=0;

  		} else {
  		    index.mode_index=index.mode_index+1;

		}
	    index.mode=mode[index.mode_index].mode;
		 
	  }),
  },
  initialState,
);

export default todos;