import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    id: null
  }

  componentDidMount(){
    let id = this.props.match.params.post_id
    axios.get('http://localhost:3000/articles/' + id)
      .then(res => {
        this.setState ({
          post: res.data
        })
      })
  }

  handleClick = () => {
    let id = this.props.match.params.post_id
    window.confirm("Are you sure?") ? (
    axios.delete('http://localhost:3000/articles/' + id)
      .then(res => {
        this.props.history.push('/')
      })
    ) : (
      window.alert("Cancelled")
    )
  }

  render() {

    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.content}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )

    return (
      <div className="container">
        { post }
        <button className="center btn grey" onClick={this.handleClick}>Delete</button>
      </div>
    )
  }

}

export default Post
