// File: requests.jsx
// Date: 9/9/2020
// Note: Redux Action Creators for vote types
//................................................................................
import { VOTE_ANGULAR, VOTE_REACT, VOTE_VUE } from '../constants/action-types';

console.log('Mounting actions/requests.js...\n');

export const voteAngular = () => {
    return {
        type: VOTE_ANGULAR
    }
}

export const voteReact = () => {
    return {
        type: VOTE_REACT
    }
}

export const voteVue = () => {
    return {
        type: VOTE_VUE
    }
}

// eof
