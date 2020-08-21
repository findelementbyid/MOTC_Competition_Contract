import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class queryOrPush extends React.Component {

    render() {
        let styles = {
            position: "absolute",
            top: "50%",
            left: "50%",
        }

        return(
            <div style={styles}>
            <Link to="/query" >
                <Button renderAs="button">
                    <span>Query</span>
                </Button>
            </Link>
            <Link to="/push">
                <Button renderAs="button">
                    <span>Push</span>
                </Button>
            </Link>
            </div>
        );
    }
}

export default queryOrPush;