"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../public/banner/img1.jpg'
import img2 from '../../public/banner/img2.jpg'
import img3 from '../../public/banner/img3.jpg'

const BannerPage = () => {

    



    const bannerData = [
        {
            id: 1,
            img: "https://i.ibb.co/VYqS7HHq/img1.jpg"
        },
        {
            id: 2,
            img: "https://i.ibb.co/jPm5QWwr/img2.jpg"
        },
        {
            id: 3,
            img: "https://i.ibb.co/xyGK0jG/img3.jpg"
        },
    ]


    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {
                bannerData.map(banner => (
                    <SwiperSlide key={banner.id}>
                        <div style={{backgroundImage: `url("${banner.img}")` }} className='bg-center bg-cover h-[500px]'>
                           
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default BannerPage;