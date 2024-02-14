import BaseTodoEditItem from '#modules/BaseTodoEditItem';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoEditItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [input, setInput] = useState(todo.title);

  const handleInputChange = useCallback(function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value);
  }, []);

  const { updateTodo } = useRecoilTodoMutations();

  const handleClickDone = useCallback(
    function handleClickDone() {
      updateTodo({ ...todo, title: input });
    },
    [input, updateTodo, todo]
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <BaseTodoEditItem
      ref={inputRef}
      input={input}
      onChangeInput={handleInputChange}
      onClickDone={handleClickDone}
    />
  );
};

export default RecoilTodoEditItem;
