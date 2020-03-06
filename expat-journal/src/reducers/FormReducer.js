import * as types from "../State/actionTypes";

const initialFormState = {
    message: "",
    location: "",
}

export function formReducer(state = initialFormState, action) {
    switch(action.type) {
        case types.INPUT_CHANGE:
            const {inputName, inputValue} = action.payload;
            console.log(action.payload)
            return {
                ...state,
                [inputName]: inputValue,
            };
        default:
            return state;
    }
}