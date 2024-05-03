import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import articles from "../Sampleout.json";

const News = (props) => {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

  console.log(articles);

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0", marginTop: "90px" }}
      >
        J News - Top Headlines
      </h1>
      {/* {loading && <Spinner />} */}
      {/* <InfiniteScroll
        dataLength={articles.length}
        // next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      > */}
      <div className="container">
        <div className="row">
          {articles.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* </InfiniteScroll> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;