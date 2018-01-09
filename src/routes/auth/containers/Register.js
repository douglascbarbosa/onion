import React from 'react'
import {Link} from 'react-router-dom'
import ICheck from '../../../components/forms/common/ICheck'
import {Glyphicon} from 'react-bootstrap'

export default class Register extends React.Component {
  render() {
    return (


      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Onion</b>PFT</a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>

          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" placeholder="Full name" />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password" />
              <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <ICheck
                    checkboxClass="icheckbox_square-blue"
                    increaseArea="20%"
                    label=" I agree to the <a href='#'>terms</a>"
                  />                    

                </div>
              </div>

              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>

            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
              Google+</a>
          </div>

          <Link className="text-center" to="login"> I already have a membership</Link>
        </div>
      </div>

    )
  }
}

