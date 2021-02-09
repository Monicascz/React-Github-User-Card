import React from 'react'
import axios from 'axios'

class App extends React.Component{
  state = {
    user: [],
    userText: '',
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/monicascz')
    .then((resp)=>{
      //resp.data
      this.setState({
        user: resp.data
      })
    })
    .catch((err)=>{
    console.log(err)
    })
  }

  handleChange = (evt) => {
    this.setState({
      userText: evt.target.value
    })
  }



  render(){
    console.log(this.state.user)
    return(
      <div>
        <h1> Find your Github Usercard:</h1>
        <form>
          <input value={this.state.userText} onChange={this.handleChange}/>
        </form>
        <div className="card">
          <img src={this.state.user.avatar_url} alt={this.state.user.name} /> 
          <div className="card-info">
            <h3 className='name'>{this.state.user.name}</h3>
            <p className='username'> {this.state.user.login}</p>
            <p> Location: {this.state.user.location} </p>
            <p> Profile:  
              <a href={this.state.user.html_url}>{this.state.user.html_url}</a>
            </p>
            <p>Followers: {this.state.user.followers}</p>
            <p>Following: {this.state.user.following}</p>
            <p>Bio: {this.state.user.bio}</p>
          </div> 
        </div>
      </div>
    )
  }
}
export default App;