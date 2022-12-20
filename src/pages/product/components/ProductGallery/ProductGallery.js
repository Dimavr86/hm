import './ProductGallery.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import img1 from '../../../../assets/card-1.jpeg';
import img2 from '../../../../assets/card-2.jpeg';
import img3 from '../../../../assets/card-3.jpeg';
import { useDoubleTap } from 'use-double-tap';
import { BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';


const ProductGallery = ({
    liked,
    setLiked
}) => {
    

    const bind = useDoubleTap((event) => {
        setLiked(true)
      }, 350, {
        onSingleTap: (e) => {
           
        }
      });

    return (
        <div className={"ProductGallery"}>
            <div className={"ProductGallery__like" + (liked ? ' active ' : '')}>
                <BsHeartFill/>
            </div>
            <Swiper 
                {...bind}
                className='ProductGallery__slider'>
                <SwiperSlide className='ProductGallery__slide'>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='ProductGallery__slide'>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='ProductGallery__slide'>
                    <img src={img3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductGallery;