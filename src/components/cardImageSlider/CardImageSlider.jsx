'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './CardImageSlider.css';
import image from '../data/image/Hotel.avif';

const hotelImageUrls = [image, image, image, image];

export default function HotelImageSlider() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="hotelSwiper">
      {hotelImageUrls.map((url, index) => (
        <SwiperSlide key={index}>
          <Image src={url} alt={`Hotel Slide ${index + 1}`} width={800} height={600} priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
