import React, { Component } from 'react'
import Rainbow from '../highOrderComponents/randomColor'
import axios from 'axios'
import { Link } from 'react-router-dom'
import reactImg from './react.png'

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
                    <div className="post card" key={post.id} style={{paddingLeft:'10rem', overflow:'hidden'}}>
                        <img src={reactImg} alt="react in pink" style={{width:'20rem', position:'absolute', left:'-100px'}} draggable='false'/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <div className="card-title" style={{ fontWeight: 700, color:'#EE6E73' }}>{post.title}</div>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>)
            })
        ) : (
                <div className="center">Loading post <span role="img" aria-label="hourglass">⏳</span></div>
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