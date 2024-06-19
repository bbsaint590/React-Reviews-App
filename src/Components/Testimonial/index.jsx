import './style.css';

const Testimonial = ({ image, name, verified, rating, testimony }) => {
    return (
        <div className="name">
            <img className="pic" src={image} alt={name} />
            <h2>{name}</h2>
            <span>{verified && "Verified Buyer"}</span>
            <span>{rating}</span>
            <p>{testimony}</p>
        </div>
    );
}

export default Testimonial;
