import Image from 'next/image';
import React from 'react';

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt='features'
        className='mx-auto'
      />
      <h3 className='text-xl font-semibold mt-2'>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className='container mx-auto px-5 md:px-16' id='features'>
      <p className='service-name text-center text-rose-200'>
        Kiểm Soát Tài Chính Của Bạn Với Money Pig!
      </p>
      <h2 className='title text-center'>Các Tính Năng Chính</h2>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20'>
        <FeatureProduct
          imgSrc='/features/1.png'
          title='Theo Dõi Thu Nhập & Chi Tiêu'
          desc='Nhanh chóng ghi lại các giao dịch để quản lý dòng tiền của bạn.'
        />
        <FeatureProduct
          imgSrc='/features/2.png'
          title='Tạo Nhiều Hũ Chi Tiêu'
          desc='Đi học, đi chơi, du lịch, ăn uống cùng bạn bè. Muôn vàn mục đích sử dụng tài chính.'
        />
        <FeatureProduct
          imgSrc='/features/4.png'
          title='Chọn Ngày Bắt Đầu Cá Nhân'
          desc='Bạn không nhận lương vào đầu tháng? Đừng lo vì hãy chọn ngày bắt đầu theo ý bạn.'
        />
        <FeatureProduct
          imgSrc='/features/3.png'
          title='Báo Cáo Chi Tiết'
          desc='Xem báo cáo theo thời gian thực và tóm tắt hàng tháng để hiểu rõ hơn về tài chính cá nhân.'
        />
      </div>
    </section>
  );
};

export default Features;
