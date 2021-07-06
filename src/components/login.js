import React from "react"
import ProjectList from "../components/projects/projectList"
import { handleLogin, isLoggedIn } from "../services/auth"
class Login extends React.Component {
  state = {
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
    this.setState({
      password: ``,
    })
  }
  render() {
    if (isLoggedIn()) {
      return <ProjectList />
    }
    return (
      <div className="page-template project-content-body login">
        <h3>Please insert your password to know more</h3>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleUpdate}
          />
          <input className="submit-password primary" type="submit" value="Go" />
        </form>
      </div>
    )
  }
}
export default Login
