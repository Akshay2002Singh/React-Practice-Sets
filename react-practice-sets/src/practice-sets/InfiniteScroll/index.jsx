import React, { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import "./styles.css";

const LIMIT = 20;
const API_URL = "https://dummyjson.com/products";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (isLoading || hasMore === false) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?limit=${LIMIT}&skip=${LIMIT * page}`
      );
      const data = await response.json();
      if (data.products) {
        setProducts((prev) => [...prev, ...data.products]);
        setPage((prev) => prev + 1);
        if ([...products, ...data.products].length === data.total) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onScroll = () => {
    if (
      window.scrollY + window.innerHeight > document.body.scrollHeight - 100 &&
      isLoading === false &&
      hasMore === true
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [page, products, isLoading, hasMore]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="product-page">
      <h1>Products</h1>
      <div>
        {products.map((ele) => (
          <ProductCard data={ele} key={ele.id} />
        ))}
      </div>
      {isLoading ? (
        <div className="m10">Loading...</div>
      ) : hasMore === false ? (
        <div className="m10">You have reached the end</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfiniteScroll;
