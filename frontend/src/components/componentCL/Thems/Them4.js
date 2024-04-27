import { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Them4.css'

function Them4({getData, data}) {
    let {id} = useParams()

    useLayoutEffect(() => {
        getData(id)
    },[])

    useEffect(() => {
        const setHtml = document.querySelector('#cvo-content-body')
        setHtml.innerHTML = data.contentBody

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

    },[data])

    return (
        <div id='App4' onClick={() => {document.querySelector('.block-popup').style.display = 'none'}}>
            <div id="cv-data">
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                            <div
                                id="cvo-profile"
                                className="cvo-block"
                                cvo-form-block="true"
                                style={{ display: "block" }}
                            >
                                <p>
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
                                </p>
                                <span
                                id="cvo-profile-title"
                                cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển"
                              >
                              </span>
                                <p>
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
                                >
                                    {data.address}
                                </span>
                                </p>
                                <p>
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
                                >
                                    {data.phone}
                                </span>
                                </p>
                                <p>
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
                                </p>
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
                                    ><br/><br/><br/><br/>{data.name}
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
        </div>
    )
}

export default Them4;