import './ResultPage.scss';

import Container from '../../components/Container/Container';
import { useParams } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Card from '../../components/Card/Card';
import card1 from '../../assets/card-1.jpeg';
import card2 from '../../assets/card-2.jpeg';
import card3 from '../../assets/card-3.jpeg';
import card4 from '../../assets/card-4.jpeg';
import card5 from '../../assets/card-5.jpeg';
import card6 from '../../assets/card-6.jpeg';
import card7 from '../../assets/card-7.jpeg';
import card8 from '../../assets/card-8.jpeg';
import {motion} from 'framer-motion';
import { useEffect } from 'react';



const prodListMock = [
    {
        name: 'Product 1',
        image: card1
    },
    {
        name: 'Product 2',
        image: card2
    },
    {
        name: 'Product 3',
        image: card3
    },
    {
        name: 'Product 4',
        image: card4
    },
    // {
    //     name: 'Product 5',
    //     image: card5
    // },
    // {
    //     name: 'Product 6',
    //     image: card6
    // },
    // {
    //     name: 'Product 7',
    //     image: card7
    // },
    // {
    //     name: 'Product 8',
    //     image: card8
    // },
]

const ResultPage = () => {
    const p = new URLSearchParams(window.location.search)
  

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="ResultPage page">
            <Container>
                
                <h2 className="ResultPage__head page-title">
                    {p.get('value')}
                </h2>
                <div className="ResultPage__in">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{300: 2, 768: 5}}
                        >
                        <Masonry
                            gutter={'20px'}
                            >
                            {
                                prodListMock?.length > 0 ? (
                                    prodListMock.map((item, index) => (
                                        <Card
                                            key={index}
                                            name={item.name}
                                            image={item.image}
                                            />
                                    ))  
                                ) : null
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </Container>
        </motion.div>
    )
}

export default ResultPage;