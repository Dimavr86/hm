import { useRef, useState } from 'react';
import './Text.scss';


const Text = ({
    value,
    onChange,
    placeholder,
    type,
    error,
    height
}) => {
    const [focused, setFocused] = useState(false)
    const inpRef = useRef();

    const onBlur = () => {
        if(!value) {
            setFocused(false)
        } else {
            setFocused(true)
        }
    }

    const focusInp = () => {
        inpRef.current.focus()
    }

    const onFocus = () => {
        setFocused(true)
    }

    return (
        <div className={"Text" + (focused ? ' focus ' : '')}>
            <div onClick={focusInp} className="Text__label">
                {placeholder}
            </div>
            <textarea
                style={{height}}
                value={value}
                ref={inpRef}
                className='Text__el'
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />
        </div>
    )
}

export default Text;