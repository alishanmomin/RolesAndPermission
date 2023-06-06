import React, { useState} from "react";
import { toast } from "react-toastify";

const ArticleCards = ({ role, item, handleDelete, setModal, setValues }) =>
{
    const [clickIndex, setClickIndex] = useState(false);

    const deleteHandler = () => {
        if(role === 'admin'){
            handleDelete(item.id); 
            setClickIndex(false)
        } else {
            toast.error("You are not allowed to perform this operation. Kindly update your role.")
            setClickIndex(false)
        }
    }

    const updateHandler = () => {
        if(role === 'admin' || role === 'editor'){
            setValues(item); 
            setModal('edit'); 
            setClickIndex(false)
        } else {
            toast.error("You are not allowed to perform this operation. Kindly update your role.")
            setClickIndex(false)
        }
    }

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
                            <div onClick={deleteHandler}>
                                <i class="fas fa-trash"></i> Delete
                            </div>
                            <div onClick={updateHandler}>
                                <i class="fas fa-edit"></i> Update
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