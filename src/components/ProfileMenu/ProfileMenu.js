import './ProfileMenu.scss';
import {BsHeartFill, BsBookmarkFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';

const ProfileMenu = () => {

    const nav = useNavigate()


    return (
        <div className="ProfileMenu">
            <ul className="ProfileMenu__list">
                <li onClick={() => nav('/profile')} className="ProfileMenu__item">
                    <span className="ProfileMenu__item_icon">
                        <FaUserAlt/>
                    </span>
                    <span className="ProfileMenu__item_text">Profile</span>
                    
                </li>
                <li onClick={() => nav('/collection/favourites')} className="ProfileMenu__item">
                    <span className="ProfileMenu__item_icon">
                        <BsHeartFill/>
                    </span>
                    <span className="ProfileMenu__item_text">Favourites</span>
                    
                </li>
                <li onClick={() => nav('/collection/saved')} className="ProfileMenu__item">
                    <span className="ProfileMenu__item_icon">
                        <BsBookmarkFill/>
                    </span>
                    <span className="ProfileMenu__item_text">Saved</span>
                    
                </li>
                <li className="ProfileMenu__item ProfileMenu__item-logout">
                    <span className="ProfileMenu__item_icon">
                        <FiLogOut/>
                    </span>
                    <span className="ProfileMenu__item_text">Log out</span>
                    
                </li>
            </ul>
        </div>
    )
}

export default ProfileMenu;