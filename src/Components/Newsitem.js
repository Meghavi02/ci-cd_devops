import React from "react";

const Newsitem = (props) => {
   let { title, description, imgUrl, newsUrl, author, date, source } = props;
   return (
      <div className="my-3">
         <div className="card">
            <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0, top: "-10px" }}>
               <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={imgUrl ? imgUrl : "https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <p className="card-text">
                  <small className="text-muted">
                     By {!author ? "Unknoen" : author} on {new Date(date).toGMTString()}
                  </small>
               </p>
               <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">
                  Read More
               </a>
            </div>
         </div>
      </div>
   );
};

export default Newsitem;
