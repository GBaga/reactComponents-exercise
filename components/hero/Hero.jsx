import "./hero.css";
import { Button } from "../button/Button";

export const Hero = () => {
    return (
        <section className="hero-section">
            <h1>Hero Section</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim totam inventore laboriosam natus aliquid aut recusandae, atque quos amet praesentium, ipsam dolorum mollitia obcaecati ratione excepturi. Porro sapiente sunt explicabo!</p>
            <Button btnLabel="Learn More" fontSize="20px" color="yellow"></Button>
        </section>
    );
};