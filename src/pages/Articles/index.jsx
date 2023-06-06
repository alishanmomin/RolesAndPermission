import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
// import DeleteModal from "../../components/Modals/deleteModal";
import { toast } from "react-toastify";
import ArticleCards from "../../components/ArticleCard";
// import { ArticleData } from "../../utils/ArticleData";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../../redux/reducers/articles";

const Articles = () =>
{
    const [modal, setModal] = useState("");
    const dispatch = useDispatch()
    const {ArticleData} = useSelector((data)=> data.articles)
    
    const handleAdd = () => {
        let body = {
            id: 7,
            date: 2023 - 10 - 11,
            title: "My new Added Data",
            description: "loreum ipsum",
            author: "Ali Shan",
            designation: "Writer"
        }
        dispatch(addArticle(body))
    }
    return (
        <>
            <div>
                <div className="mainLayout">
                    <Sidebar index={"24"} />
                    {/* {modal === "delete" && (
                        <DeleteModal
                            handleDelete={handleDelete}
                            head={"Delete Concern"}
                            para={"Are you sure want to delete?"}
                        />
                    )} */}
                    <div className="article">
                        <div className="article_main">
                            <div className="article_left">
                                <p className="article_head">Articles</p>
                            </div>
                            <div className="article_right">
                                <button onClick={handleAdd}>Add</button>
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
