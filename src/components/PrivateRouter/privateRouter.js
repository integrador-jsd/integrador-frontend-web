import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login/login';
import SearcherUsersList from '../SearcherUsersList/SearcherUsersList';
import { verifyAuth } from '../../actions/userActions';

class PrivateRouter extends Component {

    componentDidMount() {
        this.props.verifyAuth();
    }

    render() {
        return (
            <BrowserRouter>
                {console.log('Holi')}
                {
                    this.props.isAuth
                        ?
                        <Switch>
                            <Route path="/" exact render={() => <Redirect to={{ pathname: '/users' }} />} />
                            <Route path="/users" exact component={SearcherUsersList} />
                        </Switch>
                        : <Route path="/" exact render={() => <Login />} />
                }
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { isAuth: state['user']['isAuth'] }
}

export default connect(mapStateToProps, { verifyAuth })(PrivateRouter);