import './Button.scss';
import {CircleLoader} from 'react-spinners';
import { Tooltip } from 'antd';

const variants = {
    default: 'default',
    danger: 'danger',
    success: 'success',
    black: 'black',
    brown: 'brown',
    white: 'white'
}


const Button = ({
    text,
    variant,
    onClick,
    before,
    after,
    disabled,
    load,
    color = '#fff',
    tooltip
}) => {

    const variantFunc = (variant) => {
        switch(variant) {
            case variants.default:
                return ' default '
            case variants.brown:
                return ' brown '
            case variants.white:
                return ' white '
            default:
                return ' default '
        }
    }

    if(tooltip) {
        return (
            <Tooltip
            title={tooltip}
            trigger={['hover']}
            placement={'bottom'}
            >
            <button style={{color:color}} disabled={disabled} className={"Button" + (load ? ' load ' : '') + variantFunc(variant)} onClick={onClick}>
                <div className="Button__load">
                    <CircleLoader color={color}/>
                </div>
                {
                    before ? (
                        <span className="Button__side Button__before">
                            {before}
                        </span>
                    ) : null
                }
                <span className="Button__text">
                    {text}
                </span>
                {
                    after ? (
                        <span className="Button__side Button__after">
                            {after}
                        </span>
                    ) : null
                }
            </button>
        </Tooltip>
        )
    }

    return (
        <button style={{color:color}} disabled={disabled} className={"Button" + (load ? ' load ' : '') + variantFunc(variant)} onClick={onClick}>
            <div className="Button__load">
                <CircleLoader color={color}/>
            </div>
            {
                before ? (
                    <span className="Button__side Button__before">
                        {before}
                    </span>
                ) : null
            }
            <span className="Button__text">
                {text}
            </span>
            {
                after ? (
                    <span className="Button__side Button__after">
                        {after}
                    </span>
                ) : null
            }
        </button>
    )
}

export default Button;