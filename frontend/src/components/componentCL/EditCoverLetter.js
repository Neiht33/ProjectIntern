import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios';

function EditCoverLetter ({}) {
    const {id} = useParams()
    const [updateUrlIMG, setUpdateUrlIMG] = useState()
    const [fileCurrent, setFileCurrent] = useState()
    const [data, setData] = useState({})
    let editForm = useRef({});

    useLayoutEffect(() => {
        getDataById(id)
    },[])

    useEffect(() => {
        const setHtml = document.querySelector('#cv-body')
        const setImg = document.querySelector('#imageEditorWraper') 
        setHtml.innerHTML = data.htmlBody
        setTimeout(() => {
            const avatar = document.querySelector('#cvo-profile-avatar')
            if(avatar !== null){
                avatar.addEventListener('click', function() {
                    setImg.style.display = 'block'
                    setUpdateUrlIMG(avatar.src)
                })
            }

            const parent = document.querySelector("#col-right");
            const parent2 = document.querySelector("#group-main");
            const tool = document.querySelector('.tool')
            const cvoReceiver = document.querySelector("#cvo-receiver");
            const cvoContent = document.querySelector("#cvo-content");
            cvoReceiver.appendChild(tool)
            const btnDown = tool.children[0]
            const btnUp = tool.children[1]
            cvoReceiver.addEventListener('mouseover', function() {
            tool.style.display = 'block'
            btnDown.addEventListener('click', function(e) {
                if(parent != null) {
                    parent.insertBefore(cvoContent, cvoReceiver)
                    btnDown.style.display = 'none'
                    btnUp.style.display = 'block'
                  }else {
                    parent2.insertBefore(cvoContent, cvoReceiver)
                    btnDown.style.display = 'none'
                    btnUp.style.display = 'block'
                  }
            })
            
            btnUp.addEventListener('click', function(e) {
                if(parent != null) {
                    parent.insertBefore(cvoReceiver, cvoContent)
                    btnDown.style.display = 'block'
                    btnUp.style.display = 'none'
                  }else {
                    parent2.insertBefore(cvoReceiver, cvoContent)
                    btnDown.style.display = 'block'
                    btnUp.style.display = 'none'
                  }
            })

            })

            cvoReceiver.addEventListener('mouseout', function() {
            tool.style.display = 'none'
            })
        }, 1000);

    },[data])

    useEffect(() => {
        const colors = document.querySelectorAll('.color')
        colors.forEach((color, index, colors) => {
          color.addEventListener('click', function() {
            colors.forEach(color => {
              color.firstChild.style.display = 'none'
            })
            color.firstChild.style.display = 'block'
            const change1 = document.querySelector('#App1 #col-left')
            const change2 = document.querySelector('#App2 #group-header')
            const change3 = document.querySelector('#App3 #cvo-profile-fullname')
            const change4 = document.querySelector('#App4 #cvo-profile-fullname')
            const change5a1 = document.querySelector('#App5 #cvo-profile-fullname')
            const change5a2 = document.querySelector('#App5 #topline')
            const change6 = document.querySelector('#App6 #group-header')
            if(change6){
              change6.style.backgroundColor = `${color.dataset.color}`
            }else
            if(change1){
              change1.style.backgroundColor = `${color.dataset.color}`
            }else
            if(change5a1 && change5a2) {
              change5a1.style.color = `${color.dataset.color}`
              change5a2.style.borderBlockColor = `${color.dataset.color}`
            }else
            if(change2){
              change2.style.backgroundColor = `${color.dataset.color}`
            }else
            if(change3){
              change3.style.color = `${color.dataset.color}`
            }else
            if(change4){
              change4.style.color = `${color.dataset.color}`
            }
          })
        })
      },)

    const getDataById = async (id) => {
        try{
            const response = await axios.get(`http://localhost:8080/api/storecoverletter/Preview/${id}`);
            setData(response.data[0])
            
        }catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const updateData = async (id) => {
        const avatar = document.querySelector('#cvo-profile-avatar')
        if(avatar !== null){
            avatar.src = 'http://localhost:8080/images/c3a1f6a82426f23d9d2954da86b11cca'
        }
        const app = document.querySelector('#cv-body')
        const htmlSave = app.innerHTML
        const setTitle = document.querySelector('#cv-title')
        editForm = {
            titleCV: `${setTitle.textContent}`,
            htmlBody: `${htmlSave}`,
            avatarEdit: fileCurrent
        }

        console.log(editForm);

        axios.put(`http://localhost:8080/api/storecoverletter/Edit/${id}`, editForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then(response => {
                // Xử lý kết quả từ server
                alert('Chỉnh sửa thành công')
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }

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
        <div id={`App${data.idForm}`}>
            <div className="header_editor">
                <div className="main-container">
                <div className="main">
                    <div className="main_tool">
                    <div className="block_tool">
                        <div className="item design">
                        <div className="item_list">
                            <a
                            className="js-popup-element item-list-theme intro-theme"
                            title="Thiết kế"
                            >
                            <span>
                                <span style={{ marginRight: 4 }}>Thiết kế</span>
                                <i
                                className="fa fa-angle-down ml-1"
                                aria-hidden="true"
                                />
                            </span>
                            <div className="color-recommend">
                                <div className="block-item">
                                <div className="item-list" style={{display: 'flex'}}>
                                    <span
                                    className="color"
                                    data-color="#D81B60"
                                    style={{ backgroundColor: "rgb(216, 27, 96)"}}
                                    >
                                    <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(4px)', color: '#fff'}}></i>
                                    </span>
                                    <span
                                    className="color"
                                    data-color="#5E35B1"
                                    style={{ backgroundColor: "rgb(94, 53, 177)" }}
                                    >
                                    <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(4px)', color: '#fff'}}></i>
                                    </span>
                                    <span
                                    className="color"
                                    data-color="#66bfc2"
                                    style={{ backgroundColor: "rgb(102, 191, 194)" }}
                                    >
                                    <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(4px)', color: '#fff'}}></i>
                                    </span>
                                    <span
                                    className="color"
                                    data-color="#069ca4"
                                    style={{ backgroundColor: "rgb(6, 156, 164)" }}
                                    >
                                    <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(4px)', color: '#fff'}}></i>
                                    </span>
                                    <span
                                    className="see-more-theme"
                                    style={{ background: "rgb(235, 235, 235)",display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"}}
                                    onClick={(e) => {
                                        document.querySelector('.block-popup').style.display = 'block'
                                    }}
                                    >
                                        <i class="fa-solid fa-plus" style={{display: "block !important", color: "rgb(51, 51, 51)",}}></i>
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div
                                className="block-popup js-block-popup theme-cl"
                                style={{ display: "none" }}
                            >
                                <div style={{ display: "flex", position: "relative" }}>
                                <div className="block-item scroll-bar-wrap color-theme">
                                    <div className="scroll-box">
                                    <div className="item-title">Màu sắc</div>
                                    <div
                                        className="item-list"
                                        id="list-color"
                                        data-color-old="#00897B"
                                    >
                                        <span
                                        className="color"
                                        data-color="#e53935"
                                        style={{
                                            backgroundColor: "rgb(229, 57, 53)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#D81B60"
                                        style={{
                                            backgroundColor: "rgb(216, 27, 96)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#5E35B1"
                                        style={{
                                            backgroundColor: "rgb(94, 53, 177)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#3949AB"
                                        style={{
                                            backgroundColor: "rgb(57, 73, 171)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#1E88E5"
                                        style={{
                                            backgroundColor: "rgb(30, 136, 229)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#039BE5"
                                        style={{
                                            backgroundColor: "rgb(3, 155, 229)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#00ACC1"
                                        style={{
                                            backgroundColor: "rgb(0, 172, 193)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#00897B"
                                        style={{
                                            backgroundColor: "rgb(0, 137, 123)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#43A047"
                                        style={{
                                            backgroundColor: "rgb(67, 160, 71)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#7CB342"
                                        style={{
                                            backgroundColor: "rgb(124, 179, 66)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#F4511E"
                                        style={{
                                            backgroundColor: "rgb(244, 81, 30)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#d32f2f"
                                        style={{
                                            backgroundColor: "rgb(211, 47, 47)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#C2185B"
                                        style={{
                                            backgroundColor: "rgb(194, 24, 91)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#303F9F"
                                        style={{
                                            backgroundColor: "rgb(48, 63, 159)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#1976D2"
                                        style={{
                                            backgroundColor: "rgb(25, 118, 210)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#0288D1"
                                        style={{
                                            backgroundColor: "rgb(2, 136, 209)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#0097A7"
                                        style={{
                                            backgroundColor: "rgb(0, 151, 167)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#00796B"
                                        style={{
                                            backgroundColor: "rgb(0, 121, 107)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#388E3C"
                                        style={{
                                            backgroundColor: "rgb(56, 142, 60)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#c62828"
                                        style={{
                                            backgroundColor: "rgb(198, 40, 40)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#333333"
                                        style={{ backgroundColor: "rgb(51, 51, 51)" }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#263238"
                                        style={{ backgroundColor: "rgb(38, 50, 56)" }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#447ac4"
                                        style={{
                                            backgroundColor: "rgb(68, 122, 196)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#5b555f"
                                        style={{ backgroundColor: "rgb(91, 85, 95)" }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#6eaecd"
                                        style={{
                                            backgroundColor: "rgb(110, 174, 205)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#66bfc2"
                                        style={{
                                            backgroundColor: "rgb(102, 191, 194)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#069ca4"
                                        style={{
                                            backgroundColor: "rgb(6, 156, 164)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#34bcc0"
                                        style={{
                                            backgroundColor: "rgb(52, 188, 192)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#eacec4"
                                        style={{
                                            backgroundColor: "rgb(234, 206, 196)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#bcdfc1"
                                        style={{
                                            backgroundColor: "rgb(188, 223, 193)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#db7164"
                                        style={{
                                            backgroundColor: "rgb(219, 113, 100)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#cec1cd"
                                        style={{
                                            backgroundColor: "rgb(206, 193, 205)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#84d8f1"
                                        style={{
                                            backgroundColor: "rgb(132, 216, 241)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#c9aab2"
                                        style={{
                                            backgroundColor: "rgb(201, 170, 178)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#ea6042"
                                        style={{
                                            backgroundColor: "rgb(234, 96, 66)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#194052"
                                        style={{ backgroundColor: "rgb(25, 64, 82)" }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#ffb900"
                                        style={{
                                            backgroundColor: "rgb(255, 185, 0)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#d6d856"
                                        style={{
                                            backgroundColor: "rgb(214, 216, 86)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#f4cccc"
                                        style={{
                                            backgroundColor: "rgb(244, 204, 204)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#fce5cd"
                                        style={{
                                            backgroundColor: "rgb(252, 229, 205)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#fff2cc"
                                        style={{
                                            backgroundColor: "rgb(255, 242, 204)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#d9ead3"
                                        style={{
                                            backgroundColor: "rgb(217, 234, 211)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#d0e0e3"
                                        style={{
                                            backgroundColor: "rgb(208, 224, 227)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#cfe2f3"
                                        style={{
                                            backgroundColor: "rgb(207, 226, 243)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#d9d2e9"
                                        style={{
                                            backgroundColor: "rgb(217, 210, 233)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#ead1dc"
                                        style={{
                                            backgroundColor: "rgb(234, 209, 220)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#f3f6f4"
                                        style={{
                                            backgroundColor: "rgb(243, 246, 244)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#eeeeee"
                                        style={{
                                            backgroundColor: "rgb(238, 238, 238)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                        <span
                                        className="color"
                                        data-color="#e5e4e9"
                                        style={{
                                            backgroundColor: "rgb(229, 228, 233)",
                                        }}
                                        >
                                        <i class="fa-solid fa-check" style={{display: 'none', margin: 'auto', transform: 'translateY(6px)', color: '#fff'}}></i>
                                        </span>
                                    </div>
                                    </div>
                                    <div className="cover-bar" />
                                </div>
                                {/**/}
                                </div>
                            </div>
                            </a>
                            <a
                            href="javascript:void(0)"
                            className="js-popup-element item-list-font intro-font"
                            title="Font chữ"
                            >
                            <span>Font chữ</span>
                            <div className="options">
                                <select
                                name="font"
                                id="font-selector"
                                tabIndex={-1}
                                className="select2-hidden-accessible"
                                aria-hidden="true"
                                >
                                <option value="roboto">Roboto</option>
                                <option value="open_sans">Open sans</option>
                                <option value="mitr">Mitr</option>
                                </select>
                            </div>
                            </a>
                            <a
                            href="javascript:;void(0)"
                            className="js-popup-element item-list-spacing intro-font-size"
                            title="Cỡ chữ"
                            >
                            <span>Cỡ chữ</span>
                            <div className="options">
                        <span className="fontsize small" style={{fontSize: '10px'}} onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.fontSize = '13px'
                          const editActiveSmall = document.querySelector('.fontsize.small')
                          const editActiveNormal = document.querySelector('.fontsize.normal')
                          const editActiveLarge = document.querySelector('.fontsize.large')
                          editActiveSmall.classList.add("active")
                          editActiveNormal.classList.remove("active")
                          editActiveLarge.classList.remove("active")
                        }}>
                          <i className="fa fa-font" data-size="small" />
                        </span>
                        <span className="fontsize normal active" style={{fontSize: '14px'}} onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.fontSize = '14px'
                          const editActiveSmall = document.querySelector('.fontsize.small')
                          const editActiveNormal = document.querySelector('.fontsize.normal')
                          const editActiveLarge = document.querySelector('.fontsize.large')
                          editActiveNormal.classList.add("active")
                          editActiveSmall.classList.remove("active")
                          editActiveLarge.classList.remove("active")
                        }}>
                          <i className="fa fa-font" data-size="normal" />
                        </span>
                        <span className="fontsize large" style={{fontSize: '18px'}} onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.fontSize = '15px'
                          const editActiveSmall = document.querySelector('.fontsize.small')
                          const editActiveNormal = document.querySelector('.fontsize.normal')
                          const editActiveLarge = document.querySelector('.fontsize.large')
                          editActiveLarge.classList.add("active")
                          editActiveSmall.classList.remove("active")
                          editActiveNormal.classList.remove("active")
                        }}>
                          <i className="fa fa-font" data-size="large" />
                        </span>
                      </div>
                            </a>
                            <a
                            href="javascript:void(0)"
                            className="js-popup-element item-list-spacing intro-spacing"
                            title="Dãn dòng"
                            >
                            <span>Dãn dòng</span>
                            <div className="options">
                        <span className="line-height small" style={{fontSize: '10px'}} onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.lineHeight = '18px'
                          const editActiveSmall = document.querySelector('.line-height.small')
                          const editActiveNormal = document.querySelector('.line-height.normal')
                          const editActiveLarge = document.querySelector('.line-height.large')
                          editActiveSmall.classList.add("active")
                          editActiveNormal.classList.remove("active")
                          editActiveLarge.classList.remove("active")
                        }}>
                          <i className="fa fa-arrows-v" data-spacing="small" />
                        </span>
                        <span className="line-height normal active" onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.lineHeight = '1.5'
                          const editActiveSmall = document.querySelector('.line-height.small')
                          const editActiveNormal = document.querySelector('.line-height.normal')
                          const editActiveLarge = document.querySelector('.line-height.large')
                          editActiveNormal.classList.add("active")
                          editActiveSmall.classList.remove("active")
                          editActiveLarge.classList.remove("active")
                        }}>
                          <i className="fa fa-arrows-v" data-spacing="normal" />
                        </span>
                        <span className="line-height large" style={{fontSize: '18px'}} onClick={() => {
                          const editSize = document.getElementById('cvo-body')
                          editSize.style.lineHeight = '24px'
                          const editActiveSmall = document.querySelector('.line-height.small')
                          const editActiveNormal = document.querySelector('.line-height.normal')
                          const editActiveLarge = document.querySelector('.line-height.large')
                          editActiveLarge.classList.add("active")
                          editActiveNormal.classList.remove("active")
                          editActiveSmall.classList.remove("active")
                        }}>
                          <i className="fa fa-arrows-v" data-spacing="large" />
                        </span>
                      </div>
                            </a>
                            <a
                            href="javascript:void(0)"
                            className="js-popup-element item-list-template intro-block"
                            title="Thêm mục"
                            >
                            <div>
                                <span>Thêm mục </span>
                                <div className="options">
                                <i className="fa fa-plus-circle" />
                                </div>
                            </div>
                            </a>
                            <div
                            id="layout-editor-container"
                            data-v-2826cf86=""
                            style={{ display: "none" }}
                            >
                            <div id="layout-editor" data-v-2826cf86="">
                                <p className="note-user" data-v-2826cf86="">
                                * Tích chọn mục bạn muốn hiển thị ra Cover Letter.{" "}
                                <br data-v-2826cf86="" /> * Giữ chuột tại một mục và
                                kéo thả để thay đổi thứ tự các mục.
                                </p>
                                <div
                                className="list-group scroll-bar-wrap"
                                data-v-2826cf86=""
                                >
                                <div className="scroll-box" data-v-2826cf86="">
                                    {/**/}
                                    <div className="group" data-v-2826cf86="">
                                    <div
                                        className="block"
                                        data-key="cvo-receiver"
                                        data-draggable="true"
                                        data-v-2826cf86=""
                                    >
                                        <div
                                        className="selector"
                                        data-active="true"
                                        data-key="cvo-receiver"
                                        data-v-2826cf86=""
                                        >
                                        <i
                                            className="fa fa-check active"
                                            data-active="true"
                                            data-key="cvo-receiver"
                                            data-v-2826cf86=""
                                        />
                                        </div>
                                        <span data-v-2826cf86="">
                                        Thông tin người nhận
                                        </span>
                                        <span
                                        className="js-action-drag"
                                        data-v-2826cf86=""
                                        >
                                        <i
                                            className="fa fa-bars"
                                            data-v-2826cf86=""
                                        />
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <div className="cover-bar" data-v-2826cf86="" />
                                </div>
                                <div
                                className="action-layouts text-center"
                                data-v-2826cf86=""
                                >
                                <div className="bulk-actions" data-v-2826cf86="">
                                    <a
                                    href="javascript:void(0)"
                                    data-type="fresh"
                                    className="js-refresh-layout"
                                    data-v-2826cf86=""
                                    >
                                    <i className="fa fa-bars" data-v-2826cf86="" /> Bố
                                    cục mặc định
                                    </a>
                                    <a
                                    href="javascript:void(0)"
                                    data-type="select-all"
                                    className="js-select-all"
                                    data-v-2826cf86=""
                                    >
                                    <i
                                        className="fa fa-check-square"
                                        data-v-2826cf86=""
                                    />{" "}
                                    Chọn hết
                                    </a>
                                    <a
                                    href="javascript:void(0)"
                                    data-type="remove-all"
                                    className="js-un-select-all"
                                    data-v-2826cf86=""
                                    >
                                    <i className="fa fa-square" data-v-2826cf86="" />{" "}
                                    Bỏ chọn hết
                                    </a>
                                </div>
                                <div className="form-action" data-v-2826cf86="">
                                    <a
                                    href="javascript:void(0)"
                                    className="btn btn-sm btn-gray js-close-layout"
                                    data-v-2826cf86=""
                                    >
                                    Đóng
                                    </a>
                                    <a
                                    href="javascript:void(0)"
                                    className="btn btn-sm btn-primary js-update-layout"
                                    data-v-2826cf86=""
                                    >
                                    Cập nhật
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <a
                            href="javascript:void(0)"
                            className="js-popup-element item-list-template intro-change-template"
                            title="Đổi mẫu"
                            data-step={6}
                            data-title="Hướng dẫn"
                            data-intro="- Bấm vào và chọn mẫu mà bạn muốn thay đổi."
                            >
                            <div>
                                <span>Đổi mẫu</span>
                                <div className="options">
                                    <i className="fa-regular fa-copy"></i>
                                </div>
                            </div>
                            </a>
                        </div>
                        </div>
                        <div className="item item-overlay item-action item-download">
                        <a
                            id="save__cv"
                            className="save-cl"
                            href="http://localhost:3000/Cover-Letter-list" 
                            onClick={() => {updateData(id)}}
                        >
                            <span className="item_title">
                            <span>Lưu</span>
                            <div className="options">
                                <i className="fa-regular fa-floppy-disk"></i>
                            </div>
                            </span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="editContent" onClick={() => {document.querySelector('.block-popup').style.display = 'none'}}>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div id="cv-title" className="non-printable" blockkey="title_cv" fieldkey="cvtitle" contenteditable="true" name="cvoData[title_cv]" cvo-validatable="true" cvo-validation-errors="{}" maxLength="64" cvo-placeholder="Tiêu đề Cover Letter">
                            {data.titleCV}
                    </div>
                </div>
                <div id="cv-body"></div>
            </div>
            <div className='tool' style={{display:'none', position: 'absolute', top: '-28px', left: '0'}}>
                          <button type='button'><i class="fa-solid fa-caret-down"></i></button>
                          <button type='button' style={{display: 'none'}}><i class="fa-solid fa-sort-up"></i></button>
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
                        const avatar = document.querySelector('#cvo-profile-avatar')
                        avatar.src = updateUrlIMG
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
    );
}

export default EditCoverLetter;