import './ProductBody.scss';
import IconButton from '../../../../components/IconButton/IconButton';
import {BsFillHeartFill,BsFillPinAngleFill,BsHeart,BsBookmark,BsFillBookmarkFill, BsFlagFill, BsShareFill, BsHeartFill, } from 'react-icons/bs';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import Avatar from '../../../../components/Avatar/Avatar';
import Button from '../../../../components/Button/Button';

const kw = [
    {keyword: 'keyword 1'},
    {keyword: 'keyword 2'},
    {keyword: 'looooooooong keyword 3'},
    {keyword: 'keyword 4'},
    {keyword: 'short 5'},
    {keyword: 'keyword 6'},
    {keyword: 'keyword 7'},
    {keyword: 'keyword 8'},
]


const ProductBody = ({
    liked, setLiked
}) => {
    const {productName} = useParams();


    return (
        <div className="ProductBody">
            <div className="ProductBody__action">
                <div className="ProductBody__action_item">
                    <Button
                        text={'Save'}
                        variant={'brown'}
                        />
                </div>
                <div className="ProductBody__action_item">
                    {
                        liked ? (
                        <IconButton
                            onClick={() => setLiked(!liked)}
                            icon={<BsHeartFill/>}
                            variant={'white'}
                            size={'25px'}
                            color={'var(--brown)'}
                            />
                        ) : (
                            <IconButton
                                onClick={() => setLiked(!liked)}
                                icon={<BsHeart/>}
                                variant={'white'}
                                size={'25px'}
                                />
                        )
                    }
                    
                </div>
                <div className="ProductBody__action_item">
                    <IconButton
                        icon={<BsShareFill/>}
                        variant={'white'}
                        size={'25px'}
                        />
                </div>
                <div className="ProductBody__action_item">
                    <IconButton
                        icon={<BsFlagFill/>}
                        variant={'white'}
                        size={'25px'}
                        />
                </div>
            </div>
            <div className="ProductBody__main">
                <Row gutter={[20,20]}>
                    <Col span={24}>
                        <div className="ProductBody__main_head">
                            <h1 className="ProductBody__main_name">{productName}</h1>
                            <div className="ProductBody__main_wm">
                                <img src="https://cdn-icons-png.flaticon.com/512/5619/5619397.png" alt="" />
                            </div>
                        </div>
                        
                    </Col>
                  
                    <Col span={24}>
                        <div className="ProductBody__main_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis fugiat corporis iste deleniti illum hic, sed accusamus quam rerum earum recusandae? Culpa nemo voluptatibus ut fugit inventore vel. Voluptatibus?
                        </div>
                    </Col>
                    {
                        kw?.length > 0 ? (
                            <Col span={24}>
                                <div className="ProductBody__main_keywords">
                                    {
                                        kw.map((item,index) => (
                                            <div className="ProductBody__main_keywords_item" key={index}>
                                                {item.keyword}
                                            </div>
                                        ))
                                    }
                                </div>
                            </Col>
                        ) : null
                    }
                    <Col span={24}>
                        <div className="ProductBody__main_ex">
                        <div className="ProductBody__main_author">
                            <div className="ProductBody__main_author_avatar">
                                <Avatar/>
                            </div>
                            <div className="ProductBody__main_author_name">
                                Name LastName
                            </div>
                        </div>
                        <Button
                            text={'Link'}
                            />
                        </div>
                        
                    </Col>
                    
                </Row>
            </div>
        </div>
    )
}

export default ProductBody;