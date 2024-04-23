import React from "react";
import {
     Card,
     Menu,
     MenuHandler,
     MenuList,
     MenuItem,
     Button,
} from "@material-tailwind/react";

export default function MBTI() {
     const cardData = [
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/istj.png?v=2",
               title: "ISTJ - Người Trách Nhiệm",
               slogan: "Người tổ chức có trách nhiệm, biết sắp xếp trật tự",
               content: "ISTJ nổi tiếng là những người cần mẫn và có trách nhiệm, một khi đã cam kết thì họ sẽ cố gắng làm cho đến cùng. Logic, thành thật và có nguyên tắc là ba đặc điểm nổi trội nhất chúng ta có thể bắt gặp ở các ISTJ. Trong đời sống thường nhật, ISTJ thường là tuýp người hướng nội nhưng họ sẵn sàng cho bạn những lời khuyên hữu ích khi bạn cần đến họ."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/isfp.png?v=2",
               title: "ISFP - Người Nghệ Sĩ",
               slogan: "Đam mê và trân trọng thực tại, biết lắng nghe và quan tâm",
               content: "Ẩn dưới vẻ ngoài trầm lặng, ISFP sở hữu một trái tim tràn đầy nhiệt huyết của người nghệ sĩ. Họ vừa hướng nội vừa hướng ngoại, dễ vui dễ buồn, khó đoán và tự phát. ISFP cũng là người yêu tự do và đam mê trải nghiệm, biết lắng nghe và quan tâm đến những người xung quanh."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/infp.png?v=2",
               title: "INFP - Người Lý Tưởng Hoá",
               slogan: "Giàu trí tưởng tượng, đề cao giá trị và niềm tin của bản thân",
               content: "Các INFP khá điềm tĩnh, thậm chí có phần nhút nhát và cả nể, rất ngại từ chối người khác. Tuy vậy, ẩn sâu bên trong họ là một tâm hồn nồng nhiệt và đam mê bất diệt. Các INFP sống có lý tưởng, có mục đích, họ biết mình cần gì, muốn gì và nên làm gì. Chủ nghĩa cá nhân cũng là một đặc điểm nổi bật ở những người thuộc nhóm tính cách INFP."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/intj.png?v=2",
               title: "INTJ -  Nhà Khoa Học",
               slogan: "Phân tích - giải quyết vấn đề hiệu quả, có năng khiếu với cải thiện hệ thống và quy trình",
               content: "INTJ được xem là nhóm tính cách bí ẩn và thông minh nhất. Họ thường đóng vai trò “chìa khóa” giải quyết vấn đề trong những tình huống hóc búa. Tinh thần lạc quan, luôn nhìn vào mặt tích cực khiến các INTJ có thể nhìn ra điểm sáng ngay cả trong những tình cảnh “éo le” nhất. Những người thuộc nhóm tính cách INTJ có tinh thần học hỏi cao, không ngừng khai phá những giới hạn mới của bản thân để tạo ra sự đổi mới tích cực cho môi trường xung quanh."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/isfj.png?v=2",
               title: "ISFJ - Người Nuôi Dưỡng",
               slogan: "Trung thành, sẵn sàng hi sinh vì người khác",
               content: "ISFJ là nhóm tính cách phổ biến và đặc biệt toả sáng với lòng vị tha luôn đong đầy. Các ISFJ như những tấm khiên vững chắc nhất, sẵn sàng hi sinh vì những người mà họ yêu thương và trân quý. ISFJ đồng thời cũng có khả năng thấu cảm sâu sắc, có khả năng tạo nên một bầu không gian yên bình, ấm áp và an tâm tuyệt đối cho những người ở cạnh bên."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/istp.png?v=2",
               title: "ISTP - Nhà Kỹ Thuật",
               slogan: "Tư duy nhanh nhạy, quan sát tốt, phát hiện và giải quyết vấn đề nhanh gọn",
               content: "ISTP là nhóm tính cách tôn thờ sự logic. Họ dành nhiều thời gian để quan sát và đánh giá mọi vật mọi việc dựa trên bằng chứng và lý lẽ, kể cả trong chuyện tình cảm. ISTP cũng là tuýp người thiên về trường phái “làm nhiều hơn nói”, có khả năng ứng phó với những tình huống bất ngờ và xử lý khủng hoảng một cách xuất sắc."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/infj.png?v=2",
               title: "ISFJ - Người Che Chở",
               slogan: "Nuôi dưỡng những lý tưởng đúng đắn, cầu toàn, coi trọng sự toàn diện và đề cao tính chính trực",
               content: "INFJ là những người có tư duy sâu sắc và vô cùng nhạy bén trong việc nắm bắt tâm lý của người khác. Họ sở hữu lòng trắc ẩn vĩ đại, tràn đầy khát vọng mãnh liệt về một thế giới tốt đẹp hơn. Chính vì vậy, các INFJ luôn đặt tâm huyết vào việc xây dựng mối quan hệ, coi việc giúp đỡ, động viên người khác như một phần không thể thiếu trong cuộc sống."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/intp.png?v=2",
               title: "INTP - Nhà Tư Duy",
               slogan: "Thông thái, triết lý, chỉ tin vào logic",
               content: "INTP là những người yêu thích tìm tòi về thế giới xung quanh, về nhân sinh và vũ trụ. Giống với nhóm ISTP, các INTP cũng đánh giá sự vật sự việc và ra quyết định dựa trên tư duy logic thay vì cảm xúc hay ý kiến chủ quan. Những Nhà tư duy có khả năng tập trung cao độ và thích một mình tìm tòi về thế giới, họ muốn hoàn thiện bản thân ở tất cả những lĩnh vực mà mình yêu thích."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/enfj.png?v=2",
               title: "ENFJ - Người Cho Đi",
               slogan: "Lý tưởng hóa, có sức ảnh hưởng lớn, mưu cầu những điều tốt nhất cho tập thể",
               content: "Nhóm tính cách ENFJ là những người có khả năng tác động mạnh tới người khác thông qua cả hành động lẫn lời nói. Họ là những người tham vọng nhưng không hề tư lợi mà luôn hướng đến mục tiêu và lợi ích chung của cộng đồng. Đặc biệt, khả năng thấu hiểu và đồng cảm mạnh mẽ khiến các ENFJ trở thành nhân tố quan trọng trong những lĩnh vực liên quan tới con người."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/entj.png?v=2",
               title: "ENTJ - Nhà Điều Hành",
               slogan: "Kỹ năng lãnh đạo xuất sắc, lấy thay đổi làm động lực",
               content: "ENTJ là những nhà lãnh đạo bẩm sinh, giỏi quan sát và đưa ra nhận định, cũng như luôn tìm ra những hướng giải quyết tối ưu cho vấn đề. Với khả năng phân tích và suy luận tốt, các ENTJ không ngừng đưa ra những ý tưởng mới. Nhóm tính cách này cũng thể hiện vai trò của mình trong việc sắp xếp, lãnh đạo và quản lý con người để đạt được mục tiêu chung."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/esfj.png?v=2",
               title: "ESFJ - Người Quan Tâm",
               slogan: "Tận tụy, thích giúp đỡ mọi người xung quanh",
               content: "ESFJ là nhóm tính cách nổi tiếng hòa đồng, thân thiện, hào phóng và tận tâm. Họ sẵn sàng giúp đỡ những người xung quanh như thể đó là vấn đề của chính bản thân họ. ESFJ là những người coi trọng nguyên tắc và những giá trị truyền thống, có nề nếp và yêu thương gia đình hết mực."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/estj.png?v=2",
               title: "ESTJ - Người Giám Hộ",
               slogan: "Theo đuổi chủ nghĩa làm việc siêng năng, tận tâm và nỗ lực hết mình để đạt được thành quả trong công việc",
               content: "Họ là những Người giám hộ với tinh thần nỗ lực không ngừng nghỉ trong mọi khía cạnh của cuộc sống. Những người thuộc nhóm tính cách ESTJ yêu thích những giá trị truyền thống, thượng tôn pháp luật, luôn làm việc dựa trên lý thuyết thực tiễn và logic. Trong công việc, ESTJ là nhóm tính cách có phương pháp xử lý công việc nhanh và hiệu quả nhất."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/enfp.png?v=2",
               title: "ENFP - Người Truyền Cảm Hứng",
               slogan: "Lấy con người làm trung tâm sáng tạo, luôn tràn đầy năng lượng và cảm hứng",
               content: "ENFP là nhóm tính cách nổi bật với khả năng sáng tạo không giới hạn, sẵn sàng lan tỏa những ý tưởng mới tới những người xung quanh. Các ENFP nhiệt tình, ấm áp và khá “quấn người”. Đối với họ, cuộc sống là để khám phá và tận hưởng từng phút giây, từng khoảnh khắc."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/entp.png?v=2",
               title: "ENTP - Người Nhìn Xa",
               slogan: "Không ngừng sáng tạo - đổi mới, luôn tìm kiếm giải pháp cho các vấn đề thách thức",
               content: "Nhóm tính cách ENTP là những cá nhân cởi mở, ham học hỏi, thích khám phá và thử thách bản thân với những điều mới. ENTP là những người thân thiện đầy cuốn hút, hoạt ngôn, thích tranh luận, góp phần tạo nên bầu không khí đầy hứng khởi cho những người xung quanh. ENTP cũng xởi lởi và rất dễ kết giao bạn bè, tuy nhiên để đi tới mức độ gắn kết sâu sắc thì còn tùy thuộc vào mỗi cá nhân."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/esfp.png?v=2",
               title: "ESFP - Người Trình Diễn",
               slogan: "Hoạt bát, yêu đời, đặt trải nghiệm là ưu tiên hàng đầu trong cuộc sống, có sức hút lớn với mọi người xung quanh",
               content: "Đối với các ESFP, cuộc sống là sàn catwalk và họ chính là tâm điểm chú ý của mọi cuộc vui. Tuy ham vui là vậy nhưng bản chất của các ESFP vẫn là những người có trái tim ấm áp, biết quan tâm và giúp đỡ người khác. Họ biết lắng nghe và đồng cảm với vấn đề của những người xung quanh."
          },
          {
               imageSrc: "https://www.topcv.vn/images/mbti/web/estp.png?v=2",
               title: "ESTP - Người Thực Thi",
               slogan: "Nhiệt tình, ưa cảm giác mạnh, sẵn sàng vượt qua ranh giới và lao vào hành động",
               content: "Là những cá nhân năng động và hoạt bát, các ESTP rất yêu những hoạt động thể chất. Điều đó cũng được thể hiện rất rõ trong việc giải quyết vấn đề một cách dứt khoát và nhanh chóng của họ. Những Người thực thi luôn mang trong mình tinh thần lạc quan bất diệt, “always look on the bright side”."
          }
     ];


     return (
          <div style={{ background: 'linear-gradient(180deg,#01543a,#20a35e)' }}>
               <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '85%', height: '100vh', margin: 'auto', borderRadius: '30px', background: 'WHITE' }}>
                    <div>
                         <Button variant="outlined"><i className="fa-solid fa-arrow-left"></i>  Trang chủ MBTI</Button>
                    </div>
                    <div>
                         {/* Sử dụng component Menu để tạo dropdown menu */}
                         <Menu>
                              <MenuHandler>
                                   <Button variant="filled">
                                        Chọn một loại MBTI <i className="fa-solid fa-chevron-down"></i>
                                   </Button>
                              </MenuHandler>
                              <MenuList className="flex flex-wrap">
                                   {cardData.map((card, index) => (
                                        <MenuItem key={card.title} className="w-1/4 p-2">
                                             <div>
                                                  <Card
                                                       className="w-full h-[80px] bg-clip-border rounded-xl bg-white text-gray-700 shadow-md flex flex-row"
                                                       style={{ borderRadius: '20px' }}
                                                  >
                                                       <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
                                                            style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}
                                                       >
                                                            <img src={card.imageSrc} alt="card-image" className="object-cover w-full h-full" />
                                                       </div>
                                                       <div className="p-2 flex-1" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <h4 className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                                 {card.title}
                                                            </h4>
                                                       </div>
                                                  </Card>
                                             </div>
                                        </MenuItem>
                                   ))}
                              </MenuList>

                         </Menu>
                    </div>
                    <div>
                         <i className="fa-solid fa-link"></i>
                    </div>
               </div>
          </div>
     );
}        