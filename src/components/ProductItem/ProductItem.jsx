import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';
import imagePaths from '../../hooks/imgRouter';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className="upgrade-special" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }}>
            <div className="upgrade-special-inner int_year_strategy">
                <div className="upgrade-special-top">
                    {/* Можно добавить содержимое или удалить, если не нужно */}
                </div>
                <div className="upgrade-special-image int_year_strategy">
                    <div className="upgrade-image">
                        <picture className="is-rounded">
                            <source 
                                srcSet="https://i.imgur.com/be49oBD.png" 
                                type="image/png" 
                                alt="int_year_strategy" 
                            />
                            <img 
                                className="img-responsive" 
                                src="https://i.imgur.com/be49oBD.png" 
                                alt="int_year_strategy" 
                            />
                        </picture>
                    </div>
                </div>
                <div className="upgrade-special-title">Year strategy</div>
                <div className="upgrade-special-spacer"></div>
                <div className="upgrade-special-text">Planning time</div>
                <div className="upgrade-special-bottom">
                    <div className="upgrade-special-detail is-center">
                        <p className="is-text-center">Вы владеете этой картой</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
