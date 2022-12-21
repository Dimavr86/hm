import './NotsItem.scss';


const NotsItem = ({
    icon,
    text,
    date,
    read
}) => {
    return (
        <div className={"NotsItem" + (read ? ' read ' : '')}>
            <div className="NotsItem__body">
                <div className="NotsItem__body_text">
                    {text}
                </div>
                <div className="NotsItem__body_date">
                    {date}
                </div>
            </div>
        </div>  
    )
}

export default NotsItem;