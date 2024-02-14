import BaseTodoInput from '#modules/BaseTodoInput';
import { ChangeEvent, useCallback, useState } from 'react';
import { v4 } from 'uuid';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useRecoilTodoMutations();

  const handleInputChange = useCallback(function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value);
  }, []);

  const handleAdd = useCallback(
    function handleAdd() {
      addTodo({ id: v4(), title: input, isDone: false });
      setInput('');
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

export default RecoilTodoInput;
