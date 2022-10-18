import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Productcomponent = () => {
  const [prdtData, setprdtData] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetchPrdDetails();
  }, []);
 
  const fetchPrdDetails = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setprdtData(data);};

  
  if (!prdtData) {
    return <p>not found</p>;
  }
  return (
    <section className="col-md-6">
      <div className="content d-flex">
        <img src={prdtData.image} className="w-50" alt="product" />
        <div className="item-data">
          <p>{prdtData.title}</p>
          <p>{prdtData.price} Egp</p>
        </div>
      </div>
    </section>
  );
};
export default Productcomponent;