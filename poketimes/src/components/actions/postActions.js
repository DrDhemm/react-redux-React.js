export const deletePosts = (id) => {
    return{
        type: "DELETE_POST",
        id
    }
}