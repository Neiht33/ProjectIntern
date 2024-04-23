import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes  } from 'react-router-dom';
import axios from 'axios';
import html2PDF from 'jspdf-html2canvas';
import { format } from 'date-fns-tz';
import '../css/Preview.css'

function StoreCoverLetter () {

    const [data, setData] = useState([])
    const componentRef = useRef(null);

    useEffect(() => {
        getData()
    }, [])

    const formatDate = (date) => {
        const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'Asia/Ho_Chi_Minh' });
        return formattedDate
    }

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/storecoverletter/');
            setData(response.data)
        } catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    const deleteCoverLetter = async (id) => {
        const isConfirmed = window.confirm('Bạn có chắc muốn xóa không?');
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:8080/api/storecoverletter/${id}`)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result);
                    })
                    .catch(error => {
                        console.error('Error:', error);

                    });
                getData();
            } catch (error) {
                console.log('Đã xảy ra lỗi:', error);
            }
        } else {
            console.log('Hủy xóa');
        }

    }

    function copyHTML(id) {
        const htmlFake = document.querySelector('#fakeHTML')
        var newDiv = document.createElement('div');
        newDiv.id = `App${data[id].idForm}`; 
        newDiv.innerHTML = data[id].htmlBody
        htmlFake.appendChild(newDiv)
        saveAsPDF();
        setTimeout(() => {
            htmlFake.innerHTML = ''
        },2000)
    }

    function saveAsPDF(){
        html2PDF(componentRef.current, {
          jsPDF: {
            format: 'a4',
          },
          imageType: 'image/jpeg',
          output: `./pdf/generate.pdf`
        });
    }

    return (
        <>
            <div className="box-group box-cv" style={{backgroundColor: '#fafafa'}}>
                <div className="box-group-header">
                    <div className="row">
                        <div className="box-group-title col-sm-6 col-md-9">
                            <span>Danh sách Cover Letter</span>
                        </div>
                        <div className="box-group-toolbox col-sm-6 col-md-3 text-right">
                            <Link to={'/'} className="btn btn-primary btn-not-radius btn-create-cv">
                                <span className="fa fa-plus-circle"></span>
                                Tạo mới
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="box-group-body">
                    <div id="cv-list">
                        {data.map((item, index) => (
                            <div className="box-white cv no-gutter ">
                                <span className="show-action-mb"><i className="fa fa-ellipsis-h"></i></span>
                                <div className="d-flex">
                                    <div className="col-sm-3 col-cv-thumb">
                                        <Link to={`/Cover-Letter-list/Preview/${item.id}`} target="_blank" className="cv-thumb">
                                            <img src={`${item.imgForm}`} className="img-responsive" alt="Untitled Cover Letter"/>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-9 col-cv-data">
                                        <div className="clearfix">
                                            <h4 className="cv-title">
                                                <Link to={`/Cover-Letter-list/Preview/${item.id}`} target="_blank" className="text-highlight bold">{item.titleCV}</Link>
                                            </h4>
                                            <span className="cv-date text-dark">
                                                <i aria-hidden="true" className="fa-regular fa-clock"></i>
                                                {formatDate(item.dateSave)}
                                            </span>
                                        </div>
                                        <div className="cv-url text-dark">
                                            <label htmlFor="">
                                                <input type="text" readOnly="readonly" value={`http://localhost:3000/Cover-Letter-list/Preview/${item.id}`}/>
                                            </label>
                                            <a className="copy js-copy-cv" data-toggle="tooltip" title="Copy" data-url={`http://localhost:3000/Cover-Letter-list/Preview/${item.id}`}><i className="fa fa-clone" aria-hidden="true"></i></a>
                                        </div>
                                        <ul className="cv-action text-dark-gray">
                                            <li>
                                                <Link to={`/Cover-Letter-list/Preview/${item.id}`} target="_blank" className="btn btn-sm btn-not-radius">
                                                    <i className="fa fa-eye"></i> Xem
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="btn btn-sm btn-not-radius btn-download-cover-letter" onClick={() => copyHTML(index)}>
                                                    <i className="fa fa-download"></i>
                                                    Tải xuống
                                                </a>
                                            </li>
                                            <li>
                                                <Link to={`/Cover-Letter-list/Edit/${item.id}`} className="btn btn-sm btn-not-radius">
                                                    <i className="fa fa-pencil"></i>
                                                    Sửa
                                                </Link>
                                            </li>
                                            <li>
                                                <button className={`btn btn-sm btn-not-radius js-delete-cover-letter ${index}`} onClick={() => deleteCoverLetter(item.id)}>
                                                    <i className="fa fa-trash"></i>
                                                    Xóa
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="cv-action-mb text-dark-gray show">
                                    <li>
                                        <a target="_blank" href="https://123job.vn/cover-letter/preview/2e65f2f2fdaf6c699b223c61b1b5ab89" className="btn btn-sm btn-not-radius">
                                            <i className="fa fa-eye"></i> Xem
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-hash-id="2e65f2f2fdaf6c699b223c61b1b5ab89" className="btn btn-sm btn-not-radius btn-download-cover-letter">
                                            <i className="fa fa-download"></i>
                                            Tải xuống
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://123job.vn/cover-letter/editor/2e65f2f2fdaf6c699b223c61b1b5ab89" className="btn btn-sm btn-not-radius">
                                            <i className="fa fa-pencil"></i>
                                            Sửa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-hash-id="2e65f2f2fdaf6c699b223c61b1b5ab89" className="btn btn-sm btn-not-radius js-delete-cover-letter">
                                            <i className="fa fa-trash"></i>
                                            Xóa
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <div id="pagination-listing"></div>
                    </div>
                </div>
                <div ref={componentRef} id='fakeHTML' style={{backgroundColor: '#fff !important'}} >
                </div>
            </div>
            
        </>
    )
}

export default StoreCoverLetter;