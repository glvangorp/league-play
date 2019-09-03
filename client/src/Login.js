import React from 'react';
import './Login.css';

/* Material UI */
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            toDashboard: false
        }
    }

    loginClickHandler = (event) => {
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        };
        
        console.log("logging in: ", payload);
        this.props.history.push('/dashboard');
    }

    render (props) {
        return (

            <div className="login-component-wrapper">
                <div className="login-background"></div>
                <div className="login-form-wrapper">
                    <div className="login-form">
                        <div className="header" style={ {color: this.props.muiTheme.palette.primary1Color} } >League Play</div>
                        <TextField fullWidth={true} floatingLabelText="Username" onChange= { (event, newValue) => this.setState({ username: newValue })}/>
                        <br />
                        <TextField fullWidth={true} floatingLabelText="Password" type="password" onChange= {(event, newValue) => this.setState({ password: newValue })}/>
                        <br />
                        <div className="sign-in-btn">
                            <RaisedButton primary={true} fullWidth={true} label="Sign In" onClick={(event) => this.loginClickHandler(event)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   

export default muiThemeable()(Login);