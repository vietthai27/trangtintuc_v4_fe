import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeDataBaibaoAction } from '../action/BaiBaoAction';

function TaoBaiBao() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const denTrangBaiBao = () => {
        dispatch(changeDataBaibaoAction(content))
        navigate("/baibao")
    }

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                onBlur={newContent => setContent(newContent)}
            />
            {content}
            <button onClick={() => {denTrangBaiBao()}}>TaoBaiBao</button>
        </div>
    );
}

export default TaoBaiBao;