// File: index.jsx
// Date: 9/9/2020
// Note: Redux reducers
console.log('Mounting reducers.js...\n');

const initialState = {
    angular: 0,
    react: 0,
    vue: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            console.log("Your choice is Angular!");
            return Object.assign({}, state, {
                angular: state.angular + 1
            })

            case 'VOTE_REACT':
                console.log("Your choice is React!");
                return Object.assign({}, state, {
                    react: state.react + 1
            })

            case 'VOTE_VUE':
                console.log("Your choice is Vue!");
                return Object.assign({}, state, {
                    vue: state.vue + 1
            })
            
            default:
                return state;
        }
}