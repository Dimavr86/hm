import './Navbar.scss';
import {BsBellFill, BsSearch, BsPlusLg } from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import Avatar from '../Avatar/Avatar';
import IconButton from '../IconButton/IconButton';
import { Dropdown } from 'antd';
import { useState, useEffect } from 'react';
import {BsHeartFill, BsBookmarkFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Navbar = ({
    toggleSearch,
    search
}) => {
    const [profMenu, setProfMenu] = useState(false)
    const nav = useNavigate();

    

    return (
        <div className="Navbar">
            <ul className="Navbar__list">
                <li className="Navbar__item">
                    <IconButton
                        icon={<AiFillHome/>}
                        size={'24px'}
                        variant={'transparent'}
                        onClick={() => nav('/')}
                        />
                </li>
                <li className="Navbar__item">
                    <IconButton
                        onClick={() => toggleSearch(!search)}
                        icon={<BsSearch/>}
                        size={'24px'}
                        variant={'transparent'}
                        />
                </li>
                <li className="Navbar__item">
                    <IconButton
                        icon={<BsPlusLg/>}
                        size={'24px'}
                        variant={'transparent'}
                        />
                </li>
                <li className="Navbar__item">
                    <IconButton
                        icon={<BsBellFill/>}
                        badge={10}
                        size={'24px'}
                        variant={'transparent'}
                        />
                </li>
                <li className={"Navbar__item Navbar__item-avatar" + (profMenu ? ' active ' : '')}>
                    {/* <div className="Navbar__item-avatar_menu">
                        <div className="Navbar__item-avatar_menu_item">
                            <IconButton
                                icon={<BsHeartFill/>}
                                variant={'white'}
                                onClick={() => nav('/collection/favourites')}
                                />
                        </div>
                        <div className="Navbar__item-avatar_menu_item">
                            <IconButton
                                icon={<BsBookmarkFill/>}
                                variant={'white'}
                                onClick={() => nav('/collection/saved')}
                                />
                        </div>
                        <div className="Navbar__item-avatar_menu_item">
                            <IconButton
                                onClick={() => nav('/profile')}
                                icon={<FaUserAlt/>}
                                variant={'white'}
                                />
                        </div>
                    </div> */}
                    <Dropdown
                        placement={'top'}
                        dropdownRender={
                            () => {
                                return (
                                    <div className="Navbar__item-avatar_menu ant-dropdown">
                                <div className="Navbar__item-avatar_menu_item">
                                    <IconButton
                                        icon={<BsHeartFill/>}
                                        variant={'white'}
                                        onClick={() => {
                                            nav('/collection/favourites')
                                            setProfMenu(false)
                                        }}
                                        />
                                </div>
                                <div className="Navbar__item-avatar_menu_item">
                                    <IconButton
                                        icon={<BsBookmarkFill/>}
                                        variant={'white'}
                                        onClick={() => {
                                            nav('/collection/saved')
                                            setProfMenu(false)
                                        }}
                                        />
                                </div>
                                <div className="Navbar__item-avatar_menu_item">
                                    <IconButton
                                        onClick={() => {
                                            nav('/profile')
                                            setProfMenu(false)
                                        }}
                                        icon={<FaUserAlt/>}
                                        variant={'white'}
                                        />
                                </div>
                            </div>
                                )
                            }
                        }
                        open={profMenu}
                        onOpenChange={e => {
                            if(e) {
                                setProfMenu(true)
                            } else {
                                setProfMenu(false)
                            }
                        }}
                        trigger={['click']}
                        >
                        <div onClick={() => setProfMenu(!profMenu)} className="Navbar__item-avatar_el">
                            <Avatar
                                active={profMenu}
                                />
                        </div>
                    </Dropdown>
                    
                </li>
            </ul>
        </div>
    )
}

export default Navbar;