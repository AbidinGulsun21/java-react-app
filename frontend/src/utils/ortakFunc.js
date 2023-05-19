import produce from "immer"

export function handleItemChange(field, value, setItem) {
    setItem(oldState => {
      const next = produce(oldState, draft => {
        draft[field] = value;
      });
      return next;
    });
  }


 export const getErrorMessage = (errors, fieldName) => {
    const error = errors?.find((e) => e?.field === fieldName);
    return error ? error.defaultMessage : '';
};
