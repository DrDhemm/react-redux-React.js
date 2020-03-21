// const initState = {
//     posts: [
//         { id: '1', title: 'Me', body: 'Anjay mabar' },
//         { id: '2', title: 'Mem', body: 'Anjay mabar' },
//         { id: '3', title: 'Meme', body: 'Anjay mabar' }
//     ]
// }

const initStateAnimal = {
    posts: [
        { id: '1', title: 'Meow', body: 'oh! a cat' },
        { id: '2', title: 'Moo', body: 'oh! a cow' },
        { id: '3', title: 'Wuff', body: 'oh! a dawg' }
    ]
}

const rootReducer = (state = initStateAnimal, action) => {
    if(action.type === "DELETE_POST"){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        })
        return{
            ...state,
            posts: newPosts
        }
    }
    
    return state
}

export default rootReducer