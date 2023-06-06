import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
// import DeleteModal from "../../components/Modals/deleteModal";
import { toast } from "react-toastify";

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
                                <input className="article_input" type="date" />
                                <input
                                    className="article_input"
                                    type="search"
                                    placeholder="Search employee"
                                />
                            </div>
                        </div>
                        <div className="article_parent">
                            {arr.map((index) => (
                                <div className="article_all">
                                    <div className="article_content">
                                        <div className="article_layout">
                                            <div className="article_top">
                                                <div className="circle">
                                                    <i className="fas fa-save"></i>
                                                </div>
                                                <p>Issue #921278</p>
                                            </div>
                                            <div className="corner">
                                                <p>2023-11-10</p>
                                                {clickIndex ? (
                                                    <i
                                                        onClick={(e) =>
                                                        {
                                                            e?.stopPropagation();
                                                            handleToggler(index);
                                                        }}
                                                        className="fas fa-ellipsis-v"
                                                    ></i>
                                                ) : (
                                                    <i
                                                        onClick={(e) =>
                                                        {
                                                            e?.stopPropagation();
                                                            handleToggler("close");
                                                        }}
                                                        className="fas fa-ellipsis-v"
                                                    ></i>
                                                )}

                                                {clickIndex === index && (
                                                    <div
                                                        ref={tooltipRef}
                                                        className="article_toolTip shadow"
                                                    >
                                                        <div
                                                            onClick={() =>
                                                            {
                                                                setModal("delete");
                                                            }}
                                                        >
                                                            <i class="fa-regular fa-trash-can"></i> Delete
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <p className="article_title">
                                            How to get assests of prototype design ?
                                        </p>
                                        <p className="article_desc">
                                            {" "}
                                            it to make a type specimen book. It has survived not only
                                            five centuries, but also the leap into electronic
                                            typesetting, remaining essentially unchanged. It was
                                            popularised in the 1960s with the release of Letraset
                                            sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing
                                        </p>
                                        <div className="article_bottom">
                                            <p className="name">Syamar Kit</p>
                                            <p className="role">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
