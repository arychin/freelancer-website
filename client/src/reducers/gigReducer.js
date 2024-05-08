// when you handle multiple states in a single fn -> useReducer  
// when 2 or more states change together it is better to use useReducer hook
export const INITIAL_STATE = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    title: "",
    cat: "",
    cover: "",
    images: [],
    desc: "",
    shortTitle: "",
    shortDesc: "",
    deliveryTime: 0,
    revisionNumber: 0,
    features: [],
    price: 0,
};

export const gigReducer = (state,action) => {
    switch(action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                // this is the syntax for dynamically setting object property name based on variables 
                [action.payload.name]: action.payload.value,
                // Square brackets [] are only necessary when you want to use a dynamic or computed property name, 
                // such as when the property name is stored in a variable or the result of an expression.
            }
        case "ADD_IMAGES":
            return {
                ...state,
                cover: action.payload.cover,
                images: action.payload.images,
            }
        case "ADD_FEATURE":
            return {
                ...state,
                // keep the previous features and add some new ones
                features: [...state.features, action.payload]
            }
        case "REMOVE_FEATURE":
            return {
                  ...state,
                  features: state.features.filter(
                    (feature) => feature !== action.payload
                  ),
                };
            
        default: return state;
    }
}