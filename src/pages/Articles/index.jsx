import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { toast } from "react-toastify";
import ArticleCards from "../../components/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle, updateArticle } from "../../redux/reducers/articles";
import AddArticleModal from "../../components/Modals/ArticleModals/addArticleModal";
import EditArticle from "../../components/Modals/ArticleModals/editArticleModal";

const Articles = () =>
{
    const [modal, setModal] = useState("");
    const [formData, setFormData] = useState({});
    const [values, setValues] = useState({});

    const dispatch = useDispatch()
    const { ArticleData } = useSelector((data) => data.articles)
    const { role } = useSelector((data) => data.roles)

    const handleAddArticle = () =>
    {
        if (!formData.date || !formData.id || !formData.title || !formData.description || !formData.author)
        {
            toast.error("All fields are required")
        } else
        {
            dispatch(addArticle(formData))
            toast.success("Added successfully")
            setModal('')
        }
    }

    const handleDelete = (id) =>
    {
        dispatch(removeArticle(id))
        toast.warn("Deleted Successfully")
    }

    const handleUpdate = () =>
    {
        dispatch(updateArticle(values))
        toast.success("Updated Successfully")
        setModal('')
        // let body = {
        //     id: 2,
        //     date: 2023 - 10 - 11,
        //     title: "temporibus enim commodi?",
        //     description: "it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
        //     author: "Syamar Kit",
        //     designation: "ALI SHAN"
        // }
        // dispatch(updateArticle(body))
    }
    return (
        <>
            <div>
                <div className="mainLayout">
                    <Sidebar index={1} />

                    {modal === 'add' &&
                        <AddArticleModal
                            setFormData={setFormData}
                            formData={formData}
                            setModal={setModal}
                            handleAddArticle={handleAddArticle}
                        />}

                    {modal === 'edit' &&
                        <EditArticle
                            setValues={setValues}
                            values={values}
                            setModal={setModal}
                            handleUpdate={handleUpdate} />}

                    <div className="article">
                        <div className="article_main">
                            <div className="article_left">
                                <p className="article_head">Articles</p>
                            </div>
                            <div className="article_right">
                                {<button className="article_create" onClick={() => {role !== 'viewer' ? setModal('add') : toast.error("You are not allowed to perform this operation. Kindly update your role.")}}>Add</button>}
                            </div>
                        </div>
                        <div className="article_parent">
                            {ArticleData.map((item, index) => (
                                <ArticleCards
                                    role={role}
                                    key={index}
                                    item={item}
                                    index={index}
                                    handleDelete={handleDelete}
                                    setModal={setModal}
                                    setValues={setValues}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
