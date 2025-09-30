"use client"
import Image from 'next/image';
import React from 'react';

const CategoryPage = () => {



    const categoryData = [
        {
            "id": 1,
            "name": "Classic White T-Shirt",
            "image": "https://i.ibb.co/zhgxQKz1/65454657.jpg"
        },
        {
            "id": 2,
            "name": "Black Graphic Tee",
            "image": "https://i.ibb.co/sv8FqLbP/9586688.jpg"
        },
        {
            "id": 3,
            "name": "Blue Polo Shirt",
            "image": "https://i.ibb.co/j9nrmwym/87854.jpg"
        },
        {
            "id": 4,
            "name": "Red Sports T-Shirt",
            "image": "https://i.ibb.co/sv8FqLbP/9586688.jpg"
        },
        {
            "id": 5,
            "name": "Red Sports T-Shirt",
            "image": "https://i.ibb.co/6RQLkkH2/11639273.jpg"
        },
        {
            "id": 6,
            "name": "Red Sports T-Shirt",
            "image": "https://i.ibb.co/HLCcQhQF/OQRSGD0.jpg"
        },
        {
            "id": 7,
            "name": "Red Sports T-Shirt",
            "image": "https://i.ibb.co/j9nrmwym/87854.jpg"
        },
    ]


    return (
        <div className='mx-20 my-10 font-rubik'>
            <h1 className='text-center my-10 text-2xl font-bold'>Shop By Categories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
                {
                    categoryData.map((category) => (
                        <div className='relative' key={category.id}>
                            <h1 className='absolute top-0 left-10 bg-white text-black p-1 rounded-xl'>{category.name}</h1>
                            <Image className='w-full h-52 rounded-xl' src={category.image} width={500} height={300} alt={category.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryPage;