import './Input.scss';
import {useRef, useState} from 'react';

const Input = ({
    value,
    onChange,
    placeholder,
    type,
    error,
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

    const onFocus = () => setFocused(true)

    return (
        <div className={"Input" + (focused ? ' focus ' : '')}>
            <div onClick={focusInp} className="Input__label">{placeholder}</div>
            <input
                ref={inpRef}
                className='Input__el'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                />
        </div>
        
    )
}

export default Input;