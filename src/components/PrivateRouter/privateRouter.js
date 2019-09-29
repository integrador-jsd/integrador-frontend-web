import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../Login/login';
import SearcherUsersList from '../SearcherUsersList/SearcherUsersList';
import { verifyAuth } from '../../actions/userActions';
import Section from '../Section/Section';
import Room from '../Section/Room/room';
import Home from '../Home/home';
import Request from '../Request/request';
// import CreateSection from '../Section/CreateSection/createSection';

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
                            <Route path="/" exact render={() => <Redirect to={{ pathname: '/home' }} />} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/users" exact component={SearcherUsersList} />
                            <Route path="/sections" exact component={Section} />
                            <Route path="/sections/:id" exact component={Room} />
                            <Route path="/requests" exact component={Request} />
                        </Switch>
                        : <Route path="/" render={() => <Login />} />
                }
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { isAuth: state['user']['isAuth'] }
}

export default connect(mapStateToProps, { verifyAuth })(PrivateRouter);