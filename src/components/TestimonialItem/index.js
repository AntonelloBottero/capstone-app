import './style.css';

export default function TestimonialItem({ testimonial }) {
    return (
        <article className="card testimonial-item bg--white">
            <div className="card__content">
                <div className="testimonial-item__rating text--accent">
                    {testimonial.rating}
                </div>
                <div className="testimonial-item__content">
                    {testimonial.image && <div className="testimonial-item__image" style={{backgroundImage: 'url('+testimonial.image+')'}}></div>}
                    <div className="testimonial-item__name">
                        {testimonial.name}
                    </div>
                </div>
                <div className="testimonial-item__text">
                    {testimonial.description}
                </div>
            </div>
        </article>
    )
}