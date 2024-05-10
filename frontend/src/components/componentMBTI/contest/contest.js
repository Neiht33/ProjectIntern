import React, { useState } from 'react';
import { Card, Radio, Progress, Typography } from "@material-tailwind/react";
const Quiz = () => {
     const questions = [
          {
               question: "Trong một buổi tiệc, bạn sẽ:",
               options: [
                    { text: "Thoải mái trò chuyện với tất cả mọi người, kể cả người lạ", personality: "E" },
                    { text: "Chỉ tương tác với những người bạn quen", personality: "I" }
               ]
          },
          {
               question: "Bạn thiên về:",
               options: [
                    { text: "Thực tế hơn là suy đoán", personality: "T" },
                    { text: "Suy đoán hơn là thực tế", personality: "F" }
               ]
          },
          {
               question: "Điều gì khiến bạn cảm thấy tệ hơn?",
               options: [
                    { text: "Đầu óc trên mây, viển vông và phi thực tế", personality: "N" },
                    { text: "Nhàm chán, đơn điệu", personality: "S" }
               ]
          },
          {
               question: "Bạn thấy ấn tượng hơn bởi:",
               options: [
                    { text: "Nguyên lý, nguyên tắc", personality: "T" },
                    { text: "Cảm xúc, tình cảm", personality: "F" }
               ]
          },
          {
               question: "Bạn dễ bị thuyết phục hơn bởi những sự việc:",
               options: [
                    { text: "Logic, dựa trên bằng chứng và lý lẽ", personality: "T" },
                    { text: "Cảm động, thiên về cảm xúc và tình người", personality: "F" }
               ]
          },
          {
               question: "Bạn thích làm việc:",
               options: [
                    { text: "Với thời hạn (deadline) rõ ràng", personality: "J" },
                    { text: "Tùy hứng, linh hoạt", personality: "P" }
               ]
          },
          {
               question: "Khi lựa chọn, bạn thường:",
               options: [
                    { text: "Xem xét kỹ lưỡng từ nhiều khía cạnh", personality: "J" },
                    { text: "Tin vào suy đoán và linh cảm của mình", personality: "P" }
               ]
          },
          {
               question: "Tại các buổi gặp mặt, bạn sẽ:",
               options: [
                    { text: "Muốn tận hưởng bữa tiệc và ở lại đến cuối cùng", personality: "E" },
                    { text: "Nhanh chóng thấy mệt mỏi và muốn ra về sớm", personality: "I" }
               ]
          },
          {
               question: "Tuýp người nào sẽ thu hút bạn hơn?",
               options: [
                    { text: "Người logic và thực tế", personality: "T" },
                    { text: "Người có khả năng tưởng tượng phong phú", personality: "F" }
               ]
          },
          {
               question: "Bạn hứng thú hơn với những sự việc:",
               options: [
                    { text: "Đã và đang xảy ra", personality: "S" },
                    { text: "Có khả năng xảy ra", personality: "N" }
               ]
          },
          {
               question: "Bạn thường đánh giá người khác dựa trên:",
               options: [
                    { text: "Quy định, nguyên tắc", personality: "T" },
                    { text: "Hoàn cảnh cụ thể", personality: "F" }
               ]
          },
          {
               question: "Khi tiếp cận người khác, bạn thường đánh giá họ dựa trên góc nhìn nào?",
               options: [
                    { text: "Khách quan", personality: "T" },
                    { text: "Chủ quan", personality: "F" }
               ]
          },
          {
               question: "Bạn thường là người:",
               options: [
                    { text: "Luôn đúng giờ", personality: "J" },
                    { text: "Thong thả, linh hoạt về thời gian", personality: "P" }
               ]
          },
          {
               question: "Sau khi trải qua một kỳ thi, bạn thường:",
               options: [
                    { text: "Cảm thấy nhẹ nhõm và bắt đầu lên lịch đi chơi", personality: "P" },
                    { text: "Lo lắng về kết quả sẽ đạt được", personality: "J" }
               ]
          },
          {
               question: "Trong nhóm, bạn thường là người:",
               options: [
                    { text: "Luôn nắm bắt thông tin kịp thời", personality: "P" },
                    { text: "Biết thông tin muộn hơn", personality: "J" }
               ]
          },
          {
               question: "Cách bạn giải quyết những công việc thường ngày là:",
               options: [
                    { text: "Làm theo cách thông thường", personality: "J" },
                    { text: "Làm theo cách của riêng mình", personality: "P" }
               ]
          },
          {
               question: "Theo bạn, các nhà văn nên:",
               options: [
                    { text: "Viết chính xác những gì họ nghĩ, diễn đạt một cách rõ ràng, nghĩa trên mặt chữ", personality: "J" },
                    { text: "Diễn đạt bằng biện pháp so sánh, liên tưởng, ví von thâm sâu", personality: "P" }
               ]
          },
          {
               question: "Điều gì thu hút bạn hơn?",
               options: [
                    { text: "Tính nhất quán trong tư tưởng", personality: "J" },
                    { text: "Mối quan hệ hài hòa giữa người với người", personality: "P" }
               ]
          },
          {
               question: "Bạn cảm thấy thoải mái hơn khi đưa ra nhận xét:",
               options: [
                    { text: "Dựa trên logic", personality: "T" },
                    { text: "Dựa trên quan điểm, giá trị cá nhân", personality: "F" }
               ]
          },
          {
               question: "Bạn thích những điều:",
               options: [
                    { text: "Theo kế hoạch và ổn định", personality: "J" },
                    { text: "Linh hoạt và có thể thay đổi", personality: "P" }
               ]
          },
          {
               question: "Một phút thật lòng với bản thân nhé. Bạn là người:",
               options: [
                    { text: "Nghiêm túc, quyết đoán", personality: "J" },
                    { text: "Dễ tính, thoải mái", personality: "P" }
               ]
          },
          {
               question: "Khi nói chuyện điện thoại, bạn:",
               options: [
                    { text: "Hiếm khi băn khoăn đến những điều mình sẽ nói", personality: "P" },
                    { text: "Thường chuẩn bị trước những điều mình sẽ nói", personality: "J" }
               ]
          },
          {
               question: "Theo bạn, các sự việc và hiện tượng:",
               options: [
                    { text: "Tự nói lên bản chất của chính nó", personality: "P" },
                    { text: "Tồn tại để minh họa cho các quy luật, quy tắc khác", personality: "J" }
               ]
          },
          {
               question: "Những người có tầm nhìn xa:",
               options: [
                    { text: "Ở mức độ nào đó, họ thường gây khó chịu cho người khác", personality: "N" },
                    { text: "Khá thú vị, lôi cuốn", personality: "S" }
               ]
          },
          {
               question: "Bạn là người:",
               options: [
                    { text: "Có cái đầu lạnh", personality: "T" },
                    { text: "Có trái tim ấm", personality: "F" }
               ]
          },
          {
               question: " Bạn cảm thấy tồi tệ hơn khi đối mặt với:",
               options: [
                    { text: "Sự bất công", personality: "F" },
                    { text: "Sự tàn nhẫn", personality: "T" }
               ]
          },
          {
               question: "Theo bạn, quyết định nên được đưa ra:",
               options: [
                    { text: "Dựa trên việc cân nhắc và lựa chọn kỹ lưỡng", personality: "J" },
                    { text: "Thuận theo tự nhiên, nước chảy mây trôi", personality: "P" }
               ]
          },
          {
               question: "Khi đi mua sắm, bạn thích cảm giác nào hơn?",
               options: [
                    { text: "Đã mua được thứ mình muốn", personality: "J" },
                    { text: "Đang trong quá trình lựa chọn", personality: "P" }
               ]
          },
          {
               question: "Trong công ty, bạn là người:",
               options: [
                    { text: "Khởi xướng các câu chuyện", personality: "E" },
                    { text: "Đợi người khác khởi xướng rồi tham gia vào", personality: "I" }
               ]
          },
          {
               question: "Với những kiến thức, quy luật đã được xã hội công nhận, bạn sẽ:",
               options: [
                    { text: "Tin tưởng không nghi ngờ", personality: "J" },
                    { text: "Không ngừng đặt nghi vấn về tính chính xác", personality: "P" }
               ]
          },
          {
               question: "Theo bạn, trẻ em thường không:",
               options: [
                    { text: "Tự mình phát huy hết năng lực", personality: "N" },
                    { text: "Khai thác tối đa trí tưởng tượng của mình", personality: "S" }
               ]
          },
          {
               question: "Khi mua xe hơi, bạn nghĩ yếu tố nào quan trọng hơn?",
               options: [
                    { text: "Nhu cầu sử dụng", personality: "S" },
                    { text: "Sở thích cá nhân", personality: "N" }
               ]
          },
          {
               question: "Tính cách của bạn nghiêng về:",
               options: [
                    { text: "Cứng rắn", personality: "J" },
                    { text: "Mềm mỏng", personality: "P" }
               ]
          },
          {
               question: "Khả năng nào đáng khâm phục hơn?",
               options: [
                    { text: "Tổ chức và làm việc bài bản, có phương pháp, hệ thống", personality: "J" },
                    { text: "Dễ dàng thích ứng và linh hoạt trong mọi tình huống", personality: "P" }
               ]
          },
          {
               question: "Bạn mong muốn điều gì hơn ở cấp trên?",
               options: [
                    { text: "Chuyên môn xuất sắc", personality: "J" },
                    { text: "Tư duy cởi mở", personality: "P" }
               ]
          },
          {
               question: "Khi đối mặt với những vấn đề mới, bạn thường cảm thấy:",
               options: [
                    { text: "Hào hứng, tràn đầy năng lượng", personality: "N" },
                    { text: "Mệt mỏi, nhanh chóng bị hút cạn sức lực", personality: "S" }
               ]
          },
          {
               question: "Tính cách của bạn thiên về:",
               options: [
                    { text: "Thực tế", personality: "S" },
                    { text: "Mơ mộng", personality: "N" }
               ]
          },
          {
               question: "Bạn sẽ quan tâm hơn đến:",
               options: [
                    { text: "Giá trị thực tế mà một người mang lại", personality: "J" },
                    { text: "Cảm nhận, suy nghĩ của đối phương", personality: "P" }
               ]
          },
          {
               question: "Điều gì làm bạn thoải mái hơn?",
               options: [
                    { text: "Thảo luận kỹ lưỡng về một vấn đề (quá trình)", personality: "J" },
                    { text: "Thống nhất được hướng giải quyết cho một vấn đề (kết quả)", personality: "P" }
               ]
          },
          {
               question: "Bạn sẽ lựa chọn công việc nào?",
               options: [
                    { text: "Công việc bạn không thực sự thích nhưng đem lại thu nhập cao", personality: "T" },
                    { text: "Công việc mà bạn hằng mơ ước nhưng thu nhập trung bình", personality: "F" }
               ]
          },
          {
               question: "Bạn thích được điều hướng công việc theo cách:",
               options: [
                    { text: "Giao việc trọn gói, bàn giao 100% sau khi hoàn thành", personality: "J" },
                    { text: "Giao việc hàng ngày, từng bước hoàn thành công việc", personality: "P" }
               ]
          },
          {
               question: "Bạn thường tìm kiếm những điều:",
               options: [
                    { text: "Được sắp xếp theo thứ tự rõ ràng", personality: "J" },
                    { text: "Ngẫu nhiên, tùy hứng", personality: "P" }
               ]
          },
          {
               question: "Bạn thường kết giao:",
               options: [
                    { text: "Với nhiều bạn nhưng không quá thân", personality: "E" },
                    { text: "Với ít bạn nhưng tình cảm khăng khít", personality: "I" }
               ]
          },
          {
               question: "Điều gì ảnh hưởng tới quyết định của bạn nhiều hơn?",
               options: [
                    { text: "Tình hình thực tế", personality: "S" },
                    { text: "Nguyên tắc, luật lệ", personality: "N" }
               ]
          },
          {
               question: "Bạn thấy hứng thú hơn với việc:",
               options: [
                    { text: "Sản xuất và phân phối", personality: "S" },
                    { text: "Thiết kế và nghiên cứu", personality: "N" }
               ]
          },
          {
               question: "Bạn thường được tán thưởng vì:",
               options: [
                    { text: "Là người có tư duy logic", personality: "T" },
                    { text: "Là người tinh tế, tình cảm", personality: "F" }
               ]
          },
          {
               question: "Bạn thấy điều gì giá trị hơn ở bản thân mình?",
               options: [
                    { text: "Tinh thần kiên định, vững vàng", personality: "T" },
                    { text: "Sự toàn tâm, cống hiến", personality: "F" }
               ]
          },
          {
               question: "Bạn đánh giá cao:",
               options: [
                    { text: "Tuyên bố cuối cùng, không thay đổi", personality: "J" },
                    { text: "Tuyên bố mang tính dự kiến, có thể thay đổi", personality: "P" }
               ]
          },
          {
               question: "Bạn thấy nhẹ nhõm hơn:",
               options: [
                    { text: "Trước khi đưa ra quyết định", personality: "P" },
                    { text: "Sau khi đưa ra quyết định", personality: "J" }
               ]
          },
          {
               question: "Bạn đánh giá bản thân là người như thế nào?",
               options: [
                    { text: "Tôi có thể dễ dàng bắt chuyện với người lạ", personality: "E" },
                    { text: "Tôi không có hứng thú trò chuyện với người lạ", personality: "I" }
               ]
          },
          {
               question: "Bạn có xu hướng tin tưởng vào:",
               options: [
                    { text: "Kinh nghiệm của mình", personality: "F" },
                    { text: "Linh cảm của mình", personality: "T" }
               ]
          },
          {
               question: "Bạn thường:",
               options: [
                    { text: "Giải quyết vấn đề một cách thực tế và hiệu quả (có thể áp dụng được ngay)", personality: "S" },
                    { text: "Nghĩ ra những giải pháp sáng tạo và độc đáo (có thể không thực hiện ngay được)", personality: "N" }
               ]
          },
          {
               question: "Bạn thấy ấn tượng hơn khi tiếp xúc với một người:",
               options: [
                    { text: "Giàu lý trí", personality: "T" },
                    { text: "Giàu cảm xúc", personality: "F" }
               ]
          },
          {
               question: "Bạn đánh giá tính cách nào cao hơn?",
               options: [
                    { text: "Sự công bằng", personality: "T" },
                    { text: "Sự đồng cảm", personality: "F" }
               ]
          },
          {
               question: "Theo bạn, mọi chuyện sẽ diễn ra hợp lý hơn nếu:",
               options: [
                    { text: "Được chuẩn bị trước", personality: "J" },
                    { text: "Diễn ra tự nhiên", personality: "P" }
               ]
          },
          {
               question: "Trong một mối quan hệ:",
               options: [
                    { text: "Điều gì cũng có thể thương lượng và điều chỉnh lại để đạt được sự đồng thuận chung", personality: "J" },
                    { text: "Nên để mọi chuyện diễn ra tự nhiên, thuận theo hoàn cảnh đưa đẩy", personality: "P" }
               ]
          },
          {
               question: "Khi có số lạ gọi tới điện thoại của bạn, bạn sẽ:",
               options: [
                    { text: "Nhấc máy ngay để xem ai đang gọi", personality: "E" },
                    { text: "Chần chừ không nghe máy", personality: "I" }
               ]
          },
          {
               question: "Bạn đánh giá cao khả năng của mình hơn khi:",
               options: [
                    { text: "Đưa ra quyết định dựa trên số liệu thực tế", personality: "T" },
                    { text: "Đưa ra quyết định dựa trên trực giác và linh cảm", personality: "F" }
               ]
          },
          {
               question: "Bạn bị thu hút hơn với điều gì?",
               options: [
                    { text: "Những nguyên tắc cơ bản", personality: "T" },
                    { text: "Những ẩn ý sâu xa", personality: "F" }
               ]
          },
          {
               question: "Bạn không thích những người:",
               options: [
                    { text: "Quá cảm xúc (dễ bị tình cảm chi phối)", personality: "T" },
                    { text: "Quá lý trí (không dễ bị ảnh hưởng bởi yếu tố cảm xúc)", personality: "F" }
               ]
          },
          {
               question: "Bạn thuộc tuýp người:",
               options: [
                    { text: "Mạnh mẽ, quyết đoán, không dễ bị thuyết phục", personality: "T" },
                    { text: "Mềm mỏng, dễ bị thuyết phục, dễ thay đổi quan điểm dưới ảnh hưởng của người khác", personality: "F" }
               ]
          },
          {
               question: "Trước một chuyến đi chơi, bạn thường:",
               options: [
                    { text: "Lên lịch trình chi tiết, rõ ràng", personality: "J" },
                    { text: "Tới đâu hay tới đó", personality: "P" }
               ]
          },
          {
               question: "Trong công việc, bạn thường:",
               options: [
                    { text: "Làm việc theo thói quen", personality: "S" },
                    { text: "Hay thay đổi, thích thử nghiệm những điều mới", personality: "N" }
               ]
          },
          {
               question: "Bạn nghĩ mình là người:",
               options: [
                    { text: "Cởi mở, dễ gần", personality: "E" },
                    { text: "Kín tiếng, khó đoán", personality: "I" }
               ]
          },
          {
               question: "Khi viết lách, bạn có xu hướng:",
               options: [
                    { text: "Viết những áng văn bay bổng (thiên về nghĩa bóng)", personality: "N" },
                    { text: "Viết về những điều thực tế (thiên về nghĩa đen)", personality: "S" }
               ]
          },
          {
               question: "Là một cấp trên, bạn cảm thấy điều gì khó hơn?",
               options: [
                    { text: "Hiểu và chia sẻ với cấp dưới", personality: "F" },
                    { text: "Bỏ qua yếu tố cảm xúc, công việc là quan trọng nhất", personality: "T" }
               ]
          },
          {
               question: "Bạn cảm thấy mình cần trở nên:",
               options: [
                    { text: "Lý trí hơn", personality: "T" },
                    { text: "Tình cảm hơn", personality: "F" }
               ]
          },
          {
               question: "Điều gì khiến bạn khó chấp nhận hơn?",
               options: [
                    { text: "Hành động thiếu suy nghĩ, gây ra sai phạm lớn", personality: "F" },
                    { text: "Sự chỉ trích, phê phán nghiêm khắc quá mức", personality: "T" }
               ]
          },
          {
               question: "Bạn sẽ lựa chọn:",
               options: [
                    { text: "Sự kiện đã được lên kế hoạch trước", personality: "J" },
                    { text: "Sự kiện chưa được lên kế hoạch trước", personality: "P" }
               ]
          },
          {
               question: "Phong cách làm việc của bạn là gì?",
               options: [
                    { text: "Cân nhắc thận trọng", personality: "J" },
                    { text: "Tự nhiên, tự phát", personality: "P" }
               ]
          },
          {
               question: "Khi bạn cần giải quyết một vấn đề lớn, bạn thích làm gì?",
               options: [
                    { text: "Tôi thích làm việc một mình, suy nghĩ và tìm kiếm giải pháp từ bên trong.", personality: "I" },
                    { text: "Tôi thích thảo luận với người khác, chia sẻ ý kiến và nhận phản hồi từ họ.", personality: "E" }
               ]
          },
          {
               question: "Cuối tuần, bạn thường làm gì để giải tỏa căng thẳng hoặc tìm kiếm năng lượng?",
               options: [
                    { text: "Tôi thích ở nhà, đọc sách, xem phim hoặc thực hiện các hoạt động một mình.", personality: "I" },
                    { text: "Tôi thích gặp gỡ bạn bè, tham gia các sự kiện xã hội hoặc đi du lịch và tham gia vào các hoạt động ngoại khóa.", personality: "E" }
               ]
          },
          // Thêm các câu hỏi và lựa chọn khác tương tự ở đây
     ];

     const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(''));
     const [completed, setCompleted] = useState(false); // Trạng thái hoàn thành bài trắc nghiệm

     const handleAnswerClick = (index, personality) => {
          const newAnswers = [...userAnswers];
          newAnswers[index] = personality;
          setUserAnswers(newAnswers);
     };

     const restartQuiz = () => {
          setUserAnswers(new Array(questions.length).fill(''));
          setCompleted(false);
     };


     const getResult = () => {

          const personalityCounts = {
               E: 0,
               I: 0,
               T: 0,
               F: 0,
               N: 0,
               S: 0,
               J: 0,
               P: 0
          };

          userAnswers.forEach(personality => {
               personalityCounts[personality]++;
          });

          let result = '';

          // So sánh các cặp MBTI đối lập và ghép chúng để tạo thành loại MBTI hoàn chỉnh
          result += personalityCounts.E > personalityCounts.I ? 'E' : 'I';
          result += personalityCounts.S > personalityCounts.N ? 'S' : 'N';
          result += personalityCounts.T > personalityCounts.F ? 'T' : 'F';
          result += personalityCounts.J > personalityCounts.P ? 'J' : 'P';

          // Chuyển hướng dựa trên kết quả tính cách
          return result;
     };

     const isAllQuestionsAnswered = () => {
          return userAnswers.every(answer => answer !== '');
     };

     const answeredQuestionsCount = userAnswers.filter(answer => answer !== '').length;

     return (
          <div className="min-h-screen py-8">
               <div className="max-w-4xl mx-auto">
                    <ProgressLabelOutside completed={completed} answeredQuestionsCount={answeredQuestionsCount} totalQuestionsCount={questions.length} />
                    {questions.map((question, index) => (
                         <Card key={index} className="mb-8" >
                              <Card.Body>
                                   <div style={{ width: '100%' }}>
                                        <h2 className="text-lg font-medium mb-4" style={{ color: 'rgb(48 48 48)', fontSize: '28px', fontWeight: '700' }}>{index + 1}. {question.question}</h2>
                                        <div className="grid grid-cols-2 gap-4">
                                             {question.options.map((option, optionIndex) => (
                                                  <div key={optionIndex}
                                                       className="flex items-center hover:border-green-500 rounded-lg transition duration-300 p-2"
                                                       style={{ borderRadius: '24px', fontWeight: '500', border: '1px solid' }}
                                                  >
                                                       <Radio
                                                            color="black"
                                                            style={{ height: '25px', width: '25px', borderRadius: '50%', margin: '0' }}
                                                            id={`option-${index}-${optionIndex}`}
                                                            name={`question-${index}`}
                                                            value={option.personality}
                                                            icon={
                                                                 <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      className="h-3 w-3"
                                                                      viewBox="0 0 20 20"
                                                                      fill="currentColor"
                                                                      style={{ margin: 0 }}
                                                                 >
                                                                      <path
                                                                           fillRule="evenodd"
                                                                           d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                           clipRule="evenodd"
                                                                      />
                                                                 </svg>
                                                            }
                                                            checked={userAnswers[index] === option.personality}
                                                            onChange={() => handleAnswerClick(index, option.personality)}
                                                       />
                                                       <label style={{ fontWeight: '700', color: 'black', margin: '0' }} htmlFor={`option-${index}-${optionIndex}`} className="ml-2">{option.text}</label>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                              </Card.Body>
                         </Card>
                    ))}
                    {!completed ? (
                         <div className="text-center">
                              <button onClick={() => {
                                   if (isAllQuestionsAnswered()) {
                                        setCompleted(true);
                                   } else {
                                        alert('Vui lòng hoàn thành tất cả câu hỏi trước khi xem kết quả.');
                                   }
                              }} className="hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                   style={{ background: 'linear-gradient(273deg, rgb(68 32 206) 13.76%, rgb(38 180 205) 60.24%, rgb(207 12 208) 96.97%)', borderRadius: '50px', fontSize: '24px', width: '300px', height: '64px', border: '2px solid white' }}
                              >
                                   Xem kết quả
                              </button>
                         </div>
                    ) : (
                         <div className="text-center">
                              <h2 className="text-xl font-medium mb-4">Kết quả của bạn:</h2>
                              <p className="text-lg font-semibold mb-4">{getResult()}</p>
                              <button onClick={restartQuiz} className="bg-white border border-black hover:bg-black hover:text-white text-black font-semibold py-2 px-4 rounded"
                                   style={{ width: '300px', height: '64px', fontSize: '24px', borderRadius: '30px', border: '1px solid #ccc' }}>
                                   Làm lại bài trắc nghiệm
                              </button>
                         </div>
                    )}
               </div>
          </div >
     );
};

const ProgressLabelOutside = ({ completed, answeredQuestionsCount, totalQuestionsCount }) => {
     const percentage = ((answeredQuestionsCount / totalQuestionsCount) * 100).toFixed(1);
     const progressColor = completed ? 'bg-green-500' : 'bg-black'; // Màu của phần đã hoàn thành hoặc chưa hoàn thành

     return (
          <div className="w-full mb-8" style={{ background: 'linear-gradient(283deg, black, #646fef)', height: '80px', padding: '5px', position: 'fixed', zIndex: '72', left: '0', top: '0', right: '0' }}>
               <div className="flex items-center justify-between gap-4">
                    <Typography color="white" variant="h6">
                         Completed
                    </Typography>
                    <Typography color="white" variant="h6">
                         {completed ? '100%' : `${percentage}%`}
                    </Typography>
               </div>
               <div className="relative bg-gray-200 h-4 rounded-full overflow-hidden" style={{ background: 'white', width: '90%', margin: 'auto' }}>
                    <div className={`absolute left-0 top-0 h-full ${progressColor}`} style={{ width: completed ? '100%' : `${percentage}%` }}></div>
               </div>
          </div>
     );

};


export default Quiz;
