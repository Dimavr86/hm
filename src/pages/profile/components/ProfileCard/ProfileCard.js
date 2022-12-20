import './ProfileCard.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import { Col, Row } from 'antd';

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard__avatar">
                        <Avatar
                            size='250px'
                            />
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
        </div>
    )
}

export default ProfileCard;