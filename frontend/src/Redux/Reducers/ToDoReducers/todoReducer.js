const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TODO_ITEMS":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO_ITEMS":
      const newList = state.list.filter(
        (elements) => elements.id !== action.payload.id
      );
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TODO_ITEMS":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
