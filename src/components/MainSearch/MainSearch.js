import './MainSearch.scss';
import {BiSearch} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import IconButton from '../IconButton/IconButton';
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'antd';
import MsDropdown from './components/MsDropdown/MsDropdown';
import { useNavigate } from 'react-router-dom';

const MainSearch = ({
   focus,
   closeSearch
}) => {
    const nav = useNavigate()
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)
    const [dropOpen, setDropOpen] = useState(false)
    const inpRef = useRef();

    const onSearch = (e) => {
        if(e.nativeEvent.key == 'Enter') {
            nav(`/search-result?value=${value}`)
            setValue('')
        }
    }

    const onSubmit = () => {
        nav(`/search-result?value=${value}`)
            setValue('')
    }

    useEffect(() => {
        if(focus) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [focus])

    useEffect(() => {
        if(focused) {
            focusInp()
        } else {
            if(closeSearch) {
                closeSearch(false)
                setValue('')
            }
        }
    }, [focused, closeSearch])
    


    // useEffect(() => {
    //     focusInp()
    // }, [focused])

  

    useEffect(() => {
        if(focused && value ) {
            setDropOpen(true)
        } else {
            setDropOpen(false)
        }
    }, [focused, value])

    const focusInp = () => {
        inpRef.current.focus()
    }

    return (
        <Dropdown
            overlay={<MsDropdown/>}
            placement={'bottom'}
            open={dropOpen}
            >
            <div className={"MainSearch" + (focused ? ' focused ' : '')}>
                {/* {
                    !focused && !value ? (
                        <div className="MainSearch__icon">
                            <BiSearch/>
                        </div>
                    ) : null
                } */}
                <div className="MainSearch__icon" onClick={onSubmit}>
                    <BiSearch/>
                </div>
                
                <div className="MainSearch__body">
                    <input 
                        ref={inpRef}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={onSearch}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Search something"}
                        type="text" />
                </div>
                <div className={"MainSearch__icon MainSearch__clear" + (value ? ' active ' : '')}>
                    <IconButton
                        onClick={() => setValue('')}
                        icon={<CgClose/>}
                        size={'20px'}
                        variant={'transparent'}
                        />
                </div>
            </div>
        </Dropdown>
        
    )
}

export default MainSearch;