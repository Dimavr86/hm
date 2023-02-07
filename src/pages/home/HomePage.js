import './HomePage.scss';
import Container from '../../components/Container/Container';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import prodMock from '../../ex/prodMock';
import Card from '../../components/Card/Card';
import {motion} from 'framer-motion';
import { useEffect } from 'react';


function elementVisible(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;
    let bottom = top + height;
  
    let IsOverBottom = top > (window.pageYOffset + window.innerHeight);
    let IsBeforeTop = bottom < window.pageYOffset;
  
    if (!IsOverBottom && !IsBeforeTop) {
      el.classList.add("show");
    }
  }

const onScroll = () => {
    for (var item of document.querySelectorAll(".Card")) {
        elementVisible(item);
      }
}


const HomePage = () => {

    

  


    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            exit={{opacity: 0}}
            className="HomePage page">
            <Container>
                <div className="HomePage__in">
                    
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{300: 2, 768: 5}}
                        >
                        
                        <Masonry
                            gutter={'20px'}
                            >
                            {
                                prodMock?.length > 0 ? (
                                    prodMock.map((item, index) => (
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

export default HomePage;