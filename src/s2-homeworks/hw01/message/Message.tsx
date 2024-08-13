import React from 'react'
import s from './Message.module.css'
import {message0} from "../HW1";


export type UserType = {
    avatar: string;
    name: string;
};


export type MessageContentType = {
    text: string;
    time: string;
};


export type MessageType = {
    id: number;
    user: UserType;
    message: MessageContentType;
};

export type MessagePropsType = {
    message: MessageType;
};


const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={message0.user.avatar}
                    alt={message0.user.name + "'s avatar"}
                    className={s.avatar}
                />


                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {message0.user.name}
                    </div>


                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                     {message0.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {message0.message.time}
            </div>
        </div>
    )
}

export default Message
