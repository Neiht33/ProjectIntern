import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import Them1 from "./Thems/Them1";
import Them2 from "./Thems/Them2";
import Them3 from "./Thems/Them3";
import Them4 from "./Thems/Them4";
import Them5 from "./Thems/Them5";
import Them6 from "./Thems/Them6";

function Themsmain() {
  const [data, setData] = useState({});
  const [imgData, setImgData] = useState()
  const [urlIMG, setUrlIMG] = useState('http://localhost:8080/images/c3a1f6a82426f23d9d2954da86b11cca')
  let coverLetter = useRef({});

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

  const getData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/coverletter/create/${id}`);
      setData(response.data[0]);
      if(response.data[0].avatar != null){
        setUrlIMG(`http://localhost:8080/images/${response.data[0].avatar}`)
      }
    } catch (error) {
      console.error("Error axios data: ", error);
    }
  };

  const sendData = async (id) => {
    const avatarSrc = document.querySelector('#cvo-profile-avatar')
    if(avatarSrc != null) {
      avatarSrc.src = 'http://localhost:8080/images/c3a1f6a82426f23d9d2954da86b11cca'
    }
    const parentElement = document.getElementById("cvo-document-root"); // Thay 'parentElement' bằng id của phần tử cha
    const htmlString = parentElement.outerHTML;
    const titleCV = document.querySelector("#cv-title");
    const name = document.querySelector("#cvo-profile-fullname");
    const title = document.querySelector("#cvo-profile-title");
    const phone = document.querySelector("#cvo-profile-phone");
    const gmail = document.querySelector("#cvo-profile-email");
    const address = document.querySelector("#cvo-profile-address");
    const receiverFullname = document.querySelector("#cvo-receiver-fullname");
    const receiverTitle = document.querySelector("#cvo-receiver-title");
    const receiverCompany = document.querySelector("#cvo-receiver-company");
    const receiverAddress = document.querySelector("#cvo-receiver-address");
    const contentDate = document.querySelector("#cvo-content-date");
    const contentSubject = document.querySelector("#cvo-content-subject");
    const contentBody = document.querySelector("#cvo-content-body");

    coverLetter = {
      titleCV: `${titleCV.textContent}`,
      avatar: imgData,
      avatarImg: data.avatar,
      name: `${name.textContent}`,
      title: `${title.textContent}`,
      phone: `${phone.textContent}`,
      gmail: `${gmail.textContent}`,
      address: `${address.textContent}`,
      receiverFullname: `${receiverFullname.textContent}`,
      receiverTitle: `${receiverTitle.textContent}`,
      receiverCompany: `${receiverCompany.textContent}`,
      receiverAddress: `${receiverAddress.textContent}`,
      contentDate: `${contentDate.textContent}`,
      contentSubject: `${contentSubject.textContent}`,
      contentBody: `${contentBody.innerHTML}`,
      img: `${data.img}`,
      htmlBody: `${htmlString}`,
      idForm: id
    };

    console.log(coverLetter);

    axios.put(`http://localhost:8080/api/coverletter/create/${id}`, coverLetter, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
          // Xử lý kết quả từ server
          alert('Lưu thành công')
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
    
  };

  return (
    <>
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
                        <span style={{ marginRight: 4}}>Thiết kế</span>
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
                              style={{ backgroundColor: "rgb(216, 27, 96)" }}
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
                    onClick={(e) => {
                        sendData(data.id);
                    }}
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
      <Routes>
        <Route path="/Mẫu-Hiện-đại/:id" element={<Them6 data={data} getData={getData} setImgData={setImgData} urlIMG={urlIMG} setUrlIMG={setUrlIMG} />} />
        <Route path="/Mẫu-Thanh-lịch/:id" element={<Them5 data={data} getData={getData} setImgData={setImgData} urlIMG={urlIMG} setUrlIMG={setUrlIMG} />} />
        <Route path="/Mẫu-Cover-Letter-senior-tiếng-Việt/:id" element={<Them4 data={data} getData={getData}/>} />
        <Route path="/Mẫu-Chuyên-nghiệp/:id" element={<Them3 data={data} getData={getData}/>} />
        <Route path="/Mẫu-Chuyên-nghiệp-2/:id" element={<Them2 data={data} getData={getData}/>} />
        <Route path="/Mẫu-Cover-Letter-Ấn-tượng/:id" element={<Them1 data={data} getData={getData} setImgData={setImgData} urlIMG={urlIMG} setUrlIMG={setUrlIMG} />}/>
      </Routes>
    </>
  );
}

export default Themsmain;
