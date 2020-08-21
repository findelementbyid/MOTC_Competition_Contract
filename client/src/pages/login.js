import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class login extends React.Component {

    render() {
        let styles = {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-100px",
            marginLeft: "-200px"
        }
        return(
            <div style={styles}>
                <h4>Account:
                    <input ref="account" style={{ width: 200, height: 20 }}></input>
                </h4>
                <h4>Password:
                    <input ref="password" style={{ width: 200, height: 20 }}></input>
                </h4>
                <Link to="/queryOrPush">
                    <Button renderAs="button">
                        <span>Login</span>
                    </Button>
                </Link>

            </div>
        );
    }
}

export default login;