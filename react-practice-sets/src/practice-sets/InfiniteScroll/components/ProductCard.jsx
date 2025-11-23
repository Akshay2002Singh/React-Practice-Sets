import "./styles.css";

export const ProductCard = ({ data }) => {
  //  {
  // "id": 1,
  // "title": "Essence Mascara Lash Princess",
  // "category": "beauty",
  // "price": 9.99,
  // "rating": 4.94,
  // "thumbnail": "https://cdn.dummyjson.com/..."
  // }
  return (
    <div className="product-card" id={data.id}>
      <img src={data.thumbnail} />
      <span className="product-title">{data.title}</span>
      <div>
        <span>Rs {data.price}</span>
        <span className="category-card">{data.category}</span>
      </div>
      <span className="rating-chip">{data.rating} ⭐</span>
    </div>
  );
};
