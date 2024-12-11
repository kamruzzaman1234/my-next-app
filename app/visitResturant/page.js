import Item from '@/components/VisitResturant/Items';
import ProductView from '@/components/VisitResturant/ProductView/ProductView';
import React from 'react';

const VisitResturant = ()=>{
    return(
        <div className="py-10">
            <div className="max-w-7xl mx-auto">
                <ProductView></ProductView>
                <Item></Item>
            </div>
        </div>
    )
}
export default VisitResturant;