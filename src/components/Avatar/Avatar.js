import './Avatar.scss';
import image from '../../assets/avatar.png';


const Avatar = ({
    active
}) => {

    return (
        <div className={"Avatar" + (active ? ' active ' : '')}>
            <img src={image} alt="" />
        </div>
    )
}

export default Avatar;