const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [
      ...state.people,
      { id: new Date().getTime().toString(), name: action.payload },
    ];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const removePerson = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: removePerson,
      isModalOpen: true,
      modalContent: "Item removed",
    };
  }
  throw new Error("no matching action type");
};

export default reducer;
