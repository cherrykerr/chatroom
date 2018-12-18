import * as React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';



class ChatPage extends React.Component {
  render() {
    return (
      <div className="chatroom">
        <ul id="messages"></ul>
        <div>
            <input id="m" autocomplete="off" /><button id="btn">Send</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatPage);
