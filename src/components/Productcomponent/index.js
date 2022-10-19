import "./Productcomponent.css"
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
    <article className="row light">
      <div className="col-md-6 ">
        <div className="img-content ">
        <img src={prdtData.image} className="w-75  rounded" alt="product" />
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="discription">
       <p className="fw-bold mb-4 fs-1">{prdtData.title}</p>

       <p className=" mb-5">{prdtData.description}</p>
       <p className=" mb-5 fs-5 text-muted">Rate : {prdtData.rating.rate} ⭐⭐⭐</p>

       <p className="fst-italic fw-bolder text-white fs-2 bg-info rounded p-1">{prdtData.price} EGP</p>
       <p className=" mb-5 fs-3">{prdtData.category}</p>

        </div>
      </div>

    </article>
  );
};
export default Productcomponent;
