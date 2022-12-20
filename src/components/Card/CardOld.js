import './Card.scss';
import IconButton from '../IconButton/IconButton';
import {BsFillHeartFill,BsFillPinAngleFill, BsShareFill, BsFillBookmarksFill} from 'react-icons/bs';
import { useState } from 'react';
import {SlOptionsVertical} from 'react-icons/sl';
import {CgClose} from 'react-icons/cg';
import { useDoubleTap } from 'use-double-tap';
import { Dropdown } from 'antd';

const Arr = () => {
    return (
        <div className="Arr">

        </div>
    )
}

const Card = ({
    name,
    image,
}) => {
    const [context, setContext] = useState(false)

    const bind = useDoubleTap((event) => {
        // Your action here
        console.log('Double tapped');
      }, 350);

    const contextOpen = () => {
        setContext(!context)
    }



    return (
        <div 
            className="Card"
            {...bind}
            >
            <div className="Card__main">
                <div className="Card__main_opts">
                    <Dropdown
                        overlay={<Arr/>}
                        trigger={['click']}
                        onOpenChange={() => setContext(!context)}
                        >
                        <IconButton
                            // onClick={contextOpen}
                            variant={'gray'}
                            color={'#000'}
                            icon={context ? <CgClose/> : <SlOptionsVertical/>}
                            />
                    </Dropdown>
                    
                </div>
                <div className={"Card__main_context" + (context ? ' active ' : '')}>
                    <div className="Card__main_context_menu">
                        {/* <div className="Card__main_context_menu_item">
                            <IconButton
                                icon={<BsFillHeartFill/>}
                                size={'20px'}
                                variant={'brown'}
                                color={'#fff'}
                                />
                        </div> */}
                        <div className="Card__main_context_menu_item">
                            <IconButton
                                icon={<BsShareFill/>}
                                size={'20px'}
                                variant={'brown'}
                                color={'#fff'}
                                onClick={() => console.log('asdsad')}
                                />
                        </div>
                        {/* <div className="Card__main_context_menu_item">
                            <IconButton
                                icon={<BsFillPinAngleFill/>}
                                size={'20px'}
                                variant={'brown'}
                                color={'#fff'}
                                />
                        </div> */}
                    </div>
                </div>
                <div className="Card__main_info">
                    <h3 className="Card__main_info_head">
                        Head of card info
                    </h3>
                    <div className="Card__main_info_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum eveniet voluptate corporis atque blanditiis
                    </div>
                    <div className="Card__main_info_ex"></div>
                </div>
                <div className="Card__main_image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="Card__name">
                {name}
            </div>
        </div>
    )
}

export default Card;