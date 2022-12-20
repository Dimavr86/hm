import './IconButton.scss';

const variants = {
    default: 'default',
    danger: 'danger',
    success: 'success',
    black: 'black',
    transparent: 'transparent',
    brown: 'brown',
    gray: 'gray'
}
const IconButton = ({
    icon,
    color = 'var(--text)',
    size = '16px',
    variant,
    onClick,
    badge,
    style
}) => {

    const variantFunc = (variant) => {
        switch(variant) {
            case variants.default:
                return ' default '
            case variants.transparent:
                return ' transparent '
            case variants.brown:
                return ' brown '
            case variants.gray:
                return ' gray '
            default:
                return ' default '
        }
    }

    return (
        <button onClick={onClick} style={{fontSize: size, lineHeight: size, color:color, ...style}} className={"IconButton" + variantFunc(variant)}>
            {
                badge > 0 ? (
                    <div className="IconButton__badge">{badge}</div>
                ) : null
            }
            {icon}
        </button>
    )
}

export default IconButton;