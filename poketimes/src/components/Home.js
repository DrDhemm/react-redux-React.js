import React, { Component } from 'react'
import Rainbow from '../highOrderComponents/randomColor'
// import axios from 'axios' => using redux
import { Link } from 'react-router-dom'
import reactImg from './react.png'
import { connect } from 'react-redux'

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // } => using redux
    render() {
        // console.log(this.props);
        const { posts } = this.props
        const check = posts === undefined ?
            (
                < div className="center" > No such thing, bro < span role="img" aria-label="hourglass" >🙅‍♂️</span ></div >
            ) :
            (
                posts.length ?
                    (
                        posts.map(post => {
                            return (
                                <div className="post card" key={post.id} style={{ paddingLeft: '15rem', overflow: 'hidden' }}>
                                    <img src={reactImg} alt="react in pink" style={{ width: '20rem', position: 'absolute', left: '-100px' }} draggable='false' />
                                    <div className="card-content">
                                        <Link to={'/' + post.id}>
                                            <div className="card-title" style={{ fontWeight: 700, color: '#EE6E73' }}>{post.title}</div>
                                        </Link>
                                        <p>{post.body}</p>
                                    </div>
                                </div>)
                        })
                    ) :
                    (
                        <div className="center">No Data < span role="img" aria-label="nodata" >🚫</span ></div >)
            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {check}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Rainbow(Home))