export const addItems = (data) => {
  return {
    type: "ADD_TODO_ITEMS",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteItems = (id) => {
  return {
    type: "DELETE_TODO_ITEMS",
    payload: {
      id
    }
  };
};
export const removeItems = () => {
  return {
    type: "REMOVE_TODO_ITEMS",
  };
};
