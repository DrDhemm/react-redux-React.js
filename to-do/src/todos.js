import React from 'react'

const Todos = ({dataTodos, deleteTodos}) => {

    const todos = dataTodos.length ? (
        dataTodos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span style={{cursor:'pointer'}} onClick={() => {deleteTodos(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">
            You have no todos, noice
        </p>
    )
    return(
        <div className="todos collection">
            {todos}
        </div>
    )
}

export default Todos