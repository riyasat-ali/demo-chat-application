import React from 'react';
import { connect } from 'react-redux';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import { setCurrentUserID, addMessage } from '../actions';

function mapStateToProps(state) {
  return {
    chatHistory: state.app.get('messages').toJS(),
    userID: state.app.get('userID'),
    userName: state.app.get('userData'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    setUserID: (userID) => dispatch(setCurrentUserID(userID)),
  };
}
 class App extends React.Component {
  // static propTypes = {
  //   history: React.PropTypes.array,
  //   userID: React.PropTypes.number,
  //   addMessage: React.PropTypes.func,
  //   setUserID: React.PropTypes.func,
  // };
  state = {
    history: [],
  };

  componentDidMount() {
    const ID = Math.round(Math.random() * 1000000);
    this.props.setUserID(ID);
    if (!this.props.userName){
        this.props.history.push('/');
    }
  }


  sendMessage = (message) => {
    const socket = new WebSocket('ws://echo.websocket.org');
    const userMessage = JSON.stringify(message);
    socket.onopen =  () => {
      socket.send(userMessage);
      this.props.addMessage(message);
    };
    socket.onmessage = (event) => {
      const botMessage = JSON.parse(event.data);
      botMessage.Who = "Bot";
      this.props.addMessage(botMessage);
    };
  }

  render() {
    const { sendMessage, props } = this;
    return (
      <div>
        <div className="topBar">Logout</div>
        <ChatHistory history={props.chatHistory} {...this.props} />
        <ChatInput userID={props.userID} sendMessage={sendMessage} {...this.props} />
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)

