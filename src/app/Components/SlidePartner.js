"use client";
import React, { useEffect, useState } from "react";
import styles from "./SlidePartner.module.css"; // Import CSS modules styles

const SlidePartner = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [isPaused, setIsPaused] = useState(false); // State để kiểm tra slide có đang tạm dừng hay không

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);        
      }
    }, 5000); // Thời gian chuyển đổi giữa các slide (ms)

    return () => clearInterval(intervalId); // Xóa interval khi component bị unmount
  }, [images, isPaused]); // Chạy lại effect khi danh sách hình ảnh thay đổi hoặc trạng thái tạm dừng thay đổi

  useEffect(() => {
    const extendedImages = [...images, ...images]; // Nối danh sách hình ảnh để hình cuối nối vào hình đầu
    setVisibleImages(extendedImages);
  }, [images]); // Chạy lại effect khi danh sách hình ảnh thay đổi

  const handleMouseEnter = () => {
    setIsPaused(true); // Khi di chuột vào, tạm dừng slide
    // Dừng ngay lập tức slide bằng cách cập nhật transform của wrapper
    const slideWrapper = document.querySelector(`.${styles.slide_partner_wrapper}`);
    slideWrapper.style.transition = "none";
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Khi di chuột ra, tiếp tục chạy slide
    // Khôi phục lại hiệu ứng transition sau khi di chuột ra
    const slideWrapper = document.querySelector(`.${styles.slide_partner_wrapper}`);
    slideWrapper.style.transition = "transform 5s linear";
  };

  return (
    <div
      className={styles.slide_partner}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.slide_partner_wrapper}
        style={{
          width: `${(visibleImages.length / 5) * 100}%`,
          transform: `translateX(-${slideIndex * (100 / 5)}%)`,
        }}
      >
        {visibleImages.map((image, index) => (
          <div className={styles.slide_partner_item} key={index}>
            <img src={image.src} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidePartner;

// import React, { useEffect, useState } from "react";
// import styles from "./SlidePartner.module.css"; // Import CSS modules styles

// const SlidePartner = ({ images }) => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [visibleImages, setVisibleImages] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);        
//     }, 5000); // Thời gian chuyển đổi giữa các slide (ms)

//     return () => clearInterval(intervalId); // Xóa interval khi component bị unmount
//   }, [images]); // Chạy lại effect khi danh sách hình ảnh thay đổi

//   useEffect(() => {
//     const extendedImages = [...images, ...images]; // Nối danh sách hình ảnh để hình cuối nối vào hình đầu
//     setVisibleImages(extendedImages);
//   }, [images]); // Chạy lại effect khi danh sách hình ảnh thay đổi

//   return (
//     <div className={styles.slide_partner}>
//       <div
//         className={styles.slide_partner_wrapper}
//         style={{
//           width: `${(visibleImages.length / 5) * 100}%`,
//           transform: `translateX(-${slideIndex * (100 / 5)}%)`
//         }}
//       >
//         {visibleImages.map((image, index) => (
//           <div className={styles.slide_partner_item} key={index}>
//             <img src={image.src} alt={`Partner ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlidePartner;
