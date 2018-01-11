import React from 'react'

export default class Account extends React.Component {
  render() {
    return (
        <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Quick Example</h3>
            </div>

            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" id="exampleInputFile" />

                  <p className="help-block">Example block-level help text here.</p>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Check me out
                  </label>
                </div>
              </div>

              <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>

    )
  }
}

