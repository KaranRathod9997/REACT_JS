const initialState = {
    items: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDDATA":
            return { ...state, items: [...state.items, action.payload] };
        case "DELETEDATA":
            const newArr = state.items.filter((_, index) => index !== action.payload);
            return { ...state, items: newArr };
        case "EDITDATA":
            const updatedItems = state.items.map((currentValue, index) =>
                index === action.payload.i ? action.payload.item : currentValue
            );
            return { ...state, items: updatedItems };
        default:
            return state;
    }
};

export default reducer;

