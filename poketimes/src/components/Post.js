import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        let id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })

            }).catch(err => {
                console.log(err);
            })

    }

    render() {
        const check = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p className="center">{this.state.post.body}</p>
            </div>
        ) : (
                <div className="center">Loading post <span role="img" aria-label="hourglass">⏳</span></div>
            )
        return (
            <div className="container">
                {check}
            </div>
        )
    }
}

export default Post