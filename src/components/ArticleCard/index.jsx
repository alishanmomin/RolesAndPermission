import React, { useState, useRef, useEffect } from "react";

const ArticleCards = ({ item, index, setModal }) =>
{
    const [clickIndex, setClickIndex] = useState(false);
    const tooltipRef = useRef();

    return (
        <div className="article_all">
            <div className="article_content">
                <div className="article_layout">
                    <div className="article_top">
                        <div className="circle">
                            <i className="fas fa-save"></i>
                        </div>
                        <p>Article #{item.id}</p>
                    </div>
                    <div className="corner">
                        <p>2023-11-10</p>
                        <i className="fas fa-ellipsis-v" onClick={() => setClickIndex(prev => !prev)}></i>
                        {
                            clickIndex && 
                        <div className="article_toolTip shadow">
                            <div onClick={() => { setModal("delete") }}>
                                <i class="fa-regular fa-trash-can"></i> Delete
                            </div>
                        </div>
                        }
                       

                    </div>
                </div>
                <p className="article_title">{item.title}</p>
                <p className="article_desc">{item.description}</p>
                <div className="article_bottom">
                    <p className="name">{item.author}</p>
                    <p className="role">{item.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCards