import React, { Component } from 'react';

class Login extends Component {

    state = { users: [], appName: 'AulApp' };

    render() {
        return (
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <h2 class="ui teal image header">
                        <div class="content">
                            Administración - {this.state.appName}
                        </div>
                    </h2>
                    <form class="ui large form">
                        <div class="ui stacked segment">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="email" placeholder="Usuario" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="password" name="password" placeholder="Contraseña" />
                                </div>
                            </div>
                            <div class="ui fluid large teal submit button">
                                Login
                            </div>
                        </div>
                        <div class="ui error message"></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;