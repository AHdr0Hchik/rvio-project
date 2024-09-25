import React from 'react';

function Header(props) {
    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close();
    }
    return (
        <div className={'header'}>
           <Button onClick={onClose}>Закрыть</Button> 
           <span className={'username'}>
            {tg.initDataUnsage?.user?.username}
           </span>
        </div>
    );
}

export default Header;