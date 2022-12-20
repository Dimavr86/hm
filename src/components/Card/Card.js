import './Card.scss';
import IconButton from '../IconButton/IconButton';
import {BsFillHeartFill,BsFillPinAngleFill,BsHeart,BsBookmark,BsFillBookmarkFill, BsShareFill, BsFillBookmarksFill} from 'react-icons/bs';
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
    const [saved, setSaved] = useState(false)
    const [liked, setLiked] = useState(false)

    const bind = useDoubleTap((event) => {
        setLiked(true)
      }, 350, {
        onSingleTap: (e) => {
            console.log('single tap')
        }
      });




    return (
        <div 
            className="Card"
            {...bind}
            >
            <div className="Card__main">
                <div className={"Card__main_like" + (liked ? ' active ' : '')}>
                    <BsFillHeartFill/>
                </div>
                <div className="Card__main_opts">
                    {
                        liked ? (
                            <div className="Card__main_opts_item">
                                <IconButton
                                    onClick={() => setLiked(!liked)}
                                    variant={'gray'}
                                    color={'var(--brown)'}
                                    icon={<BsFillHeartFill/>}
                                    />
                            </div>
                        ) : (
                            <div className="Card__main_opts_item">
                                <IconButton
                                    onClick={() => setLiked(!liked)}
                                    variant={'gray'}
                                    color={'var(--text)'}
                                    icon={<BsHeart/>}
                                    />
                            </div>
                        )
                    }
                    
                    <div className="Card__main_opts_item">
                        <IconButton
                            variant={'gray'}
                            color={'var(--text)'}
                            icon={<BsShareFill/>}
                            />
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
            <div className="Card__body">
                <div className="Card__body_name">{name}</div>
                <div className="Card__body_action">
                    {
                        saved ? (
                        <IconButton
                            style={{padding: '4px'}}
                            size={'25px'}
                            onClick={() => setSaved(!saved)}
                            variant={'transparent'}
                            color={'var(--brown)'}
                            icon={<BsFillBookmarkFill/>}
                        />
                        ) : (
                            <IconButton
                                style={{padding: '4px'}}
                                size={'25px'}
                                onClick={() => setSaved(!saved)}
                                variant={'transparent'}
                                color={'var(--text)'}
                                icon={<BsBookmark/>}
                        />
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Card;