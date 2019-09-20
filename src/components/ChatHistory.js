import * as React from 'react';
export default class ChatHistory extends React.Component {

    render() {
        const { props } = this;
        return (
            <ul className="collection">
                {props.chatHistory.map((messageObj) => {
                    const messageDate = new Date(messageObj.When);
                    const messageDateTime = messageDate.toLocaleDateString() +
                        ' at ' + messageDate.toLocaleTimeString();
                    const isBot = messageObj.Who === `Bot #${this.props.botId}`;
                    const userORbot = isBot ? props.botId : props.userID;
                    return (
                        <li className="collection-item avatar" key={messageObj.When}>
                            <div className={!isBot && 'sender' || 'receiver'}>
                                <img src={`//robohash.org/${userORbot}?set=set2&bgset=bg2&size=70x70`} alt={messageObj.Who} className="circle" />
                                <span className="title">{messageObj.Who}</span>
                                <p>
                                    <i className="prefix mdi-action-alarm" />
                                    <span className="message-date">{messageDateTime}</span>
                                    <br />
                                    <span>{messageObj.What}</span>
                                </p>
                            </div>
                        </li>
                    );
                })
                }

            </ul>);;
    }
}