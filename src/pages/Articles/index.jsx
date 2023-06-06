import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { toast } from "react-toastify";
import ArticleCards from "../../components/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../../redux/reducers/articles";
import AddArticleModal from "../../components/Modals/ArticleModals/addArticleModal";

const Articles = () =>
{
    const [modal, setModal] = useState("");
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch()
    const {ArticleData} = useSelector((data)=> data.articles)
       
    const handleAddArticle = () => {
        if(!formData.date || !formData.id || !formData.title || !formData.description || !formData.author){
            toast.error("Fill all fields")
        } else {
            dispatch(addArticle(formData))
            toast.success("Added successfully")
            setModal('')
        }
    }
    return (
        <>
            <div>
                <div className="mainLayout">
                    <Sidebar index={1} />
                    {modal === 'add' && <AddArticleModal setFormData={setFormData} formData={formData} setModal={setModal} handleAddArticle={handleAddArticle}/>}
                    <div className="article">
                        <div className="article_main">
                            <div className="article_left">
                                <p className="article_head">Articles</p>
                            </div>
                            <div className="article_right">
                                <button className="article_create" onClick={() => setModal('add')}>Add</button>
                            </div>
                        </div>
                        <div className="article_parent">
                            {ArticleData.map((item, index) => (
                                <ArticleCards key={index} item={item} index={index} setModal={setModal}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
