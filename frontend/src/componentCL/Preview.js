import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Preview ({}) {
    
    const {id} = useParams()
    const [data, setData] = useState({})

    useLayoutEffect(() => {
        getDataById(id)
    },[])

    useEffect(() => {
        const setHtml = document.querySelector(`#App${data.idForm}`)
        setHtml.innerHTML = data.htmlBody
        const setContentEDDIV = document.querySelectorAll('div')
        const setContentEDSPAN = document.querySelectorAll('span')
        setContentEDDIV.forEach((item) => {
            item.setAttribute('contenteditable', 'false')
        })
        setContentEDSPAN.forEach((item) => {
            item.setAttribute('contenteditable', 'false')
        })
    },[data])

    const getDataById = async (id) => {
        try{
            const response = await axios.get(`http://localhost:8080/api/storecoverletter/Preview/${id}`);
            setData(response.data[0])
            
        }catch (error) {
            console.error('Error axios data: ', error)
        }
    }

    return (
        <div id={`App${data.idForm}`} style={{backgroundColor: '#525659', padding: '80px 0'}}>
        </div>
    );
}

export default Preview;