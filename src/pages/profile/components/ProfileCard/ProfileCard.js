import './ProfileCard.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import { Button, Col, Row } from 'antd';
import IconButton from '../../../../components/IconButton/IconButton';
import {BiEditAlt} from 'react-icons/bi';
import {BsTrashFill} from 'react-icons/bs';

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
                    <div className="ProfileCard__avatar">
                        <div className="ProfileCard__avatar_el">
                            <div className="ProfileCard__avatar_edit">
                                <IconButton
                                    color='#fff'
                                    icon={<BiEditAlt/>}
                                    />
                                <IconButton
                                    color='#fff'
                                    variant={'brown'}
                                    icon={<BsTrashFill/>}
                                    />
                            </div>
                            <Avatar
                            size='250px'
                            />
                        </div>
                        
                    </div>
                    <div className="ProfileCard__name">
                        Elom Nusk
                    </div>
                    <div className="ProfileCard__mail">
                        somemail@mail.com
                    </div>
                    <div className="ProfileCard__site">
                        <a href="#">www.mysite.com</a>
                    </div>
                    <div className="ProfileCard__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti soluta ducimus dolore molestias, optio facere nihil asperiores praesentium, alias inventore molestiae accusamus. Delectus dolores laudantium excepturi quae alias exercitationem.
                    </div>
                    <div className="ProfileCard__text_action">
                        
                    </div>
        </div>
    )
}

export default ProfileCard;