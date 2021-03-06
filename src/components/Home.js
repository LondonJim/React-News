import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AnimalLogo from '../animalLogo.png'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('http://localhost:3000/articles')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={AnimalLogo} alt="animal logo"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title blue-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Recent Posts</h4>
        {postList}
      </div>
    )
  }
}

export default Home
