import React, { Component } from 'react'
import Rainbow from '../highOrderComponents/randomColor'
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state
        const check = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <div className="card-title" style={{fontWeight:700}}>{post.title}</div>
                            <p>{post.body}</p>
                        </div>
                    </div>)
            })
        ) : (
                <div className="center">No post yet here</div>
            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {check}
            </div>
        )
    }
}

export default Rainbow(Home)