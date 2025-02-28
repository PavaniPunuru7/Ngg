import { useParams} from "react-router-dom";

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

// Plant data with multiple entries
const plants = {
    "avenue-plants": [
        { name: "Neem Tree", image: AvenueImg, price: "₹20" },
        { name: "Ashoka Tree", image: AvenueImg, price: "₹25" },
        { name: "Neem Tree", image: AvenueImg, price: "₹20" },
        { name: "Ashoka Tree", image: AvenueImg, price: "₹25" }
    ],
    "fruit-plants": [
        { name: "Mango Tree", image: FruitImg, price: "₹30" },
        { name: "Guava Tree", image: FruitImg, price: "₹18" },
        { name: "Mango Tree", image: FruitImg, price: "₹30" },
        { name: "Guava Tree", image: FruitImg, price: "₹18" }
    ],
    "flower-plants": [
        { name: "Rose Plant", image: FlowerImg, price: "₹12" },
        { name: "Jasmine Plant", image: FlowerImg, price: "₹15" },
        { name: "Rose Plant", image: FlowerImg, price: "₹12" },
        { name: "Jasmine Plant", image: FlowerImg, price: "₹15" }
    ],
    "shrubs": [
        { name: "Hibiscus", image: ShrubImg, price: "₹10" },
        { name: "Bougainvillea", image: ShrubImg, price: "₹8" },
        { name: "Hibiscus", image: ShrubImg, price: "₹10" },
        { name: "Bougainvillea", image: ShrubImg, price: "₹8" }
    ],
    "palms": [
        { name: "Areca Palm", image: PalmImg, price: "₹25" },
        { name: "Fan Palm", image: PalmImg, price: "₹22" },
        { name: "Areca Palm", image: PalmImg, price: "₹25" },
        { name: "Fan Palm", image: PalmImg, price: "₹22" }
    ],
    "bonsai-plants": [
        { name: "Ficus Bonsai", image: BonsaiImg, price: "₹30" },
        { name: "Jade Bonsai", image: BonsaiImg, price: "₹35" },
        { name: "Ficus Bonsai", image: BonsaiImg, price: "₹30" },
        { name: "Jade Bonsai", image: BonsaiImg, price: "₹35" }
    ],
    "creeper-plants": [
        { name: "Creeper", image: CreeperImg, price: "₹30" },
        { name: "Jade Bonsai", image: CreeperImg, price: "₹35" },
        { name: "Creeper", image: CreeperImg, price: "₹30" },
        { name: "Jade Bonsai", image: CreeperImg, price: "₹35" }
    ],
    "indoor-plants": [
        { name: "Creeper", image: IndoorImg, price: "₹30" },
        { name: "Jade Bonsai", image: IndoorImg, price: "₹35" },
        { name: "Creeper", image: IndoorImg, price: "₹30" },
        { name: "Jade Bonsai", image: IndoorImg, price: "₹35" }
    ],
    "outdoor-plants": [
        { name: "Creeper", image: OutdoorImg, price: "₹30" },
        { name: "Jade Bonsai", image: OutdoorImg, price: "₹35" },
        { name: "Creeper", image: OutdoorImg, price: "₹30" },
        { name: "Jade Bonsai", image: OutdoorImg, price: "₹35" }
    ],
    "Herb-plants": [
        { name: "Creeper", image: HerbsImg, price: "₹30" },
        { name: "Jade Bonsai", image: HerbsImg, price: "₹35" },
        { name: "Creeper", image: HerbsImg, price: "₹30" },
        { name: "Jade Bonsai", image: HerbsImg, price: "₹35" }
    ]
};

export default function PlantDetail() {
    const { plantName } = useParams();
    const plantList = plants[plantName];

    if (!plantList) {
        return <h2 style={{ textAlign: "center", color: "red" }}>Plant category not found!</h2>;
    }

    return (
        <div className="plant-detail">
            <h1 style={{ textAlign: "center", color: "green", marginBottom: "20px" }}>
                {plantName.replace(/-/g, " ").toUpperCase()}
            </h1>

            <div className="plant-list" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px"
            }}>
                {plantList.map((plant, index) => (
                    <div key={index} className="plant-item" style={{
                        border: "none", // Removed border
                        borderRadius: "10px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        textAlign: "center",
                        background: "#fff"
                    }}>
                        <img src={plant.image} alt={plant.name} className="plant-image" style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }} />
                        <div className="plant-info" style={{ marginTop: "10px" }}>
                            <h2 style={{ fontSize: "1.5em", color: "#333" }}>{plant.name}</h2>
                            <p style={{ fontSize: "1.2em", color: "#666" }}>Starting with Price: {plant.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

