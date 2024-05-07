-- Table: public.formCL

-- DROP TABLE IF EXISTS public."formCL";

CREATE TABLE IF NOT EXISTS public."formCL"
(
    id integer NOT NULL DEFAULT nextval('"formCL_id_seq"'::regclass),
    img text COLLATE pg_catalog."default",
    "cvTitle" text COLLATE pg_catalog."default",
    avatar text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    gmail text COLLATE pg_catalog."default",
    address text COLLATE pg_catalog."default",
    "receiverFullname" text COLLATE pg_catalog."default",
    "receiverTitle" text COLLATE pg_catalog."default",
    "receiverCompany" text COLLATE pg_catalog."default",
    "receiverAddress" text COLLATE pg_catalog."default",
    "contentDate" text COLLATE pg_catalog."default",
    "contentSubject" text COLLATE pg_catalog."default",
    "contentBody" text COLLATE pg_catalog."default",
    "titleCV" text COLLATE pg_catalog."default",
    CONSTRAINT "formCL_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."formCL"
    OWNER to postgres;

-- Table: public.storeCL

-- DROP TABLE IF EXISTS public."storeCL";

CREATE TABLE IF NOT EXISTS public."storeCL"
(
    id integer NOT NULL DEFAULT nextval('"storeCL_id_seq"'::regclass),
    "imgForm" text COLLATE pg_catalog."default",
    "titleCV" text COLLATE pg_catalog."default",
    "htmlBody" text COLLATE pg_catalog."default",
    "idForm" integer,
    "dateSave" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    avatar text COLLATE pg_catalog."default",
    CONSTRAINT "storeCL_pkey" PRIMARY KEY (id),
    CONSTRAINT "idForm_FK" FOREIGN KEY ("idForm")
        REFERENCES public."formCL" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."storeCL"
    OWNER to postgres;

-- Trigger: update_timestamp_trigger

-- DROP TRIGGER IF EXISTS update_timestamp_trigger ON public."storeCL";

CREATE OR REPLACE TRIGGER update_timestamp_trigger
    BEFORE UPDATE 
    ON public."storeCL"
    FOR EACH ROW
    EXECUTE FUNCTION public.update_timestamp();

-- Table: public.tableTypeForm

-- DROP TABLE IF EXISTS public."tableTypeForm";

CREATE TABLE IF NOT EXISTS public."tableTypeForm"
(
    id integer NOT NULL DEFAULT nextval('"tableTypeForm_id_seq"'::regclass),
    "idFormCL" integer,
    "idTypeDesign" integer,
    CONSTRAINT "tableTypeForm_pkey" PRIMARY KEY (id),
    CONSTRAINT "fk_idFormCL" FOREIGN KEY ("idFormCL")
        REFERENCES public."formCL" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "fk_idTypeDesign" FOREIGN KEY ("idTypeDesign")
        REFERENCES public."typeDesignCL" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."tableTypeForm"
    OWNER to postgres;

-- Table: public.typeDesignCL

-- DROP TABLE IF EXISTS public."typeDesignCL";

CREATE TABLE IF NOT EXISTS public."typeDesignCL"
(
    id integer NOT NULL DEFAULT nextval('"TypeDesignCL_id_seq"'::regclass),
    name text COLLATE pg_catalog."default",
    CONSTRAINT "TypeDesignCL_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."typeDesignCL"
    OWNER to postgres;

INSERT INTO public."formCL" VALUES ('1', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______0534b413cd763728788166adc6f5bc76.png', 'Mẫu Cover Letter Ấn tượng','a97eab9dc78f6293f44d20a5a7bca86f',
'Bùi Quốc Thiên','Web Developer','0886409254','jobsnew@gmail.com',
'New York, United States','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','[Tên công ty]',
'[Địa chỉ]','Ngày 3 tháng 5 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Join Smith
                                        ','ReactJS',);

INSERT INTO public."formCL" VALUES ('2', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______3f92a7acc4e7eb89a5e1074de74881ea.png', 'Mẫu Chuyên nghiệp 2','undefined',
'Bùi Quốc Thiên','Web Developer','0988888889','jobsnew@gmail.com',
'New York, United States','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','jobsnew',
'[Địa chỉ]','Ngày 22 tháng 04 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Bùi Quốc Thiên<br>','IT',);

INSERT INTO public."formCL" VALUES ('3', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______54cdd02fa03453e3187a39c851f74173.png', 'Mẫu Chuyên nghiệp','undefined',
'Bùi Quốc Thiên','','0886409254','jobsnew@gmail.com',
'Cần Thơ','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','[Tên công ty]',
'[Địa chỉ]','Ngày 15 tháng 04 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Bùi Quốc Thiên','Hướng dẫn viên',);

INSERT INTO public."formCL" VALUES ('4', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______da55b9474fd64da0f3f7aa28591fc680.png', 'Mẫu Cover Letter senior tiếng Việt','undefined',
'Bùi Quốc Thiên','','0886409254','jobsnew@gmail.com',
'Cần Thơ','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','[Tên công ty]',
'[Địa chỉ]','Ngày 22 tháng 04 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Bùi Quốc Thiên','CEO',);

INSERT INTO public."formCL" VALUES ('5', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______55a2296aee0548c2a21a96f989b448b0.png', 'Mẫu Thanh lịch','2ec9aaef716705819b661cf247866c27',
'Bùi Quốc Thiên','Web Developer','0886409254','jobsnew@gmail.com',
'New York, United States','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','[Tên công ty]',
'[Địa chỉ]','Ngày 9 tháng 04 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Join Smith
                                        ','Tester',);

INSERT INTO public."formCL" VALUES ('6', 'https://cdn1.123job.vn/123job/cover_letter_thumbnail/2022/01/23/2022_01_23______416ff706ad65d04042c1084c2534762a.png', 'Mẫu Hiện đại','06e57051a082b34d2a5d508066388101',
'Bùi Quốc Thiên','Web Developer','0886409254','jobsnew@gmail.com',
'New York, United States','Kính gửi: Ông/Bà [Tên]','[Vị trí / Phòng ban]','[Tên công ty]',
'[Địa chỉ]','Ngày 9 tháng 04 năm 2024','Thư ứng tuyển [Vị trí công việc]',
'
                                            Thưa ông/bà [Tên],<br><br>Thông qua …, tôi
                        được biết Quý Công ty đang cần tuyển vị trí [Tên vị trí công việc] Tôi mong
                        muốn được thử sức mình trong môi trường làm việc hết sức năng động của Quý
                        Công ty. Với trình độ và kinh nghiệm hiện có, tôi tự tin có thể đảm nhiệm
                        tốt vai trò này tại công ty [Tên công ty].<br><br>Như đã đề cập trong hồ sơ
                        đính kèm, tôi có nhiều kinh nghiệm làm việc với các công ty … ở vị trí …. Vị
                        trí này đã cho tôi…. [bạn viết ra những kinh nghiệm nổi trội phù hợp với vị
                        trí ứng tuyển] với thành tích [bạn nêu thành tích tốt nhất bạn có được].
                        Ngoài ra, tôi còn có kinh nghiệm về … trong suốt thời gian làm việc với công
                        ty …. – chuyên kinh doanh các mặt hàng … Là một trong nhiều sinh viên tốt
                        nghiệp hàng đầu của trường Đại Học …, tôi hoàn toàn tự tin với vốn kiến thức
                        về lĩnh vực … của mình.<br><br>Thêm vào đó, tôi có một năm kinh nghiệm làm
                        việc cho một công ty kinh doanh … ở vị trí … sau khi tốt nghiệp. Tôi tin
                        rằng đó là những nền tảng quý báu có thể giúp tôi hiểu rõ và đáp ứng tốt nhu
                        cầu khách hàng của Quý Công ty.<br><br>Cám ơn ông/bà đã dành thời gian quý
                        báu để xem xét thư xin việc này. Tôi rất mong ông/bà có thể sắp xếp một cuộc
                        phỏng vấn trực tiếp gần đây nhất để tôi có thể trình bày rõ hơn về bản thân
                        cũng như tìm hiểu thêm các yêu cầu chi tiết cho vị trí [Tên vị trí công
                        việc] của [Tên công ty].<br><br>Trân trọng. Xin cảm ơn!<br><br><br><br>Join Smith
                                        ','Management',);

INSERT INTO public."tableTypeForm" VALUES ('1', '1', '3');
INSERT INTO public."tableTypeForm" VALUES ('2', '1', '4');
INSERT INTO public."tableTypeForm" VALUES ('3', '2', '1');
INSERT INTO public."tableTypeForm" VALUES ('4', '2', '2');
INSERT INTO public."tableTypeForm" VALUES ('5', '3', '1');
INSERT INTO public."tableTypeForm" VALUES ('6', '3', '4');
INSERT INTO public."tableTypeForm" VALUES ('7', '4', '2');
INSERT INTO public."tableTypeForm" VALUES ('8', '4', '6');
INSERT INTO public."tableTypeForm" VALUES ('9', '5', '7');
INSERT INTO public."tableTypeForm" VALUES ('10', '5', '5');
INSERT INTO public."tableTypeForm" VALUES ('11', '6', '4');
INSERT INTO public."tableTypeForm" VALUES ('12', '6', '6');

INSERT INTO public."typeDesignCL" VALUES ('1', 'Thanh Lịch');
INSERT INTO public."typeDesignCL" VALUES ('2', 'Sáng Tạo');
INSERT INTO public."typeDesignCL" VALUES ('3', 'Trang Trọng');
INSERT INTO public."typeDesignCL" VALUES ('4', 'Chuyên Nghiệp');
INSERT INTO public."typeDesignCL" VALUES ('5', 'Đơn Giản');
INSERT INTO public."typeDesignCL" VALUES ('6', 'Màu Sắc');
INSERT INTO public."typeDesignCL" VALUES ('7', 'Truyền Thống');
