import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./queryOrPush.css";

class queryOrPush extends React.Component {
  render() {
    return (
      <div class="qOp">
        <div class="query">
          <Link to="/query">
            <Button renderAs="button">
              <span>補助金額查詢</span>
            </Button>
          </Link>
        </div>

        <div class="push">
          <Link to="/push">
            <Button renderAs="button">
              <span>Push</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default queryOrPush;
