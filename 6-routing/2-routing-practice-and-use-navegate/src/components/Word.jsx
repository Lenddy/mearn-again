import React from 'react';
import { useParams } from 'react-router-dom';

const Word = () => {
    const {word,tColor,bColor} = useParams()
    return (
        <div>
            <h1 style={{color:tColor,backgroundColor:bColor }} >the word is : {word}</h1>
        </div>
    );
};



export default Word;