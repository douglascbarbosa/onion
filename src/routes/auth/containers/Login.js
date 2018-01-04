import React from 'react'
import {Link} from 'react-router-dom'
import ICheck from '../../../components/forms/common/ICheck'
import {Glyphicon} from 'react-bootstrap'

export default class Login extends React.Component {
  render() {
    return (

        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Onion</b>PFT</a>

          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form action="../../index2.html" method="post">
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" />
                <Glyphicon className="form-control-feedback" glyph="lock" />
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <ICheck
                      checkboxClass="icheckbox_square-blue"
                      increaseArea="20%"
                      label=" Remember Me"
                    />                    
                  </div>
                </div>
                <div className="col-xs-4">

                  <Link className="btn btn-primary btn-block btn-flat" to='/dashboard'>Sign In</Link>
                  {/*<button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>*/}
                </div>
              </div>
            </form>

            <a href="#">I forgot my password</a><br/>
            <a href="register.html" className="text-center">Register a new membership</a>

          </div>
        </div>

    )
  }
}

