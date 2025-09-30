"use client"
import Image from 'next/image';
import React from 'react';
import img1 from '../../public/display/img1.jpg'
import img2 from '../../public/display/img2.jpg'
import img3 from '../../public/display/img3.jpg'
import img4 from '../../public/display/img4.jpg'
import img5 from '../../public/display/img5.jpg'
import img6 from '../../public/display/img6.jpg'

const DisplayProduct = () => {


    const displayData = [
        {
            id: 1,
            name: "",
            image: img1
        },
        {
            id: 2,
            name: "",
            image: img2
        },
        {
            id: 3,
            name: "",
            image: img3
        },
        {
            id: 4,
            name: "",
            image: img4
        },
        {
            id: 5,
            name: "",
            image: img5
        },
        {
            id: 6,
            name: "",
            image: img6
        },
    ]


    return (
        <div className='mx-20'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    displayData.map(display => (
                        <div>
                            <Image className='w-full h-80 rounded-xl' src={display.image} width={500} height={300} alt='' />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayProduct;