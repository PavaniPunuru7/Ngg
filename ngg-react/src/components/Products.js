import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvenueImg from "../assets/Products/Avenue.png";
import FruitImg from "../assets/Products/fruit.png";
import FlowerImg from "../assets/Products/Flower.png";
import ShrubImg from "../assets/Products/shurb.png";
import PalmImg from "../assets/Products/plam.png";
import BonsaiImg from "../assets/Products/bonsai.png";
import CreeperImg from "../assets/Products/creepers.png";
import IndoorImg from "../assets/Products/indoor.png";
import OutdoorImg from "../assets/Products/outdoor.png";
import HerbsImg from "../assets/Products/herbs.png";

const plants = [
    { name: "Avenue plants", image: AvenueImg },
    { name: "Fruit plants", image: FruitImg },
    { name: "Flower plants", image: FlowerImg },
    { name: "Shrubs", image: ShrubImg },
    { name: "Palms", image: PalmImg },
    { name: "Bonsai plants", image: BonsaiImg },
    { name: "Creepers", image: CreeperImg },
    { name: "Indoor plants", image: IndoorImg },
    { name: "Outdoor plants", image: OutdoorImg },
    { name: "Herbs & others", image: HerbsImg }
];

export default function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    // URL-friendly name for routing
    const formatPlantName = (name) => name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");

    return (
        <section id="products" className="section"> 
            <div style={{ paddingTop: '70px', textAlign: 'left', paddingLeft: '100px' }}>
                <h1 style={{ color: 'rgb(8, 77, 8)', marginBottom: '15px', fontSize: '45px', fontWeight: 'bold' }}>Products</h1>
            </div>
            <div className="gallery-container">
                {plants.map((plant, index) => (
                    <div
                        key={index}
                        className="plant-card"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate(`/plant/${formatPlantName(plant.name)}`)}
                    >
                        <div
                            className={`plant-content ${hoveredIndex === index ? "hovered" : ""}`}
                            style={{ backgroundImage: `url(${plant.image})` }}
                        >
                            <span className="plant-name">{plant.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
