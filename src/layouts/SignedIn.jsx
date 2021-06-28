import React from 'react'
import Favorite from "./Favorite";
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" size="mini" src="https://media-exp3.licdn.com/dms/image/C4D03AQE8n8PM_nk31g/profile-displayphoto-shrink_200_200/0/1571218237185?e=1628726400&v=beta&t=y-OHSiAo6kHfJoN9lqqC5zAIRTZq2AQJ7tkPoFJXGEI" />
                <Dropdown pointing="top right" text="Emre">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item  text="Favorilerim" icon="sign-out"><Favorite ></Favorite></Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                        
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
