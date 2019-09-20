import * as React from 'react';

export default class ChatInput extends React.Component {
    state = {
        history : [],
    }

    componentDidMount() {
        this.refs.txtMessage.focus();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const message = this.refs.txtMessage.value;
        if (message.length === 0) {
            return;
        }
        const messageObj = {
            Who: `${this.props.userName||'Bot'} #${this.props.userID}`,
            What: message,
            When: new Date().valueOf(),
        };
        const {history} = this.state;
        this.setState({history:history});
        this.props.sendMessage(messageObj);
        this.refs.txtMessage.value = '';
        this.refs.txtMessage.focus();
    };
    render() {
        const { props, onSubmit } = this;
        const imgURL = `//robohash.org/${props.userID}?set=set2&bgset=bg2&size=70x70`;
        return (<footer className="teal">
            <form className="container" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="prefix mdi-communication-chat" />
                        <input ref="txtMessage" type="text" placeholder="Type your message" />
                        <span className="chip left">
                            <img src={imgURL} />
                            <span>{props.userName} #{props.userID}</span>
                        </span>
                    </div>
                    <div className="input-field col s2">
                        <button type="submit" className="waves-effect waves-light btn-floating btn-large">
                            <i className="mdi-content-send" />
                        </button>
                    </div>
                </div>
            </form>
        </footer>);
    }
}