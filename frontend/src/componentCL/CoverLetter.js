import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import '../assert/cssCL/App1.css'

function CoverLetter () {

    const [data, setData] = useState([])
    const [caterogy, setCategory] = useState([])
    const [tableType, setTableType] = useState([])

    const regex = /\s/g;
    let [formModal, setFormModal] = useState({
        cvTitle: '',
        id: ''
    })

    useLayoutEffect(() => {
        getData()
        getCategory()
        getTableType()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/coverletter/');
            setData(response.data)
        } catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const getDataByType = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/category/${id}`);
            setData(response.data)
        } catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const getCategory = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/category/');
            setCategory(response.data)
        } catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const getTableType = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/category/tableType');
            setTableType(response.data)
        } catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const handleEditIframe = () => {
        var iframe = document.getElementById('template-preview-iframe');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        var tool = innerDoc.querySelector('.header_editor');
        var cvTitle = innerDoc.querySelector('#cv-title');
        var templateColor = document.querySelectorAll('.preview-modal-cv-template-color.js-template-color .template-cv-colors');
        
        tool.style.display = 'none'
        cvTitle.style.display = 'none'

        const setContentEDDIV = innerDoc.querySelectorAll('div')
        const setContentEDSPAN = innerDoc.querySelectorAll('span')
        setContentEDDIV.forEach((item) => {
            item.setAttribute('contenteditable', 'false')
        })
        setContentEDSPAN.forEach((item) => {
            item.setAttribute('contenteditable', 'false')
        })

        templateColor.forEach((color, index, colors) => {
            color.addEventListener('click', function() {
                colors.forEach(color => {
                    color.firstChild.style.visibility = 'hidden'
                  })
                  color.firstChild.style.visibility = 'visible'
              const change1 = innerDoc.querySelector('#App1 #col-left')
              const change2 = innerDoc.querySelector('#App2 #group-header')
              const change3 = innerDoc.querySelector('#App3 #cvo-profile-fullname')
              const change4 = innerDoc.querySelector('#App4 #cvo-profile-fullname')
              const change5a1 = innerDoc.querySelector('#App5 #cvo-profile-fullname')
              const change5a2 = innerDoc.querySelector('#App5 #topline')
              const change6 = innerDoc.querySelector('#App6 #group-header')
              if(change6){
                change6.style.backgroundColor = `${color.style.backgroundColor}`
              }else
              if(change1){
                change1.style.backgroundColor = `${color.style.backgroundColor}`
              }else
              if(change5a1 && change5a2) {
                change5a1.style.color = `${color.style.backgroundColor}`
                change5a2.style.borderBlockColor = `${color.style.backgroundColor}`
              }else
              if(change2){
                change2.style.backgroundColor = `${color.style.backgroundColor}`
              }else
              if(change3){
                change3.style.color = `${color.style.backgroundColor}`
              }else
              if(change4){
                change4.style.color = `${color.style.backgroundColor}`
              }
            })
          })
    }

    return (
        <>
            <div className="template-container-list container">
                <div className="template-container-head ">
                        <h1>Tổng hợp mẫu Cover Letter (thư xin việc) chuẩn độc đáo, Tải Top Mẫu Cover Letter Online miễn phí 2024</h1>
            
                        <p className="short-desc">Mẫu Cover Letter xin việc ấn tượng, thiết kế chuẩn theo ngành nghề cho sinh viên, người đi làm. Hỗ trợ đa ngôn ngữ miễn phí.</p>
                </div>
                <div id="template-container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="list-template-left fixed">
                            <div id="side-bar">
                                <div className="cv-filter-box">
                                <div className="box-filter">
                                    <h2>Tìm mẫu Cover Letter phù hợp</h2>
                                    <div className="form-group">
                                    <select
                                        className="form-control select2-hidden-accessible"
                                        id="language-selector"
                                        name="level"
                                        style={{ width: "100%" }}
                                        data-select2-id="language-selector"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        value={""}
                                    >
                                        <option value="vi" data-select2-id={6}>
                                        Tiếng Việt
                                        </option>
                                        <option value="en">Tiếng Anh</option>
                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--default"
                                        dir="ltr"
                                        data-select2-id={5}
                                        style={{ width: "100%" }}
                                    >
                                        <span className="selection">
                                        <span
                                            className="select2-selection select2-selection--single"
                                            role="combobox"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            tabIndex={0}
                                            aria-labelledby="select2-language-selector-container"
                                        >
                                            <span
                                            className="select2-selection__rendered"
                                            id="select2-language-selector-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="Tiếng Việt"
                                            >
                                            Tiếng Việt
                                            </span>
                                            <span
                                            className="select2-selection__arrow"
                                            role="presentation"
                                            >
                                            <b role="presentation" />
                                            </span>
                                        </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                    </div>
                                    <div className="form-group">
                                    <select
                                        className="form-control select2-hidden-accessible"
                                        id="category-selector"
                                        name="level"
                                        style={{ width: "100%" }}
                                        data-select2-id="category-selector"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                    >
                                        <option value="" data-select2-id={8}>
                                        Chọn ngành nghề
                                        </option>
                                        <option value={46}>Ngân hàng/ Tài Chính</option>
                                        <option value={30}>IT phần mềm</option>
                                        <option value={32}>Kế toán - Kiểm toán</option>
                                        <option value={33}>Khách sạn - Nhà hàng</option>
                                        <option value={73}>Tư vấn/ Chăm sóc khách hàng</option>
                                        <option value={79}>Xây dựng</option>
                                        <option value={42}>Marketing - PR</option>
                                        <option value={1}>Bán hàng</option>
                                        <option value={61}>Startup</option>
                                        <option value={48}>Nghệ thuật - Điện ảnh</option>
                                        <option value={60}>Sinh viên làm thêm</option>
                                        <option value={59}>Quản trị kinh doanh</option>
                                        <option value={58}>Quan hệ đối ngoại</option>
                                        <option value={57}>QA-QC/ Thẩm định/ Giám định</option>
                                        <option value={63}>Thiết kế - Mỹ thuật</option>
                                        <option value={56}>Promotion Girl/ Boy (PG-PB)</option>
                                        <option value={47}>Ngành nghề khác</option>
                                        <option value={55}>Phát triển thị trường</option>
                                        <option value={54}>Pháp luật/ Pháp lý</option>
                                        <option value={53}>Ô tô - Xe máy</option>
                                        <option value={52}>Nông - Lâm - Ngư nghiệp</option>
                                        <option value={51}>Kinh doanh</option>
                                        <option value={50}>Nhân sự</option>
                                        <option value={49}>Người giúp việc/ Phục vụ/ Tạp vụ</option>
                                        <option value={72}>Tổ chức sự kiện - Quà tặng</option>
                                        <option value={84}>Người Nước Ngoài/Việt Kiều</option>
                                        <option value={83}>Trắc Địa / Địa Chất</option>
                                        <option value={82}>Y tế - Dược</option>
                                        <option value={81}>Xuất khẩu lao động</option>
                                        <option value={80}>Xuất - Nhập khẩu</option>
                                        <option value={78}>Việc làm Tết</option>
                                        <option value={77}>Việc làm cấp cao</option>
                                        <option value={76}>Vật tư/Thiết bị/Mua hàng</option>
                                        <option value={75}>Nhân viên trông quán internet</option>
                                        <option value={74}>Vận tải - Lái xe/ Tài xế</option>
                                        <option value={62}>Thể dục/ Thể thao</option>
                                        <option value={71}>Tiếp thị - Quảng cáo</option>
                                        <option value={70}>Thương mại điện tử</option>
                                        <option value={69}>Thực tập</option>
                                        <option value={68}>Thực phẩm - Đồ uống</option>
                                        <option value={67}>Thư ký - Trợ lý</option>
                                        <option value={66}>Thủ công mỹ nghệ</option>
                                        <option value={65}>Thời trang</option>
                                        <option value={64}>Thiết kế đồ họa - Web</option>
                                        <option value={43}>Môi trường</option>
                                        <option value={11}>Công nghiệp</option>
                                        <option value={20}>Games</option>
                                        <option value={19}>Freelance</option>
                                        <option value={18}>Điện tử viễn thông</option>
                                        <option value={17}>Điện - Điện tử - Điện lạnh</option>
                                        <option value={16}>Đầu tư</option>
                                        <option value={15}>Du lịch</option>
                                        <option value={14}>Dịch vụ</option>
                                        <option value={13}>Dệt may - Da giày</option>
                                        <option value={12}>Dầu khí - Hóa chất</option>
                                        <option value={21}>Giáo dục - Đào tạo</option>
                                        <option value={10}>Công nghệ cao</option>
                                        <option value={9}>Công chức - Viên chức</option>
                                        <option value={8}>Cơ khí - Chế tạo</option>
                                        <option value={7}>Chứng khoán - Vàng</option>
                                        <option value={6}>Bưu chính</option>
                                        <option value={5}>Phiên dịch/ Ngoại ngữ</option>
                                        <option value={4}>Bảo vệ/ An ninh/ Vệ sỹ</option>
                                        <option value={3}>Bảo hiểm/ Tư vấn bảo hiểm</option>
                                        <option value={2}>Biên tập/ Báo chí/ Truyền hình</option>
                                        <option value={31}>In ấn - Xuất bản</option>
                                        <option value={44}>Mỹ phẩm - Trang sức</option>
                                        <option value={41}>Lương cao</option>
                                        <option value={40}>Lao động phổ thông</option>
                                        <option value={39}>Làm đẹp/ Thể lực/ Spa</option>
                                        <option value={38}>Làm bán thời gian</option>
                                        <option value={37}>Kỹ thuật ứng dụng</option>
                                        <option value={36}>Kỹ thuật</option>
                                        <option value={35}>Bất động sản</option>
                                        <option value={34}>Kiến trúc - Thiết kế nội thất</option>
                                        <option value={45}>Phi chính phủ/ Phi lợi nhuận</option>
                                        <option value={29}>IT phần cứng/mạng</option>
                                        <option value={28}>Hoạch định - Dự án</option>
                                        <option value={27}>Hóa học - Sinh học</option>
                                        <option value={26}>Hành chính - Văn phòng</option>
                                        <option value={25}>Hàng không</option>
                                        <option value={24}>Hàng hải</option>
                                        <option value={23}>Hàng gia dụng</option>
                                        <option value={22}>Giao nhận/ Vận chuyển/ Kho bãi</option>
                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--default"
                                        dir="ltr"
                                        data-select2-id={7}
                                        style={{ width: "100%" }}
                                    >
                                        <span className="selection">
                                        <span
                                            className="select2-selection select2-selection--single"
                                            role="combobox"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            tabIndex={0}
                                            aria-labelledby="select2-category-selector-container"
                                        >
                                            <span
                                            className="select2-selection__rendered"
                                            id="select2-category-selector-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="Chọn ngành nghề"
                                            >
                                            Chọn ngành nghề
                                            </span>
                                            <span
                                            className="select2-selection__arrow"
                                            role="presentation"
                                            >
                                            <b role="presentation" />
                                            </span>
                                        </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                    </div>
                                    <div className="form-group" id="style-selector-wrapper">
                                    <select
                                        className="form-control"
                                        id="style-selector"
                                        name="level"
                                        data-select2-id="style-selector"
                                        onChange={(e) => {
                                            if(e.target.value == -1){
                                                getData()
                                            }else getDataByType(e.target.value)
                                        }}
                                        style={{borderColor: '#e5e5e5', color: '#444'}}
                                    >
                                        <option value="-1">
                                        Tất cả thiết kế
                                        </option>
                                        {caterogy.map((item) => (
                                            <option className='select2-results__option' value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    
                                    </div>
                                </div>
                                <div id="order-box">
                                    <h2>Sắp xếp</h2>
                                    <div id="radio">
                                    <div className="radio-choose-active">
                                        <input
                                        type="radio"
                                        defaultChecked="checked"
                                        id="newest"
                                        name="radio"
                                        defaultValue={1}
                                        />
                                        <label htmlFor="newest">Mới cập nhật</label>
                                    </div>
                                    <div className="radio-choose-active">
                                        <input
                                        type="radio"
                                        id="most_popular"
                                        name="radio"
                                        defaultValue="hot"
                                        />
                                        <label htmlFor="most_popular">Được dùng nhiều nhất</label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div id="template-list">
                            <div
                                className="col-md-12"
                                id="templates-place-holder"
                                style={{ display: "none" }}
                            >
                                <div className="ph-grid">
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="ph-item ph-animation border-radius-2">
                                    <div
                                    className="ph-col-12"
                                    style={{ marginBottom: 0, padding: 0 }}
                                    >
                                    <div
                                        className="ph-picture"
                                        style={{ height: 250, marginBottom: 0 }}
                                    />
                                    </div>
                                    <div>
                                    <div
                                        className="ph-row"
                                        style={{ marginBottom: 0, paddingTop: 16 }}
                                    >
                                        <div className="ph-col-6" />
                                        <div className="ph-col-6 empty" />
                                        <div className="ph-col-8" />
                                        <div className="ph-col-4 empty" />
                                        <div className="ph-col-4" style={{ marginTop: 20 }} />
                                        <div
                                        className="ph-col-2"
                                        style={{
                                            marginTop: 20,
                                            position: "absolute",
                                            right: 15,
                                            bottom: 14,
                                            zIndex: 10,
                                            width: 40
                                        }}
                                        />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12" id="cover-letter-template-item">
                                <div className="row">
                                    {data.map(item => (
                                        <div className="col-md-6 col-lg-4 mt-4">
                                        <div className="template-cover-letter-item">
                                            <div className="new-template">
                                                <a href="https://123job.vn/cover-letter/mau-cover-letter-an-tuong-chuyen-nghiep-tieng-viet">
                                                <i className="fa fa-certificate" /> Mới
                                                </a>
                                            </div>
                                            <div className="cv-img">
                                                <span className="img">
                                                <img
                                                    className="img-responsive b-lazy b-loaded"
                                                    alt=""
                                                    width={450}
                                                    height={500}
                                                    src={`${item.img}`}
                                                />
                                                </span>
                                                <div className="cv-overlay">
                                                <div
                                                    className="btn btn-radius btn-show-detail js-show-detail preview"
                                                    onClick={() => {
                                                        setFormModal({
                                                            cvTitle: `${item.cvTitle}`,
                                                            id: `${item.id}`
                                                        })
                                                        const setModal = document.querySelector('.jquery-modal.blocker.current')
                                                        setModal.style.display = 'block'
                                                    }}
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-eye"></i>
                                                        Xem trước
                                                    </span>
                                                </div>
                                                <div
                                                    data-url="https://123job.vn/cover-letter/create/mau-cover-letter-an-tuong-chuyen-nghiep-tieng-viet"
                                                    className="btn btn-primary btn-radius js-create-cover-letter"
                                                    data-template="default"
                                                >
                                                    <span>
                                                    <i className="fa-solid fa-check"></i>
                                                    <Link to={`/create/${item.cvTitle.replace(regex, '-')}/${item.id}`} style={{color: '#fff'}}>
                                                        Dùng mẫu này
                                                    </Link>
                                                    </span>
                                                </div>
                                                </div>
                                                <div className="clearfix" />
                                            </div>
                                            <div className="template-cv-item-info">
                                                <div>
                                                    {tableType.map((type, index) => {
                                                        if(type.idFormCL == item.id){
                                                            return (
                                                                <a style={{cursor: 'pointer'}} className="template-cv-item-tag" onClick={() => {
                                                                    const cateValue = document.getElementById('style-selector')
                                                                    cateValue.value = type.idTypeDesign
                                                                    getDataByType(type.idTypeDesign)
                                                                }}>
                                                                    {caterogy[type.idTypeDesign - 1].name || ""}
                                                                </a>
                                                            ) 
                                                        }
                                                    })}
                                                <span className="label label-info mb">Miễn phí</span>
                                                </div>
                                                <p className="cv-title">
                                                <a
                                                    className="mr-2"
                                                    href="https://123job.vn/cover-letter/mau-cover-letter-an-tuong-chuyen-nghiep-tieng-viet"
                                                    title={item.cvTitle}
                                                >
                                                    {item.cvTitle}
                                                </a>
                                                </p>
                                                <div
                                                className="template-list-color"
                                                data-color='["#D81B60","#5E35B1","#1E88E5","#388E3C","#1976D2"]'
                                                >
                                                <div style={{ display: "flex" }}>
                                                    <div
                                                    className="template-cv-colors"
                                                    style={{ backgroundColor: "#D81B60" }}
                                                    ></div>
                                                    <div
                                                    className="template-cv-colors"
                                                    style={{ backgroundColor: "#5E35B1" }}
                                                    ></div>
                                                    <div
                                                    className="template-cv-colors"
                                                    style={{ backgroundColor: "#1E88E5" }}
                                                    ></div>
                                                    <div
                                                    className="template-cv-colors"
                                                    style={{ backgroundColor: "#388E3C" }}
                                                    ></div>
                                                </div>
                                                <span className="label label-info mbh">Miễn phí</span>
                                                <button className="btn btn-primary btn-not-radius use-now js-create-cover-letter">
                                                    <Link to={`/create/${item.cvTitle.replace(regex, '-')}/${item.id}`}>
                                                        Dùng mẫu này
                                                    </Link>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jquery-modal blocker current" style={{ display: "none" }} onClick={() => {
                const setModal = document.querySelector('.jquery-modal.blocker.current')
                setModal.style.display = 'none'

                var templateColor = document.querySelectorAll('.preview-modal-cv-template-color.js-template-color .template-cv-colors');
                templateColor.forEach(color => {
                    color.firstChild.style.visibility = 'hidden'
                })
            }}>
                <div className="modal" id="modal-preview-cover-letter" style={{ display: "inline-block" }} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="modal-body">
                        <div style={{ display: "flex" }}>
                        <div style={{ width: 850, float: "left", position: "relative" }}>
                            <div className="frame-container">
                            <iframe
                                id="template-preview-iframe"
                                className="iframe"
                                loading="lazy"
                                src={`http://localhost:3000/create/${formModal.cvTitle.replace(regex, '-')}/${formModal.id}`}
                                frameBorder={0}
                                height="800px"
                                width="100%"
                                onLoad={handleEditIframe}
                            ></iframe>
                            </div>
                            <div
                            id="loading-dots"
                            className="snippet"
                            data-title=".dot-falling"
                            style={{ display: "none" }}
                            >
                            <div className="stage">
                                <div className="dot-falling" />
                            </div>
                            </div>
                        </div>
                        <div
                            style={{
                            padding: "15px 0 15px 15px",
                            float: "left",
                            flex: "inherit",
                            width: 304
                            }}
                        >
                            <div className="preview-modal-template-name">{formModal.cvTitle}</div>
                            <div style={{ marginTop: 16, marginBottom: 16 }}>
                            <div className="preview-modal-selector-section">
                                <div className="modal-preview-section-label">Ngôn ngữ</div>
                                <div className="form-group">
                                <select
                                    className="form-control js-template-language select2-hidden-accessible"
                                    id="modal-preview-language-selector"
                                    data-select2-id="modal-preview-language-selector"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    <option value="vi" data-select2-id={2}>
                                    Tiếng Việt
                                    </option>
                                    <option value="en" data-select2-id={11}>
                                    Tiếng Anh
                                    </option>
                                    <option value="cn" data-select2-id={12}>
                                    Tiếng Trung
                                    </option>
                                    <option value="jp" data-select2-id={13}>
                                    Nhật Bản
                                    </option>
                                    <option value="kr" data-select2-id={14}>
                                    Hàn Quốc
                                    </option>
                                </select>
                                <span
                                    className="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id={34}
                                    style={{ width: "auto" }}
                                >
                                    <span className="selection">
                                    <span
                                        className="select2-selection select2-selection--single"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-labelledby="select2-modal-preview-language-selector-container"
                                    >
                                        <span
                                        className="select2-selection__rendered"
                                        id="select2-modal-preview-language-selector-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        />
                                        <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                        >
                                        <b role="presentation" />
                                        </span>
                                    </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                </span>
                                </div>
                            </div>
                            <div className="preview-modal-selector-section">
                                <div className="modal-preview-section-label">Font chữ</div>
                                <div className="form-group">
                                <select
                                    className="form-control js-template-font select2-hidden-accessible"
                                    id="modal-preview-font-selector"
                                    name="font"
                                    data-select2-id="modal-preview-font-selector"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                >
                                    <option value="" data-select2-id={4}>
                                    Chọn ngôn ngữ
                                    </option>
                                    <option value="roboto" data-select2-id={17}>
                                    Roboto
                                    </option>
                                    <option value="open_sans" data-select2-id={18}>
                                    Open sans
                                    </option>
                                    <option value="mitr" data-select2-id={19}>
                                    Mitr
                                    </option>
                                </select>
                                <span
                                    className="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id={35}
                                    style={{ width: "auto" }}
                                >
                                    <span className="selection">
                                    <span
                                        className="select2-selection select2-selection--single"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-labelledby="select2-modal-preview-font-selector-container"
                                    >
                                        <span
                                        className="select2-selection__rendered"
                                        id="select2-modal-preview-font-selector-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Chọn ngôn ngữ"
                                        >
                                        Chọn ngôn ngữ
                                        </span>
                                        <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                        >
                                        <b role="presentation" />
                                        </span>
                                    </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true" />
                                </span>
                                </div>
                            </div>
                            <div className="preview-modal-selector-section">
                                <div
                                className="modal-preview-section-label"
                                style={{ cursor: "pointer" }}
                                >
                                Màu sắc
                                </div>
                                <div className="preview-modal-color-selector">
                                <a
                                    className="preview-modal-cv-template-color js-template-color"
                                    data-color="#e53935"
                                >
                                    <div
                                    className="template-cv-colors"
                                    style={{ backgroundColor: "#e53935" }}
                                    >
                                    <i
                                        style={{ visibility: "hidden", color: "white" }}
                                        className="fa fa-check js-check"
                                    />
                                    </div>
                                </a>
                                <a
                                    className="preview-modal-cv-template-color js-template-color"
                                    data-color="#7CB342"
                                >
                                    <div
                                    className="template-cv-colors"
                                    style={{ backgroundColor: "#7CB342" }}
                                    >
                                    <i
                                        style={{ visibility: "hidden", color: "white" }}
                                        className="fa fa-check js-check"
    
                                    />
                                    </div>
                                </a>
                                <a
                                    className="preview-modal-cv-template-color js-template-color"
                                    data-color="#F4511E"
                                >
                                    <div
                                    className="template-cv-colors"
                                    style={{ backgroundColor: "#F4511E" }}
                                    >
                                    <i
                                        style={{ visibility: "hidden", color: "white" }}
                                        className="fa fa-check js-check"
    
                                    />
                                    </div>
                                </a>
                                <a
                                    className="preview-modal-cv-template-color js-template-color"
                                    data-color="#447ac4"
                                >
                                    <div
                                    className="template-cv-colors"
                                    style={{ backgroundColor: "#447ac4" }}
                                    >
                                    <i
                                        style={{ visibility: "hidden", color: "white" }}
                                        className="fa fa-check js-check"
    
                                    />
                                    </div>
                                </a>
                                <a
                                    className="preview-modal-cv-template-color js-template-color"
                                    data-color="#069ca4"
                                >
                                    <div
                                    className="template-cv-colors"
                                    style={{ backgroundColor: "#069ca4" }}
                                    >
                                    <i
                                        style={{ visibility: "hidden", color: "white" }}
                                        className="fa fa-check js-check"
    
                                    />
                                    </div>
                                </a>
                                </div>
                                <div style={{ clear: "both" }} />
                            </div>
                            </div>
                            <div className="preview-modal-button-wrapper">
                            <div>
                                <Link
                                to={`/create/${formModal.cvTitle.replace(regex, '-')}/${formModal.id}`}
                                id="preview-modal-select-cv-template"
                                className="btn btn-primary btn-not-radius js-preview-cover-letter-create"
                                >
                                <i className="fa fa-pencil" /> Dùng mẫu này
                                </Link>
                            </div>
                            <div>
                                <a className="btn btn-not-radius btn-gray preview-modal-close" rel="modal:close" onClick={e => {
                                    const setModal = document.querySelector('.jquery-modal.blocker.current')
                                    setModal.style.display = 'none'

                                    var templateColor = document.querySelectorAll('.preview-modal-cv-template-color.js-template-color .template-cv-colors');
                                    templateColor.forEach(color => {
                                        color.firstChild.style.visibility = 'hidden'
                                    })
                                }}>
                                Đóng lại
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CoverLetter;