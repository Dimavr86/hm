import './MainSearch.scss';
import {BiSearch} from 'react-icons/bi';
import {CgClose} from 'react-icons/cg';
import IconButton from '../IconButton/IconButton';
import { useState, useEffect } from 'react';
import { Dropdown } from 'antd';
import MsDropdown from './components/MsDropdown/MsDropdown';

const MainSearch = () => {
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)
    const [dropOpen, setDropOpen] = useState(false)
    const onSearch = (e) => {
        if(e.nativeEvent.key == 'Enter') {
            setValue('')
        }
    }
    

    useEffect(() => {
        if(focused && value ) {
            setDropOpen(true)
        } else {
            setDropOpen(false)
        }
    }, [focused, value])

    return (
        <Dropdown
            overlay={<MsDropdown/>}
            placement={'bottom'}
            open={dropOpen}
            >
            <div className={"MainSearch" + (focused ? ' focused ' : '')}>
                {
                    !focused && !value ? (
                        <div className="MainSearch__icon">
                            <BiSearch/>
                        </div>
                    ) : null
                }
                
                <div className="MainSearch__body">
                    <input 
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