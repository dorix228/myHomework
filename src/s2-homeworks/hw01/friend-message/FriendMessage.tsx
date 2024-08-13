import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type UserType = {
    avatar: string;
    name: string;
}

export type MessageType = {
    text: string;
    time: string;
}

export type FriendMessagetype = {
    id: number;
    user: UserType
    message: MessageType
}

export type IdPropsType= {
    message: FriendMessagetype
    }

const FriendMessage = (props: IdPropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={friendMessage0.user.avatar}
                    alt={`${friendMessage0.user.name}'s avatar`}
                    className={s.friendAvatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {friendMessage0.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {friendMessage0.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {friendMessage0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
