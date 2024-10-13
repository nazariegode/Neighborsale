import "../styles/Home.css";
import imghome from "../assets/home2.png";

const Home = () => {
  return (
    <div className="caja">
      <img src={imghome} className="card-img w-100" alt="" />
{/*       <p className="display-1">¡Donde cada venta encuentra un nuevo hogar!</p>
 */}    </div>
  );
};


export default Home;