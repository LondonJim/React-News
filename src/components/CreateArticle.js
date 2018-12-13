import React, { Component } from 'react'
import axios from 'axios'

class CreateArticle extends Component {
  state = {
    title: '',
    content: ''
  }

  handleContent = (event) => {
    this.setState({content: event.target.value})
  }

  handleTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/articles', {
      article: { title: `${this.state.title}`, content: `${this.state.content}` }
    }).then(res => {
      this.props.history.push('/')
    })
  }

  render() {
    const createBox =
      <form onSubmit={this.handleSubmit}>
          <textarea autoFocus id="textarea1" placeholder="Title" className="materialize-textarea" value={this.state.title} onChange={this.handleTitle} />
          <textarea id="textarea2" placeholder="Write article here" className="materialize-textarea" style={{height: '300px'}} value={this.state.content} onChange={this.handleContent} />
          <input className="btn grey" type="submit" value="Submit" />
      </form>

    return (
      <div className="container home">
        <h4 className="center">Create Article</h4>
        {createBox}
      </div>
    )
  }
}

export default CreateArticle
