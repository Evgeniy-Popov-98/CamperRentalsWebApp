import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// Подключаем необходимые модули Swiper
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper';

// Активируем модули
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

import forest from '../../assets/images/forest.jpeg';
import mountains from '../../assets/images/mountains.jpeg';
import ocean from '../../assets/images/ocean.jpeg';

import css from './ImageSlider.module.css';

export const ImageSlider = () => {
  return (
    <div style={{ width: '40%', margin: '0 auto', paddingTop: '50px' }}>
      <Swiper
        spaceBetween={30} // Расстояние между слайдами
        slidesPerView={1} // Количество отображаемых слайдов
        navigation={true} // Включает стрелки навигации
        pagination={{ clickable: true }} // Включает пагинацию
        scrollbar={{ draggable: true }} // Включает полосу прокрутки
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Автопрокрутка
        loop={true} // Зацикливание слайдов
        effect="slide" // Эффект переключения слайдов (можно также использовать 'fade', 'cube', 'coverflow', 'flip')
      >
        <SwiperSlide>
          <img src={forest} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mountains} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ocean} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
