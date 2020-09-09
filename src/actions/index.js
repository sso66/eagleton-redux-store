
console.log('Mounting actions.js...\n');

export const voteAngular = () => {
    return {
        type: 'VOTE_ANGULAR'
    }
}

export const voteReact = () => {
    return {
        type: 'VOTE_REACT'
    }
}

export const voteVue = () => {
    return {
        type: 'VOTE_VUE'
    }
}