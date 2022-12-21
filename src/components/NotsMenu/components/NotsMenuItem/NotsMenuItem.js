import './NotsMenuItem.scss';


const NotsMenuItem = ({icon, date, text, openNots}) => {
    return (
        <div className="NotsMenuItem" onClick={openNots}>
            <div className="NotsMenuItem__icon">
                {icon}
            </div>
            <div className="NotsMenuItem__body">
                <div className="NotsMenuItem__body_text">
                    {text}
                </div>
                <div className="NotsMenuItem__body_date">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default NotsMenuItem;