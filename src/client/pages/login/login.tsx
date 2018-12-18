import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import { Button } from 'antd';


class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <Button>进入聊天室</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);