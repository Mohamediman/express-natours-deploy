import React from 'react'

import SideBarSettings from './SidebarSettings';
import UserAccountSettings from './UserAccountSettings';
import PasswordChange from './PasswordChange';


const Account = () => {
    return (
        <main className="main">
            <div className="user-view">
                <SideBarSettings />

                <div className="user-view__content">
                    <UserAccountSettings />

                <div className="line">&nbsp;</div>
                <PasswordChange />
                </div>
            </div>
        </main>
    )
}

export default Account
