import React from 'react';

export default function DieuKhoan() {
  return (
    <div className='mt-[100px] max-w-[1024px] mx-auto p-4'>
      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>Giới Thiệu</h2>
        <p class='mb-4'>
          Chào mừng bạn đến với Money Pig, ứng dụng đáng tin cậy của bạn để theo
          dõi chi tiêu và thu nhập. Chính sách này đưa ra các điều khoản và điều
          kiện, các thực hành bảo mật, và hướng dẫn sử dụng cho việc sử dụng ứng
          dụng của chúng tôi.
        </p>
      </section>

      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>
          Điều Khoản và Điều Kiện
        </h2>
        <ul class='list-disc ml-6 mb-4'>
          <li>
            <strong>Trách Nhiệm Của Người Dùng</strong>: Người dùng chịu trách
            nhiệm về tính chính xác của dữ liệu họ nhập vào ứng dụng.
          </li>
          <li>
            <strong>Quyền Sử Dụng</strong>: Money Pig cấp cho người dùng một
            giấy phép không độc quyền, không thể chuyển nhượng để sử dụng ứng
            dụng cho việc theo dõi tài chính cá nhân.
          </li>
          <li>
            <strong>Hoạt Động Bị Cấm</strong>: Người dùng không được sử dụng
            Money Pig cho bất kỳ hoạt động bất hợp pháp nào hoặc các cách vi
            phạm các điều khoản này.
          </li>
        </ul>
      </section>

      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>
          Chính Sách Bảo Mật
        </h2>
        <ul class='list-disc ml-6 mb-4'>
          <li>
            <strong>Thu Thập Dữ Liệu</strong>: Chúng tôi thu thập thông tin cá
            nhân như tên, địa chỉ email, và dữ liệu tài chính để cung cấp dịch
            vụ hiệu quả.
          </li>
          <li>
            <strong>Sử Dụng Dữ Liệu</strong>: Dữ liệu thu thập được sử dụng để
            nâng cao trải nghiệm người dùng, cung cấp hỗ trợ khách hàng, và cải
            thiện các tính năng của ứng dụng.
          </li>
          <li>
            <strong>Bảo Vệ Dữ Liệu</strong>: Chúng tôi thực hiện các biện pháp
            bảo mật để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép.
          </li>
        </ul>
      </section>

      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>
          Hướng Dẫn Người Dùng
        </h2>
        <ul class='list-disc ml-6 mb-4'>
          <li>
            <strong>Thông Tin Chính Xác</strong>: Nhập thông tin chính xác và
            trung thực để duy trì tính toàn vẹn của hồ sơ tài chính của bạn.
          </li>
          <li>
            <strong>Hành Vi Tôn Trọng</strong>: Sử dụng ứng dụng một cách tôn
            trọng và không tham gia vào các hoạt động có thể gây hại cho người
            dùng khác hoặc dịch vụ.
          </li>
          <li>
            <strong>Phản Hồi và Hỗ Trợ</strong>: Chúng tôi khuyến khích người
            dùng cung cấp phản hồi và báo cáo bất kỳ vấn đề nào cho đội ngũ hỗ
            trợ của chúng tôi.
          </li>
        </ul>
      </section>

      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>
          Cập Nhật và Thay Đổi
        </h2>
        <p class='mb-4'>
          Money Pig có quyền cập nhật trang chính sách này khi cần thiết. Người
          dùng sẽ được thông báo về bất kỳ thay đổi đáng kể nào thông qua ứng
          dụng hoặc email.
        </p>
      </section>

      <section>
        <h2 class='text-3xl font-semibold text-black mb-4'>
          Thông Tin Liên Hệ
        </h2>
        <p class='mb-4'>
          Đối với bất kỳ câu hỏi hoặc mối quan tâm nào liên quan đến chính sách
          này, vui lòng liên hệ đội ngũ hỗ trợ của chúng tôi tại{' '}
          <a
            href='mailto:app.moneypig@gmail.com'
            class='text-blue-600 underline'
          >
            app.moneypig@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
