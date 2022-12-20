import './Avatar.scss';
import image from '../../assets/avatar.png';


const Avatar = ({
    active,
    size = '40px'
}) => {

    return (
        <div style={{width: size, height: size}} className={"Avatar" + (active ? ' active ' : '')}>
            <img src={image} alt="" />
        </div>
    )
}

export default Avatar;