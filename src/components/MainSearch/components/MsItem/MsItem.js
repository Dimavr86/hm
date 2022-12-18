import './MsItem.scss';

const MsItem = ({name, image}) => {
    return (
        <div className="MsItem">
            <div className="MsItem__image">
                <img src={image} alt="" />
            </div>
            <div className="MsItem__name">
                {name}
            </div>
        </div>
    )
}

export default MsItem;