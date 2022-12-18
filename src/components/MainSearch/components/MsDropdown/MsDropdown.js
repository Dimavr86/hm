import './MsDropdown.scss';
import { useState, useEffect } from 'react';
import img1 from '../../../../assets/card-1.jpeg';
import img2 from '../../../../assets/card-2.jpeg';
import img3 from '../../../../assets/card-3.jpeg';
import MsCard from '../MsCard/MsCard';
import { Row, Col } from 'antd';
import MsItem from '../MsItem/MsItem';

const popMock = [
    {
        name: 'Category 1',
        image: img1
    },
    {
        name: 'Category 2',
        image: img2
    },
    {
        name: 'Category 3',
        image: img3
    }
]


const resutlMock = [
    {
        name: 'some text',
        image: img1
    },
    {
        name: 'some text',
        image: img2
    },
    {
        name: 'some text',
        image: img3
    }
]

const MsDropdown = () => {



    return (
        <div className="MsDropdown">
            <div className="MsDropdown__list">
                {
                    resutlMock?.length > 0 ? (
                        resutlMock.map((item, index) => (
                            <div className="MsDropdown__item" key={index}>
                                <MsItem
                                    name={item.name}
                                    image={item.image}
                                    />
                            </div>
                            
                        ))
                    ) : null
                }
            </div>
            <div className="MsDropdown__pop">
                <div className="MsDropdown__pop_name">
                    Popular categories
                </div>
                <Row gutter={[10,10]}>
                {
                    popMock?.length > 0 ? (
                        popMock.map((item, index) => (
                            <Col span={6} key={index}>
                                <MsCard
                                    image={item.image}
                                    name={item.name}
                                    />
                            </Col>
                            
                        ))
                    ) : null
                }
                </Row>
                
            </div>
        </div>
    )
}

export default MsDropdown;