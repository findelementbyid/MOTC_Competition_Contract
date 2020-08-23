import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./login.css";
class login extends React.Component {

    render() {
        const logstyle={
            color:"white",
            backgroundColor:"rgba(100, 130, 200, 0.5)",
            padding: "10px",
            fontfamily: "微軟正黑體",
            
        };
        return(
            <div class="begin">
                <h1 style={logstyle}>登入</h1>
                <div class="typein">
                <h3> 帳號 </h3>
                    <input type="account" ref="account" placeholder="請輸入"></input>
    
                <h3> 密碼 </h3>
                    <input type="password" ref="password" placeholder="請輸入" ></input>
                   
                <Link to="/queryOrPush">
                    <Button renderAs="button">
                        <span>Login</span>
                    </Button>
                </Link>

                </div>

            </div>
        );
    }
}

export default login;