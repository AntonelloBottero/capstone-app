import './style.css';

export default function DishItem({ dish }) {
    if(!dish) { return undefined }
    return (
        <article className="dish-item card bg--surface">
            {dish.image && <div className="card__image" style={{backgroundImage: 'url('+dish.image+')'}}></div>}
            <div className="card__content">
                <h4 className="card__title">
                    {dish.name}
                    <span className="dish-item__price">
                        ${dish.price}
                    </span>
                </h4>
                <p className="card__text">
                    {dish.description}
                </p>
                <div className="card__actions">
                    <a href="#" className="btn-link">
                        Order a delivery
                    </a>
                </div>
            </div>
        </article>
    )
}