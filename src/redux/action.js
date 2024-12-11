const addDataAction = (input) => {
    return {
        type: "ADDDATA",
        payload: input,
    };
};

const deleteItem = (i) => {
    return {
        type: "DELETEDATA",
        payload: i,
    };
};

const editDataAction = ({ i, item }) => {
    return {
        type: "EDITDATA",
        payload: { i, item }
    };
};

export { addDataAction, deleteItem, editDataAction };

