import React, { Component } from 'react'
// import axios from 'axios' => using redux
import { connect } from 'react-redux'
import { deletePosts } from '../components/actions/postActions'

class Post extends Component {
    // state = {
    //     post: []
    // }

    // componentDidMount() {
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })

    //         }).catch(err => {
    //             console.log(err);
    //         })

    // } => using redux
    handleClick = () => {
        this.props.deletePost(this.props.match.params.post_id)
        this.props.history.push("/")
    }

    render() {
        const check = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p className="center">{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete {this.props.post.title}</button>
                </div>
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

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePosts(id))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)