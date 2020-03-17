// This is UI Component == stateless and only use functional function
import React from 'react';

const Name = ({ data, deleteData }) => {   // use destructure inside parameter and no need render function
    const userData = data.map(data => {
        return data/*.role === 'rpl'*/ ? ( 
            <div className="Name" key={data.id}>
                <h1>{data.name}</h1>
                <p>{data.role}</p>
                <button onClick={() => {deleteData(data.id)}}>Delete {data.name}</button>
            </div>
        ) : null
    })
    return (
        <div className="name-list">
            {userData}
        </div>
    )
}

export default Name;