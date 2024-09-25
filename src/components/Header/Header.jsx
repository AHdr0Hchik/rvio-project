import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <img src={user?.photo_url} alt="" />
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
