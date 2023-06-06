import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
// import DeleteModal from "../../components/Modals/deleteModal";
import { toast } from "react-toastify";
import ArticleCards from "../../components/ArticleCard";
import { ArticleData } from "../../utils/ArticleData";

const Articles = () =>
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const [clickIndex, setClickIndex] = useState(-1);
    const tooltipRef = useRef();
    const [modal, setModal] = useState("");

    //  handle toggler
    const handleToggler = (index) =>
    {
        if (index === "close")
        {
            setClickIndex(-1);
        } else
        {
            setClickIndex(index);
        }
    };

    // handle delete
    const handleDelete = (res) =>
    {
        if (res === "cancel")
        {
            setModal("");
        } else
        {
            setModal("");
            toast.success("article Deleted Succesfully");
        }
    };

    useEffect(() =>
    {
        // Function to handle clicks outside the tooltip
        const handleClickOutside = (event) =>
        {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target))
            {
                setClickIndex(false);
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener on unmount
        return () =>
        {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, []);

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
                                <button>Add</button>
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
