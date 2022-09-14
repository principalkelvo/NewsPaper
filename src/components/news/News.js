// import NewsCSS from "./News.module.css";
import React from "react";
import NewsCard from "./NewsCard";


function News({blogs}){
    return (
        <>
        <NewsCard blogs={blogs}/>
        </>
    )
}
export default News;