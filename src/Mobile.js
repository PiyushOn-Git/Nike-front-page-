import React, { useState } from 'react';
import MobileList from './MobileList';



const book1 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/u/y/note-10s-mzb08pmin-redmi-original-imah3g35yhw5gshc.jpeg?q=70',
    title: 'Redmi note 10s',
    price: '$200'
};

const book2 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70',
    title: 'Redmi note 12 5G',
    price: '$250'
};

export default function Mobile() {
    return (
        <div>
            <MobileList image={book1.image} title={book1.title} price={book1.price} />
            <MobileList image={book2.image} title={book2.title} price={book2.price} />
        </div>
    );
}
