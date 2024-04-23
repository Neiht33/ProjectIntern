import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function Example() {
  const cardData = [
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/istj.png",
      title: "ISTJ - Người Trách Nhiệm",
      content: "Người tổ chức có trách nhiệm, biết sắp xếp trật tự",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/isfp.png",
      title: "ISFP - Người Nghệ Sĩ",
      content: "Đam mê và trân trọng thực tại, biết lắng nghe và quan tâm",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/infp.png",
      title: "INFP - Người Lý Tưởng Hoá",
      content: "Giàu trí tưởng tượng, đề cao giá trị và niềm tin của bản thân",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/intj.png",
      title: "INTJ -  Nhà Khoa Học",
      content: "Phân tích - giải quyết vấn đề hiệu quả, có năng khiếu với cải thiện hệ thống và quy trình",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/isfj.png",
      title: "ISFJ - Người Nuôi Dưỡng",
      content: "Trung thành, sẵn sàng hi sinh vì người khác",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/istp.png",
      title: "ISTP - Nhà Kỹ Thuật",
      content: "Tư duy nhanh nhạy, quan sát tốt, phát hiện và giải quyết vấn đề nhanh gọn",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/infj.png",
      title: "ISFJ - Người Che Chở",
      content: "Nuôi dưỡng những lý tưởng đúng đắn, cầu toàn, coi trọng sự toàn diện và đề cao tính chính trực",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/intp.png",
      title: "INTP - Nhà Tư Duy",
      content: "Thông thái, triết lý, chỉ tin vào logic",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/enfj.png",
      title: "ENFJ - Người Cho Đi",
      content: "Lý tưởng hóa, có sức ảnh hưởng lớn, mưu cầu những điều tốt nhất cho tập thể",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/entj.png",
      title: "ENTJ - Nhà Điều Hành",
      content: "Kỹ năng lãnh đạo xuất sắc, lấy thay đổi làm động lực",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/esfj.png",
      title: "ESFJ - Người Quan Tâm",
      content: "Tận tụy, thích giúp đỡ mọi người xung quanh",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/estj.png",
      title: "ESTJ - Người Giám Hộ",
      content: "Theo đuổi chủ nghĩa làm việc siêng năng, tận tâm và nỗ lực hết mình để đạt được thành quả trong công việc",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/enfp.png",
      title: "ENFP - Người Truyền Cảm Hứng",
      content: "Lấy con người làm trung tâm sáng tạo, luôn tràn đầy năng lượng và cảm hứng",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/entp.png",
      title: "ENTP - Người Nhìn Xa",
      content: "Không ngừng sáng tạo - đổi mới, luôn tìm kiếm giải pháp cho các vấn đề thách thức",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/esfp.png",
      title: "ESFP - Người Trình Diễn",
      content: "Hoạt bát, yêu đời, đặt trải nghiệm là ưu tiên hàng đầu trong cuộc sống, có sức hút lớn với mọi người xung quanh",
    },
    {
      imageSrc: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/mbti/personalities/estp.png",
      title: "ESTP - Người Thực Thi",
      content: "Nhiệt tình, ưa cảm giác mạnh, sẵn sàng vượt qua ranh giới và lao vào hành động",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Đảm bảo rằng cssEase được đặt thành "linear"
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <div key={index}>
          <Card
            className="w-full max-w-[390px] h-[200px] bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex flex-row"
            style={{ borderRadius: '20px', margin: '10px' }}
          >
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
              style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
            >
              <img src={card.imageSrc} alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {card.title}
              </h4>
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700" style={{ fontSize: '13px' }}>
                {card.content}
              </p>
            </div>
          </Card>
        </div>
      ))}
    </Slider>
  );
}