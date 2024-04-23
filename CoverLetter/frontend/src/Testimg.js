import React, { useEffect, useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import html2PDF from 'jspdf-html2canvas';

function App2() {
  const componentRef = useRef(null);
  const [test, setTest] = useState()

  const handleExportImage = () => {
    htmlToImage.toPng(componentRef.current)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
  }

  function saveAsPDF(){
    let randomString = generateRandomString(10)
    html2PDF(componentRef.current, {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: `./pdf/generate.pdf`,
      html2canvas: {
        scrollX: 0,
        scrollY: -window.scrollY,
      },
    });
  }
  
  // const handleChangeImg = (event) => {
  //   const file = event.target.files[0]; // Lấy tệp ảnh đầu tiên từ sự kiện
  //   setFileCurrent(file)
  //   if (file) {
  //       var reader = new FileReader(); // Tạo một đối tượng FileReader
  //       reader.onload = function(file) {
  //           const imageUpdate = file.target.result; // Lấy đường dẫn dữ liệu của ảnh
  //           setUpdateUrlIMG(imageUpdate)
  //         };
  //       };
  //       reader.readAsDataURL(file); // Đọc tệp ảnh và chuyển đổi nó thành một URL dữ liệu
  // }

  useEffect(() => {
    const test = document.querySelectorAll('#E1')
    const container = document.querySelector('#container')
    const tool = document.querySelector('.tool')
    test.forEach((item, index, list) => {
      item.addEventListener('mouseover', function() {
        tool.style.display = 'block'
        item.appendChild(tool)
        tool.classList.add(`${index}`)
        const buttonUP = tool.firstChild
        const buttonDOWN = tool.children[1]
        buttonUP.addEventListener('click', function() {
          if(index > 0) {
            container.insertBefore(list[index-1], item)
          }
        })
        buttonDOWN.addEventListener('click', function() {
          if(index < list.length-1) {
            container.insertBefore(list[index+1], item)
          }
        })
      })
      item.addEventListener('mouseout', function() {
        tool.style.display = 'none'
      })
    })
  }, [])

  return (
    <div id='container'>
      <div id='E1' style={{display:'flex', width:'100%'}}>
        Hello<br></br>
        1
      </div>
      <div id='E1' style={{display:'flex'}}>
        Peter<br></br>
        2  
      </div>
      <div id='E1' style={{display:'flex'}}>
        Phú Ngu<br></br>
        3  
      </div>
      <div className='tool' style={{display:'none'}}>
        <button type='button'>Up</button>
        <button type='button'>Down</button>
      </div>
    </div>
  );
}

export default App2;
