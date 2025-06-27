import { useSelector } from "react-redux";
import CardWithBody from './../Card/CardWithBody.tsx';
import './Shop.css';
import { useEffect, useState } from "react";

export const Shop = () => {
    const {data} = useSelector(state => state.users);
    const[cardData, setCardData] = useState(data);
  const {itemsearch} = useSelector((state) => state.activeTabs);

   
     useEffect(() => {
        if(itemsearch?.length > 0){
            const filteredData = data.map((item) => item).filter((item) => item.name.toLowerCase().includes(itemsearch.toLowerCase()));
            setCardData(filteredData);
        }
        else{
            setCardData(data);
        }
     },[itemsearch])
    return (
        <div className="container-fluid">
        <h1>Shop</h1>
        <p>Welcome to the Shop section!</p>

        <div className="d-flex flex-sm-row flex-md-column justify-content-around flex-wrap card-seq">
            {cardData && cardData.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
                    <CardWithBody uniqueKey={item.id} name={item.name} price={item.price} description={item.description} img={item.img} description2={item.description2} moreInfo={item.moreInfo} />
                </div>
            ))}
        </div>
        {/* Add your shop content here */}
        </div>
    );
}