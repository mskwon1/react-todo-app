import BaseTodoInput from '#modules/BaseTodoInput';
import { ChangeEvent, useCallback, useState } from 'react';
import useZustandTodo from './useZustandTodo';
import { v4 } from 'uuid';

const ZustandTodoInput = () => {
  const [input, setInput] = useState('');
  const addTodo = useZustandTodo((state) => state.addTodo);

  const handleInputChange = useCallback(function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value);
  }, []);

  const handleAdd = useCallback(
    function handleAdd() {
      addTodo({ id: v4(), title: input, isDone: false });
    },
    [input, addTodo]
  );

  return (
    <BaseTodoInput
      input={input}
      onInputChange={handleInputChange}
      onClickAdd={handleAdd}
    />
  );
};

export default ZustandTodoInput;
