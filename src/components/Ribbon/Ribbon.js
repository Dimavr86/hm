import './Ribbon.scss';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import card1 from '../../assets/card-1.jpeg';
import card2 from '../../assets/card-2.jpeg';
import card3 from '../../assets/card-3.jpeg';
import card4 from '../../assets/card-4.jpeg';
import card5 from '../../assets/card-5.jpeg';
import card6 from '../../assets/card-6.jpeg';
import card7 from '../../assets/card-7.jpeg';
import card8 from '../../assets/card-8.jpeg';
import Card from '../../components/Card/Card';
import {motion} from 'framer-motion';
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
    {
        name: 'Product 5',
        image: card5
    },
    {
        name: 'Product 6',
        image: card6
    },
    {
        name: 'Product 7',
        image: card7
    },
    {
        name: 'Product 8',
        image: card8
    },
]

const containerAnim = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
}

const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

const Ribbon = ({
    head,
    list
}) => {
    return (
        <div className="Ribbon">
            <h2 className="Ribbon__head page-title">
                {head}
            </h2>
            <div className="Ribbon__body">
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
        </div>
    )
}

export default Ribbon;