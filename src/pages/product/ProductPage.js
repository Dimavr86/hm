import './ProductPage.scss';
import Container from '../../components/Container/Container';
import { Row, Col } from 'antd';
import ProductBody from './components/ProductBody/ProductBody';
import ProductGallery from './components/ProductGallery/ProductGallery';
import {motion} from 'framer-motion';
import Button from '../../components/Button/Button';
import Ribbon from '../../components/Ribbon/Ribbon';
import { useState } from 'react';

const ProductPage = () => {
    const [liked, setLiked] = useState(false)
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="ProductPage page">
            <Container>
                <div className="ProductPage__in">
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            <Row gutter={{xs: 0, lg: 20}}>
                                <Col 
                                    span={24}
                                    lg={12}
                                    >
                                    <ProductGallery
                                        liked={liked}
                                        setLiked={setLiked}
                                        />
                                </Col>
                                <Col 
                                    span={24}
                                    lg={12}
                                    >
                                    <div className="panel">
                                        <ProductBody
                                            liked={liked}
                                            setLiked={setLiked}
                                            />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <div className="ProductPage__ex">
                                <Ribbon
                                head={'Related products'}
                                />
                            </div>
                            
                        </Col>
                    </Row>
                </div>
            </Container>
        </motion.div>
    )
}

export default ProductPage;