import './ReportItem.scss';


const ReportItem = ({
    active,
    id,
    onSelect,
    label
}) => {
    return (
        <div onClick={() => onSelect(id)} className={"ReportItem" + (active ? ' active ' : '')}>
            <div className="ReportItem__label">
                {label}
            </div>
        </div>
    )
}

export default ReportItem;