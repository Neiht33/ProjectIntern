import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import "../../../assert/cssCL/Tool.css"
import "./Them6.css";

function Them6 ({getData, data, setImgData, urlIMG, setUrlIMG}) {
    let { id } = useParams();
    const [updateUrlIMG, setUpdateUrlIMG] = useState('')
    const [fileCurrent, setFileCurrent] = useState()

    useLayoutEffect(() => {
        getData(id);
      }, []);
      
    useEffect(() => {
      const setHtml = document.querySelector("#cvo-content-body");
      setHtml.innerHTML = data.contentBody;

      const parent = document.querySelector("#group-main");
        const cvoReceiver = document.querySelector("#cvo-receiver");
        const cvoContent = document.querySelector("#cvo-content");
        const tool = document.querySelector(".tool");
        const btnDown = tool.children[0]
        const btnUp = tool.children[1]
        cvoReceiver.addEventListener('mouseover', function() {
        tool.style.display = 'block'
        btnDown.addEventListener('click', function(e) {
            parent.insertBefore(cvoContent, cvoReceiver)
            btnDown.style.display = 'none'
            btnUp.style.display = 'block'
        })
        
        btnUp.addEventListener('click', function(e) {
            parent.insertBefore(cvoReceiver, cvoContent)
            btnDown.style.display = 'block'
            btnUp.style.display = 'none'
        })

        })

        cvoReceiver.addEventListener('mouseout', function() {
        tool.style.display = 'none'
        })

    }, [data]);

    const onChange = ({ fileList: newFileList }) => {
        setFileCurrent(newFileList[newFileList.length-1].originFileObj);
        setTimeout(() => {
          const avatarUp = document.querySelector('.ant-upload-list-item-thumbnail')
          setUpdateUrlIMG(avatarUp.href)
        }, 1000);
    };
  
    const handleExitEditIMG = () => {
      const close = document.getElementById('imageEditorWraper')
      close.style.display = 'none'
    }

    return (
        <div id="App6" onClick={() => {document.querySelector('.block-popup').style.display = 'none'}}>
            <div id="cv-data">
                <div style={{display: "flex", justifyContent: "center" }}>
                    <div
                        id="cv-title"
                        className="non-printable"
                        blockkey="title_cv"
                        fieldkey="cvtitle"
                        contentEditable="true"
                        name="cvoData[title_cv]"
                        cvo-validatable="true"
                        cvo-validation-errors="{}"
                        maxLength={64}
                        cvo-placeholder="Tiêu đề Cover Letter"
                    >
                        {data.titleCV}
                    </div>
                </div>
                <div id="cvo-document-root">
                    <div id="cvo-document" className="cvo-document">
                    <div className="cvo-page">
                        <div className="cvo-subpage">
                        <div id="cvo-body">
                            <div id="group-header" cvo-block-group="true">
                            <div className="cvo-col-9">
                                <div id="cvo-profile-fullname-wraper">
                                <span
                                    id="cvo-profile-fullname"
                                    name="cvoData[profile][fullname]"
                                    type="text"
                                    blockkey="profile"
                                    fieldkey="fullname"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={64}
                                    cvo-placeholder="Họ và tên"
                                >
                                    {data.name}
                                </span>
                                </div>
                                <div id="cvo-profile-title-wraper">
                                <span
                                    id="cvo-profile-title"
                                    className="color-content default_min_width"
                                    name="cvoData[profile][title]"
                                    type="text"
                                    blockkey="profile"
                                    fieldkey="title"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={512}
                                    cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển"
                                >
                                    {data.title}
                                </span>
                                </div>
                            </div>
                            <div className="cvo-col-3">
                                <div id="cvo-profile-avatar-wraper">
                                <img
                                    id="cvo-profile-avatar"
                                    src={`${urlIMG}`}
                                    value="2024_04_02______1d373e3a17f2dac5d86340785d69d380.png"
                                    alt="avatar"
                                    name="cvoData[profile][avatar]"
                                    type="image"
                                    cvo-form-field="true"
                                    blockkey="profile"
                                    fieldkey="avatar"
                                    onClick={() => {
                                        const close = document.getElementById('imageEditorWraper')
                                        close.style.display = 'block'
                                        setUpdateUrlIMG(urlIMG)
                                    }}  
                                />
                                </div>
                            </div>
                            </div>
                            <div id="group-top">
                            <div
                                className="cvo-block"
                                id="cvo-profile"
                                cvo-form-block="true"
                                style={{ display: "block" }}
                            >
                                <span id="cvo-profile-address-wraper">
                                <span
                                    id="cvo-profile-address"
                                    name="cvoData[profile][address]"
                                    type="text"
                                    blockkey="profile"
                                    fieldkey="address"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={1024}
                                    cvo-placeholder="Địa chỉ hiện tại"
                                    style={{marginRight: '30px'}}
                                >
                                    {data.address}  
                                </span>
                                </span>
                                <span id="cvo-profile-phone-wraper">
                                <span
                                    id="cvo-profile-phone"
                                    name="cvoData[profile][phone]"
                                    type="text"
                                    blockkey="profile"
                                    fieldkey="phone"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={256}
                                    cvo-placeholder="Số điện thoại"
                                    style={{marginRight: '30px'}}
                                >
                                    {data.phone}
                                </span>
                                </span>
                                <span id="cvo-profile-email-wraper">
                                <span
                                    id="cvo-profile-email"
                                    name="cvoData[profile][email]"
                                    type="text"
                                    blockkey="profile"
                                    fieldkey="email"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={512}
                                    cvo-placeholder="Địa chỉ email"
                                >
                                    {data.gmail}
                                </span>
                                </span>
                            </div>
                            </div>
                            <div id="cvo-main">
                            <div id="group-main" cvo-block-group="true">
                                <div
                                className="cvo-block"
                                id="cvo-receiver"
                                cvo-form-block="true"
                                style={{ display: "block" }}
                                >
                                <p>
                                    <span
                                    id="cvo-receiver-fullname"
                                    name="cvoData[receiver][fullname]"
                                    type="text"
                                    blockkey="receiver"
                                    fieldkey="fullname"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={64}
                                    cvo-placeholder="Kính gửi: Ông/Bà ..."
                                    >
                                    {data.receiverFullname}
                                    </span>
                                </p>
                                <p>
                                    <span
                                    id="cvo-receiver-title"
                                    name="cvoData[receiver][title]"
                                    type="text"
                                    blockkey="receiver"
                                    fieldkey="title"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={512}
                                    cvo-placeholder=" Chức danh / Phòng ban"
                                    >
                                    {data.receiverTitle}
                                    </span>
                                </p>
                                <p>
                                    <span
                                    id="cvo-receiver-company"
                                    name="cvoData[receiver][company]"
                                    type="text"
                                    blockkey="receiver"
                                    fieldkey="company"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={512}
                                    cvo-placeholder=" Tên công ty"
                                    >
                                    {data.receiverCompany}
                                    </span>
                                </p>
                                <p>
                                    <span
                                    id="cvo-receiver-address"
                                    name="cvoData[receiver][address]"
                                    type="text"
                                    blockkey="receiver"
                                    fieldkey="address"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={1024}
                                    cvo-placeholder=" Địa chỉ"
                                    >
                                    {data.receiverAddress}
                                    </span>
                                </p>
                                <div className='tool' style={{display:'none', position: 'absolute', top: '-28px', left: '0'}}>
                                    <button type='button'><i class="fa-solid fa-caret-down"></i></button>
                                    <button type='button' style={{display: 'none'}}><i class="fa-solid fa-sort-up"></i></button>
                                </div>
                                </div>
                                <div
                                id="cvo-content"
                                className="cvo-block"
                                cvo-form-block="true"
                                style={{ display: "block" }}
                                >
                                <div id="date-wraper">
                                    <span
                                    id="cvo-content-date"
                                    name="cvoData[content][date]"
                                    type="text"
                                    blockkey="content"
                                    fieldkey="date"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={128}
                                    cvo-placeholder="Ngày ... Tháng .. Năm ...."
                                    >
                                    {data.contentDate}
                                    </span>
                                </div>
                                <div id="subject-wraper">
                                    <span
                                    id="cvo-content-subject"
                                    name="cvoData[content][subject]"
                                    type="text"
                                    blockkey="content"
                                    fieldkey="subject"
                                    className="default_min_width"
                                    cvo-form-field="true"
                                    contentEditable="true"
                                    cvo-validatable="true"
                                    cvo-validation-errors="{}"
                                    maxLength={1024}
                                    cvo-placeholder="Thư ứng tuyển [Vị trí công việc]"
                                    >
                                    {data.contentSubject}
                                    </span>
                                </div>
                                <div id="body-wraper">
                                    <div className="row-details">
                                    <div
                                        id="cvo-content-body"
                                        name="cvoData[content][body]"
                                        type="text"
                                        blockkey="content"
                                        fieldkey="body"
                                        className="default_min_width"
                                        cvo-form-field="true"
                                        contentEditable="true"
                                        cvo-validatable="true"
                                        cvo-validation-errors="{}"
                                        maxLength={32768}
                                        cvo-placeholder="Nội dung thư"
                                    >
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        {data.name}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div style={{ clear: "both" }} />
                            </div>
                            <div style={{ clear: "both" }} />
                        </div>
                        <div id="cv-watermark">© jobsnew.vn</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="imageEditorWraper" style={{ display: "none" }}>
                <div className="container">
                <h3>Tải ảnh đại diện</h3>
                <div className="editor-col-left">
                    <h4>Ảnh gốc tải lên</h4>
                    <div className="imageEditor">
                    <img id="image-preview" src="" />
                    </div>
                    <div className="editorChooseImage">
                    <label
                        htmlFor="image-upload-change-two"
                        className="btn-choose-image"
                        title="Tải ảnh lên"
                    >
                        <ImgCrop rotationSlider showGrid>
                            <Upload
                                maxCount={1}
                                action="http://localhost:8080/"
                                listType="picture-card"
                                onChange={onChange}
                            >
                                Click chọn ảnh để tải lên!
                            </Upload>
                        </ImgCrop>
                    </label>
                    </div>
                    <div className="image-controls js-image-controls">
                    <div className="image-control-group">
                        <button className="image-control-btn js-zoom-in-image">
                        <i className="fa fa-search-plus" />
                        </button>
                        <button className="image-control-btn js-zoom-out-image">
                        <i className="fa fa-search-minus" />
                        </button>
                    </div>
                    <div className="image-control-group">
                        <button className="image-control-btn js-rotate-left-image">
                        <i className="fa fa-undo" />
                        </button>
                        <button className="image-control-btn js-btn-rotate-right-image">
                        <i className="fa fa fa-repeat" />
                        </button>
                    </div>
                    </div>
                    <div className="tipCompress">
                    Nếu ảnh của bạn có dung lượng trên 3MB, vui lòng{" "}
                    <a href="https://compressor.io/compress" target="_blank">
                        bấm vào đây
                    </a>{" "}
                    để giảm dung lượng ảnh.
                    </div>
                </div>
                <div className="editor-col-right">
                    <h4>Ảnh hiển thị</h4>
                    <div className="imageEditorControls">
                    <div className="img-edit-preview">
                        <img
                        id="img-loading"
                        style={{ height: "160px !important" }}
                        src={`${updateUrlIMG}`}
                        alt=""
                        />
                    </div>
                    <div className="edit-image-btns" style={{ display: "block" }}>
                        <button type="button" className="btn-remove-image" style={{width: '160px'}} onClick={() => {setUpdateUrlIMG('/static/media/avatar-trang-4.2140d3ad59844593604f.jpg')}}>
                        Xóa ảnh
                        </button>
                        <br />
                    </div>
                    <div>
                        <button type="button" className="btn-save-image js-save-image-resume" onClick={() => {
                        setUrlIMG(updateUrlIMG)
                        setImgData(fileCurrent)
                        const close = document.getElementById('imageEditorWraper')
                        close.style.display = 'none'
                        }}>
                        <span /> Xong
                        </button>
                        <a
                        className="close_upload close-cancel"
                        title="Đóng trình chỉnh sửa (Không lưu thay đổi)"
                        onClick={handleExitEditIMG}
                        >
                        Đóng lại (Không lưu)
                        </a>
                    </div>
                    <form
                        action=""
                        method="post"
                        id="saveEditedAvatar"
                        style={{ display: "none" }}
                    >
                        <input type="hidden" name="cropx" id="dataX" defaultValue={0} />{" "}
                        <input type="hidden" name="cropy" id="dataY" defaultValue={0} />
                        <input type="hidden" name="cropw" id="dataWidth" defaultValue={280} />
                        <input
                        type="hidden"
                        name="croph"
                        id="dataHeight"
                        defaultValue={280}
                        />
                        <input type="hidden" name="rotate" id="dataRotate" defaultValue={0} />
                        <input type="hidden" name="tile" id="dataTile" defaultValue={1} />
                        <input
                        type="hidden"
                        name="cv_alias"
                        id="cv_alias"
                        defaultValue="Half"
                        />
                    </form>
                    </div>
                </div>
                <div style={{ clear: "both" }} />
                <a className="close_upload" onClick={handleExitEditIMG}>
                    <i class="fa-solid fa-xmark"></i>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Them6;