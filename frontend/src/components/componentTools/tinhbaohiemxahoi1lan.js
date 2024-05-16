import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import '../../assert/cssTools/baohiem.css'
export default function Tinhbaohiemxahoi1lan() {
    const [formData, setFormData] = useState({
        Wage: '',
        giatri: '',
        abc:''
    });
    const [total, setTotal] = useState(0);
    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    const formattedAmount = formatter.format(total);
    console.log(formattedAmount);
    const formatCurrency = (value) => {
        let fein = value.replace(/[^0-9]/g, '');
        let formattedValue = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(fein);
        return formattedValue.replace('₫', '').trim();
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'Wage' ) {
            const formattedValue = formatCurrency(value);
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: formattedValue
            }));
        } else {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
}

    const [selectedCategory, setSelectedCategory] = useState('1');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const getFormData = (event) => {
        event.preventDefault();
        console.log(formData)
    }
    const buttons = document.querySelectorAll('.buttonObligatory');
    buttons.forEach(button => {
        button.addEventListener('focus', function () {
            buttons.forEach(btn => btn.classList.remove('focused'));
            this.classList.add('focused');
        });
    });
    

    function tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
        var ketQua = [];

        while (namBatDau < namKetThuc || (namBatDau === namKetThuc && thangBatDau <= thangKetThuc)) {
            var thang = thangBatDau;
            var nam = namBatDau;

            var thangKetThucCuaNamHienTai = (nam === namKetThuc) ? thangKetThuc : 12;

            if (thangBatDau === 0) {
                thang = 1;
            }

            if (namBatDau === namKetThuc && thangKetThucCuaNamHienTai === thang) {
                ketQua.push({ thangBatDau: thang, namBatDau: nam, thangKetThuc: thangKetThuc, namKetThuc: namKetThuc });
                break;
            }

            ketQua.push({ thangBatDau: thang, namBatDau: nam, thangKetThuc: thangKetThucCuaNamHienTai, namKetThuc: nam });

            thangBatDau = 1;
            namBatDau++;
        }

        return ketQua;
    }
    // Sử dụng hàm
    
    // thangBatDau,namBatDau,thangKetThuc, namKetThuc ,Wage
    // ,Wage
    let tong = 0;
    let tongthang = 0;
    function xuLySuKienClick() {
        var thangBatDau = parseInt(document.getElementById("thangBatDau").value);
        var namBatDau = parseInt(document.getElementById("namBatDau").value);
        var thangKetThuc = parseInt(document.getElementById("thangKetThuc").value);
        var namKetThuc = parseInt(document.getElementById("namKetThuc").value);
        const chuoi_moi = Number(formData.Wage.replace(/\./g, ''))
       
        var ketQua = tinhSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc);
        ketQua.forEach(function (item) {
            let thang = (item.thangKetThuc - item.thangBatDau) + 1;
            tongthang += thang;
            var heSo = {
                1994: 5.43, 1995: 4.61, 1996: 4.36, 1997: 4.22, 1998: 3.92, 1999: 3.75, 2000: 3.82, 2001: 3.83,
                2002: 3.68, 2003: 3.57, 2004: 3.31, 2005: 3.06, 2006: 2.85,
                2007: 2.63, 2008: 2.14, 2009: 2, 2010: 1.83,
                2011: 1.54, 2012: 1.41, 2013: 1.33, 2014: 1.27, 2015: 1.27, 2016: 1.23,
                2017: 1.19, 2018: 1.15, 2019: 1.12, 2020: 1.08, 2021: 1.07, 2022: 1.03, 2023: 1, 2024: 1
            };

            // Kiểm tra xem có hệ số nào phù hợp với giá trị item.namKetThuc không
            if (heSo.hasOwnProperty(item.namKetThuc)) {
                tong += chuoi_moi * thang * heSo[item.namKetThuc];
            } else {
                // Xử lý khi không có hệ số phù hợp
                console.log("Không tìm thấy hệ số cho năm " + item.namKetThuc);
            }

        });
        console.log(tong)
        let TBBHXH = tong / tongthang
        console.log(TBBHXH);
        console.log(ketQua);
        console.log(tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc))
        let totalonemore = TinhKetQuaBHXH(TBBHXH, thangBatDau, namBatDau, thangKetThuc, namKetThuc);
        setTotal(totalonemore);
        console.log(selectedCategory,formData.abc);
        if(selectedCategory === "2"  && formData.abc === "doituongkhac"){
            let totalSupportOther = supportother(namBatDau, thangBatDau, thangKetThuc, namKetThuc);
            console.log(totalSupportOther);
            let totalSupport1 = totalonemore - totalSupportOther;
            setTotal( totalSupport1);
        }
       if (selectedCategory === "2" && formData.abc === "hongheo"){
            let totalSupportPoor = supportPoor(namBatDau, thangBatDau, thangKetThuc, namKetThuc);
            let totalSupport2 = totalonemore - totalSupportPoor;
            console.log(totalSupport2)
            setTotal(totalSupport2);
        }
       if(selectedCategory === "2" && formData.abc === "hocanngheo"){
            let totalSupportNearP = supportNearP(namBatDau, thangBatDau, thangKetThuc, namKetThuc);
            let totalSupport3 = totalonemore - totalSupportNearP;
            console.log(totalSupport3)
            setTotal(totalSupport3);
        }
        // return  totalonemore
    }
    // Hàm xử lý sự kiện thay đổi trên các select
    function tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
        var soNam = namKetThuc - namBatDau;
        var soThang = (thangKetThuc - thangBatDau) + 1;

        if (soThang < 0) {
            soNam--;
            soThang += 12;
        }
        if (soThang >= 12) {
            soNam += Math.floor(soThang / 12);
            soThang = soThang % 12;
        }

        return { soNam: soNam, soThang: soThang };
    }
    function TinhKetQuaBHXH(TBBHXH, thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
        if (thangBatDau >= thangKetThuc) {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                width: "600px",
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc"
              });
            return 0;
        }
        else {
            let ketquaSoletruoc2014 = 0;
            if (namBatDau < 2014 && namKetThuc >= 2014) {
                var ketQua = { truoc2014: { soNam: 0, soThang: 0 }, sau2014: { soNam: 0, soThang: 0 } };
                if (namBatDau < 2014) {
                    ketQua.truoc2014.soNam = 2014 - namBatDau - 1; // Trừ 1 năm vì năm 2014 không được tính
                    ketQua.truoc2014.soThang = 12 - thangBatDau + 1; // Số tháng còn lại từ tháng bắt đầu đến cuối năm
                }
                // Tính số năm và số tháng sau năm 2014
                if (namKetThuc >= 2014) {
                    ketQua.sau2014.soNam = namKetThuc - 2014; // Số năm từ năm 2014 đến năm kết thúc
                    ketQua.sau2014.soThang = thangKetThuc; // Số tháng đến tháng kết thúc trong năm kết thúc
                }
                // console.log(ketQua.truoc2014.soThang);
                // console.log(ketQua.sau2014.soThang);

                // if (ketQua.truoc2014.soThang > 7) {
                //     ketQua.truoc2014.soNam = ketQua.truoc2014.soNam + 0;
                // } else {
                //     ketQua.truoc2014.soNam = ketQua.truoc2014.soNam + 0;
                // }
                let giatritruoc = (1.5 * TBBHXH * ketQua.truoc2014.soNam)
                // console.log(ketQua.truoc2014.soNam);
                // console.log(giatritruoc)
                // console.log(ketQua.sau2014.soThang)
                // let thangcuoicung2 = 12 - ketQua.sau2014.soThang + 1;
                // console.log(thangcuoicung2)
                if (ketQua.sau2014.soThang > 7) {
                    ketQua.sau2014.soNam = ketQua.sau2014.soNam + 1;
                } else {
                    ketQua.sau2014.soNam = ketQua.sau2014.soNam + 0.5;
                }
                // console.log(ketQua.sau2014.soNam)
                if (ketQua.truoc2014.soThang >= 0 && ketQua.truoc2014.soThang <= 12) {
                    console.log(ketQua.truoc2014.soThang);
                    // let thangcuoicung = 12 - ketQua.truoc2014.soThang + 1;
                    // console.log(thangcuoicung);
                    if (ketQua.truoc2014.soThang > 7 && ketQua.truoc2014.soThang < 12) {
                        ketquaSoletruoc2014 = TBBHXH * 2 * 1;

                    } else if (ketQua.truoc2014.soThang <= 7) {
                        ketquaSoletruoc2014 = TBBHXH * 2 * 0.5;
                    } else if (ketQua.truoc2014.soThang === 12) {
                        ketquaSoletruoc2014 = TBBHXH * 1.5 * 1
                    }
                }

                // console.log(ketquaSoletruoc2014);
                let giatrisau = (2 * TBBHXH * ketQua.sau2014.soNam) + ketquaSoletruoc2014;
                console.log(2 * TBBHXH * ketQua.sau2014.soNam)
                // console.log(ketQua.sau2014.soNam);
                // console.log(giatrisau);
                let ketQua1 = giatrisau + giatritruoc;
                return ketQua1;
            } else if (namBatDau < 2014) {
                const giatritruoc2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc);
                console.log(giatritruoc2014);
                if (giatritruoc2014.soThang >= 7) {
                    giatritruoc2014.soThang = 1;
                } else {
                    giatritruoc2014.soThang = 0.5;
                }
                // Tính mức hưởng BHXH một lần trước năm 2014
                let mucHuongTruoc2014 = 1.5 * TBBHXH * giatritruoc2014.soNam;

                if (giatritruoc2014.soThang === 1) {
                    let mucHuongSau2014nguyen = 2 * TBBHXH * 1;
                    let ketQua2 = mucHuongTruoc2014 + mucHuongSau2014nguyen;
                    return ketQua2;

                } else if (giatritruoc2014.soThang === 0.5) {
                    let mucHuongSau2014khong = 2 * TBBHXH * 0.5;
                    let ketQua4 = mucHuongTruoc2014 + mucHuongSau2014khong;
                    return ketQua4;
                }

            } else if (namBatDau >= 2014) {
                const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
                console.log(giatrisau2014);
                if (giatrisau2014.soThang > 7) {
                    giatrisau2014.soNam = giatrisau2014.soNam + 1;
                } else {
                    giatrisau2014.soNam = giatrisau2014.soNam + 0.5;
                }
                let ketQua1 = (2 * TBBHXH * giatrisau2014.soNam);
                return ketQua1;
            }

        }
    }
    function soThangTu2018Den2021(thangBatDau, namBatDau, thangKetThuc, namKetThuc) {
        var soNam = namKetThuc - namBatDau + 1; // Số năm từ năm bắt đầu đến năm kết thúc
        var soThang = 0;
    
        // Tính số tháng từ tháng bắt đầu đến tháng kết thúc của mỗi năm
        for (var nam = namBatDau; nam <= namKetThuc; nam++) {
            var thangBD = (nam === namBatDau) ? thangBatDau : 1; // Nếu là năm bắt đầu thì tính từ tháng bắt đầu, ngược lại từ tháng 1
            var thangKT = (nam === namKetThuc) ? thangKetThuc : 12; // Nếu là năm kết thúc thì tính đến tháng kết thúc, ngược lại đến tháng 12
            soThang += (thangKT - thangBD + 1);
        }
    
        return soThang;
    }
    function supportother(namBatDau, thangBatDau, thangKetThuc, namKetThuc) {
        let ketqua4 = 0;
        let ketqua5 = 0;
        let ketqua6 = 0;
        // let ketqua7 = 0;
        if (namBatDau >= 2018 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            console.log(giatrisau2014)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua6 = 0.22 * 700000 * 0.1 * giatrisau2014.soNam;
            console.log(ketqua6);
            return Number(ketqua6);
        }
        else if (namBatDau >= 2022 && namKetThuc <= 2024) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua5 = 0.22 * 1500000 * 0.1 * giatrisau2014.soNam;
            console.log(ketqua5);
        }
        else if (namBatDau >= 2008 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            const giatrinamgiua = soThangTu2018Den2021(1, 2018, thangKetThuc, namKetThuc)
            console.log(giatrinamgiua)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            ketqua6 = 0.22 * 700000 * 0.1 * giatrinamgiua;
            console.log(ketqua6);
            return Number(ketqua6);
            
        }
        else if ((namBatDau <= 2021 && namKetThuc >= 2022)) {
            const giatrisau2018 = tinhTongSoNamVaThang(thangBatDau, namBatDau, 12, 2021)
            giatrisau2018.soNam = giatrisau2018.soNam * 12 + giatrisau2018.soThang 
            console.log(giatrisau2018.soNam);
                ketqua6 = 0.22 * 700000 * 0.1 * giatrisau2018.soNam;
            if(giatrisau2018.soNam > 48){
                ketqua6 = 0.22 * 700000 * 0.1 * 48;
            }
            console.log(Number(ketqua6))
            const giatrisau2022 = tinhTongSoNamVaThang(1, 2022, thangKetThuc,namKetThuc)
            giatrisau2022.soNam = giatrisau2022.soNam * 12 + giatrisau2022.soThang
            console.log(giatrisau2022.soNam)
            ketqua5 = 0.22 * 1500000 * 0.1 * giatrisau2022.soNam;
            if( giatrisau2022.soNam > 36){
                ketqua6 = 0.22 * 1500000 * 0.1 * 36;
            }
            console.log(Number(ketqua5))
            ketqua4 = Number(ketqua6) + Number(ketqua5);
            return ketqua4;
        }
    }
    function supportPoor(namBatDau, thangBatDau, thangKetThuc, namKetThuc) {
        let ketqua4 = 0;
        let ketqua5 = 0;
        let ketqua6 = 0;
        if (namBatDau >= 2018 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            console.log(giatrisau2014)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua6 = 0.22 * 700000 * 0.3 * giatrisau2014.soNam;
            console.log(ketqua6);
            return Number(ketqua6);
        }else if (namBatDau >= 2022 && namKetThuc <= 2024) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua5 = 0.22 * 1500000 * 0.3 * giatrisau2014.soNam;
            console.log(ketqua5);
        } else if (namBatDau >= 2008 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            const giatrinamgiua = soThangTu2018Den2021(1, 2018, thangKetThuc, namKetThuc)
            console.log(giatrinamgiua)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            ketqua6 = 0.22 * 700000 * 0.3 * giatrinamgiua;
            console.log(ketqua6);
            return Number(ketqua6);
            
        }
        else if ((namBatDau <= 2021 && namKetThuc >= 2022)) {
            const giatrisau2018 = tinhTongSoNamVaThang(thangBatDau, namBatDau, 12, 2021)
            giatrisau2018.soNam = giatrisau2018.soNam * 12 + giatrisau2018.soThang 
            console.log(giatrisau2018.soNam);
            ketqua6 = 0.22 * 700000 * 0.3 * giatrisau2018.soNam;
            if(giatrisau2018.soNam > 48){
                ketqua6 = 0.22 * 700000 * 0.3 * 48;
            }
            console.log(Number(ketqua6))
            const giatrisau2022 = tinhTongSoNamVaThang(1, 2022, thangKetThuc,namKetThuc)
            giatrisau2022.soNam = giatrisau2022.soNam * 12 + giatrisau2022.soThang
            console.log(giatrisau2022.soNam)
            ketqua5 = 0.22 * 1500000 * 0.3 * giatrisau2022.soNam;
            if( giatrisau2022.soNam > 36){
                ketqua6 = 0.22 * 1500000 * 0.3 * 36;
            }
            console.log(Number(ketqua5))
            ketqua4 = Number(ketqua6) + Number(ketqua5);
            return ketqua4;
        }
        let Sumtotal = ketqua4 + ketqua5 + ketqua6;
        return Sumtotal
    }
    function supportNearP(namBatDau, thangBatDau, thangKetThuc, namKetThuc) {
        let ketqua4 = 0;
        let ketqua5 = 0;
        let ketqua6 = 0;
        if (namBatDau >= 2018 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            console.log(giatrisau2014)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua6 = 0.22 * 700000 * 0.25 * giatrisau2014.soNam;
            console.log(ketqua6);
            return Number(ketqua6);
        }else if (namBatDau >= 2022 && namKetThuc <= 2024) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            console.log(giatrisau2014.soNam);
            ketqua5 = 0.22 * 1500000 * 0.25 * giatrisau2014.soNam;
            console.log(ketqua5);
        }else if (namBatDau >= 2008 && namKetThuc <= 2021) {
            const giatrisau2014 = tinhTongSoNamVaThang(thangBatDau, namBatDau, thangKetThuc, namKetThuc)
            const giatrinamgiua = soThangTu2018Den2021(1, 2018, thangKetThuc, namKetThuc)
            console.log(giatrinamgiua)
            giatrisau2014.soNam = giatrisau2014.soNam * 12 + giatrisau2014.soThang
            ketqua6 = 0.22 * 700000 * 0.25 * giatrinamgiua;
            console.log(ketqua6);
            return Number(ketqua6);
            
        }else if ((namBatDau <= 2021 && namKetThuc >= 2022)) {
            const giatrisau2018 = tinhTongSoNamVaThang(thangBatDau, namBatDau, 12, 2021)
            giatrisau2018.soNam = giatrisau2018.soNam * 12 + giatrisau2018.soThang 
            console.log(giatrisau2018.soNam);
            ketqua6 = 0.22 * 700000 * 0.25 * giatrisau2018.soNam;
            if(giatrisau2018.soNam > 48){
                ketqua6 = 0.22 * 700000 * 0.25 * 48;
            }
            console.log(Number(ketqua6))
            const giatrisau2022 = tinhTongSoNamVaThang(1, 2022, thangKetThuc,namKetThuc)
            giatrisau2022.soNam = giatrisau2022.soNam * 12 + giatrisau2022.soThang
            console.log(giatrisau2022.soNam)
            ketqua5 = 0.22 * 1500000 * 0.25 * giatrisau2022.soNam;
            if( giatrisau2022.soNam > 36){
                ketqua6 = 0.22 * 1500000 * 0.25 * 36;
            }
            console.log(Number(ketqua5))
            ketqua4 = Number(ketqua6) + Number(ketqua5);
            return ketqua4;
        }
        let Sumtotal = ketqua4 + ketqua5 + ketqua6;
        return Sumtotal
    }







    return (
        <>
            <form id='paragraph' onSubmit={getFormData}>
                <div className='title'>
                    <h2>
                        Công cụ tính bảo hiểm xã hội một lần
                    </h2>
                </div>
                <div className='navbar'>
                    <div>
                        <button className='buttonObligatory' name='obligatory' value="1" checked={selectedCategory === '1'}
                            onClick={() => handleCategoryClick('1')} >BHXH bắt buộc</button>
                    </div>
                    <div>
                        <button className='buttonVoluntary' name='Voluntary' value="2" checked={selectedCategory === '2'} onClick={() => handleCategoryClick('2')} >BHXH tự nguyện</button>
                    </div>
                </div>

                {selectedCategory === '1' && (
                <div className='container-InputParent'>
                    <div className='container-InputChild'>
                        <div className='navbar-title'>
                            <div >
                                <p>Giai đoạn nộp BHXH</p>
                            </div>
                            <div className='title-second' >
                                <p>Mức lương đóng BHXH</p>
                            </div>
                        </div>
                        <div className='table'>
                            <div>
                                <select name="giatri" id="thangBatDau" className="form-control-select2" onChange={handleChange} value={formData.giatri}>
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri1" id="namBatDau" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>
                            </div>
                            
                            <div>
                                <p>Đến</p>
                            </div>
                            <div>
                                <select name="giatri0" id="thangKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri2" id="namKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>

                            </div>
                            <div className='element-table'>
                                <div className='element-table-right'>
                                    <label>
                                        <input value={formData.Wage} id="inputLast" onChange={handleChange} placeholder="VD : 10,000,000" name="Wage" />
                                    </label>
                                </div>
                            </div>
                            
                        </div>        
                    </div>
                </div>
                )}
                
                {selectedCategory === '2' && (
                    <div>

                        <div className='navbar-title'>
                            <div className='title-first'>
                                <p>Giai đoạn nộp BHXH</p>
                            </div>
                            <div className='title-second' >
                                <p>Mức lương đóng BHXH</p>
                            </div>
                            <div className='title-thirt' >
                                <p>Đối tượng tham gia</p>
                            </div>
                        </div>
                        <div className='table'>
                            <div>
                                <select name="giatri" id="thangBatDau" className="form-control-select2" onChange={handleChange} value={formData.giatri}>
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri1" id="namBatDau" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>
                            </div>
                            <div>
                                <p>Đến</p>
                            </div>
                            <div>
                                <select name="giatri0" id="thangKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10" >10</option>
                                    <option value="11" >11</option>
                                    <option value="12" >12</option>
                                </select>
                            </div>
                            <div>
                                <select name="giatri2" id="namKetThuc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="2024" >2024</option>
                                    <option value="2023" >2023</option>
                                    <option value="2022" >2022</option>
                                    <option value="2021" >2021</option>
                                    <option value="2020" >2020</option>
                                    <option value="2019" >2019</option>
                                    <option value="2018" >2018</option>
                                    <option value="2017" >2017</option>
                                    <option value="2016" >2016</option>
                                    <option value="2015" >2015</option>
                                    <option value="2014" >2014</option>
                                    <option value="2013" >2013</option>
                                    <option value="2012" >2012</option>
                                    <option value="2011" >2011</option>
                                    <option value="2010" >2010</option>
                                    <option value="2009" >2009</option>
                                    <option value="2008" >2008</option>
                                    <option value="2007" >2007</option>
                                    <option value="2006" >2006</option>
                                    <option value="2005" >2005</option>
                                    <option value="2004" >2004</option>
                                    <option value="2003" >2003</option>
                                    <option value="2002" >2002</option>
                                    <option value="2001" >2001</option>
                                    <option value="2000" >2000</option>
                                    <option value="1999" >1999</option>
                                    <option value="1998" >1998</option>
                                    <option value="1997" >1997</option>
                                    <option value="1996" >1996</option>
                                    <option value="1995" >1995</option>
                                    <option value="1994" >1994</option>
                                </select>

                            </div>
                            <div className='element-table'>
                                <div className='element-table-right'>
                                    <label>
                                        <input value={formData.Wage} onChange={handleChange} placeholder="VD : 10,000,000" name="Wage" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <select name="abc" className="form-control-select2" onChange={handleChange} >
                                    <option>--Chọn--</option>
                                    <option value="hongheo" >Hộ Nghèo</option>
                                    <option value="hocanngheo" >Hộ Cận Nghèo</option>
                                    <option value="doituongkhac">Đối Tượng Khác</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                <div className='calculation-button'>
                    <button type='submit' id="tinhButton"
                        onClick={(event) => {
                            xuLySuKienClick(event)
                            

                        }}
                    >
                        Tính bảo hiểm xã hội
                    </button>
                </div>
                <div id="ketQua"></div>
                <p></p>
                <div className='Giatrihienthi'>
                    <p>Tiền BHXH một lần được nhận: {formattedAmount} (VNĐ)</p>
                </div>
            </form >

        </>
    )
}