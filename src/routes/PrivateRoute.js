import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//import Layout from '../components/common/Layout';

export const PrivateRoute = ({
  isAuthenticated,
  layout_type : Layout,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      true ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
          <Redirect to="/login" />
        )
    )} />
  );

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

//export default connect(mapStateToProps)(PrivateRoute);

export default PrivateRoute;