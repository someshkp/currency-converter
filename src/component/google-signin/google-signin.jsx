import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class GoogleSignin extends Component {

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div >
                <GoogleLogin
                    clientId="766806756463-vt5374664o26fdo4qtu82etus3eljg3g.apps.googleusercontent.com"
                    buttonText="Google Sign In"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default GoogleSignin;