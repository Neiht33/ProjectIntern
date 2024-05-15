import React from 'react';
import { Card } from '@material-tailwind/react';

export default function HeaderContent() {
  return (
    <div style={{ background: 'rgb(236 237 237)' }}>
      <div className='title-content' style={{ padding: '58px 95px 20px', height: '880px' }}>
        <h1>Trắc nghiệm tính cách MBTI là gì?</h1>
        <img style={{ margin: 'auto', width: '800px', height: 'auto' }} src='https://thechargerfrontline.com/wp-content/uploads/2022/11/Personality-Test-900x568.png' alt="MBTI" />
        <div className='flex' style={{ height: '304px', width: 'auto', margin: '25px', gap: '50px' }}>

          <div className='flex baxa' style={{ flexDirection: 'column' }}>
            <p style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: '700' }}>Trắc nghiệm tính cách MBTI</span> <span style={{ fontStyle: 'italic', fontWeight: '500' }}>(Myers-Briggs Type Indicator)</span> là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm để phân tích tính cách con người. Kết quả trắc nghiệm MBTI chỉ ra cách con người nhận thức thế giới xung quanh và ra quyết định cho mọi vấn đề trong cuộc sống.
            </p>
            <p>
              Hiện nay, MBTI được coi là công cụ khám phá tính cách phổ biến và chính xác nhất trên thế giới. Trong công việc, MBTI giúp mỗi cá nhân có thêm thông tin để định hướng và lựa chọn nghề nghiệp. Nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá mức độ phù hợp của ứng viên với vị trí công việc và văn hoá doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
      <img src='https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/mbti-body-line.png' alt="MBTI Line" style={{ width: '1349px' }} />
      <div className='title-content flex' style={{ marginTop: '40px', padding: '58px 95px 0px', height: '250px' }}>
        <h1>Cách MBTI phân loại 16 nhóm tính cách</h1>
        <div className='flex' style={{ height: '304px', width: 'auto', gap: '50px' }}>
          <div className='flex baxa' style={{ flexDirection: 'column', marginLeft: '40px' }}>
            <p style={{ marginBottom: '15px' }}>
              Trắc nghiệm MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên quan đến những vấn đề cơ bản trong cuộc sống với các đáp án sẵn có để bạn lựa chọn. Tổng kết bài trắc nghiệm sẽ cho ra kết quả đánh giá bạn là người có tính cách như thế nào thông qua phương pháp phân loại.
            </p>
            <p>
              Sự phân loại này dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm là một cặp lưỡng phân của 8 yếu tố chức năng, nhận thức sau:
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center" >
          <Card className="w-[500px] m-2" style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)' }}>
            <img style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personality-classification/img_1.png" alt="Card Image" />
            <div className="text-center p-4">
              <p className="text-4xl font-bold mb-2">1</p>
              <p className="text-sm" style={{ fontSize: '15px', color: '#004720', fontWeight: '600' }}>Cách bạn tương tác với thế giới xung quanh, tập trung sự chú ý và nạp thêm năng lượng</p>
            </div>
          </Card>
          <Card className="w-[500px] m-2" style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)' }}>
            <img style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personality-classification/img_2.png" alt="Card Image" />
            <div className="text-center p-4">
              <p className="text-4xl font-bold mb-2">2</p>
              <p className="text-sm" style={{ fontSize: '15px', color: '#004720', fontWeight: '600' }}>Cách bạn tiếp nhận thông tin và nhận thức thế giới</p>
            </div>
          </Card>
          <Card className="w-[500px] m-2" style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)' }}>
            <img style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personality-classification/img_3.png" alt="Card Image" />
            <div className="text-center p-4">
              <p className="text-4xl font-bold mb-2">3</p>
              <p className="text-sm" style={{ fontSize: '15px', color: '#004720', fontWeight: '600' }}>Cách bạn lựa chọn và đưa ra quyết định</p>
            </div>
          </Card>
          <Card className="w-[500px] m-2" style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.2)' }}>
            <img style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personality-classification/img_4.png" alt="Card Image" />
            <div className="text-center p-4">
              <p className="text-4xl font-bold mb-2">4</p>
              <p className="text-sm" style={{ fontSize: '15px', color: '#004720', fontWeight: '600' }}>Cách bạn tiếp cận với cuộc sống hàng ngày</p>
            </div>
          </Card>
        </div>
      </div>
      <div style={{ padding: '58px 95px 0px', height: '150px', fontSize: '18px', color: '#05105e', fontStyle: 'italic' }}>Bằng cách kết hợp từng khía cạnh của những cặp đối lập này, MBTI hình thành 16 nhóm tính cách và định nghĩa chúng dựa trên những nghiên cứu về tâm lý học của Katherine Cook Briggs và con gái bà, Isabel Briggs Myers.</div>
    </div>
  );
}
