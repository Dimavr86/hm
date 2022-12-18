import './MsCard.scss';

const MsCard = ({image, name}) => {
    return (
        <div className="MsCard">
            <div className="MsCard__image">
                <img src={image} alt="" />
            </div>
            <div className="MsCard__name">
                {name}
            </div>
        </div>
    )
}

export default MsCard;