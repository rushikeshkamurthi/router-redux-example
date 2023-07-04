const initialState = 0 ;

const CouterReducer = (state = initialState , action) => {
switch (action.type) {
    case "ICNREMENT" : return state+1;

    case "DECREMENT" : return state-1;
    
    default : return state;
}
}

export default CouterReducer;