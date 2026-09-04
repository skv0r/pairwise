import Link from "next/link";
import { spots } from "../data/spots";

const CatalogPage = () => {
    return (
        <ul>
            {spots.map( (spot) => (
                <li key={spot.id}>
                    <Link href={`/catalog/${spot.id}`}> 
                        {spot.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CatalogPage;