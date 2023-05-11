import produce from "immer"

export function handleItemChange(field, value, setItem) {
    setItem(oldState => {
      const next = produce(oldState, draft => {
        draft[field] = value;
      });
      return next;
    });
  }