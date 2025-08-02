import { Link } from 'react-router-dom'
import DishItem from 'components/DishItem/index.js';
import TestimonialItem from 'components/TestimonialItem/index.js';
import RestaurantFood from 'assets/imgs/restaurantfood.jpg';
import GreekSaladImage from 'assets/imgs/greek-salad.jpg';
import BruschettaImage from 'assets/imgs/bruschetta.jpg';
import LemonDessertImage from 'assets/imgs/lemon-dessert.jpg';
import PierreImage from 'assets/imgs/testimonials/pierre.jpg';
import MariaImage from 'assets/imgs/testimonials/maria.jpg';
import JeffImage from 'assets/imgs/testimonials/jeff.jpg';
import LisaImage from 'assets/imgs/testimonials/lisa.jpg';
import MarioAndAdrianAImage from 'assets/imgs/Mario-and-Adrian-A.jpg';
import MarioAndAdrianBImage from 'assets/imgs/Mario-and-Adrian-b.jpg';
import './style.css';

const specials = [
    {
        id: 1,
        name: 'Greek salad',
        price: 12.99,
        image: GreekSaladImage,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        id: 2,
        name: 'Bruschetta',
        price: 5.99,
        image: BruschettaImage,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        id: 3,
        name: 'Lemon Dessert',
        price: 5.00,
        image: LemonDessertImage,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]

const testimonials = [
    {
        id: 1,
        name: 'Pierre',
        rating: 'Excellent',
        image: PierreImage,
        description: 'My new favorite Mediterranean restaurant'
    },
    {
        id: 2,
        name: 'Maria',
        rating: 'Exquisite',
        image: MariaImage,
        description: 'Here every friday'
    },
    {
        id: 3,
        name: 'Jeff',
        rating: 'Superb',
        image: JeffImage,
        description: 'Can’t live without'
    },
    {
        id: 4,
        name: 'Lisa',
        rating: 'Amazing',
        image: LisaImage,
        description: 'Thank you Adrian!'
    }
]

export default function Home() {
    return (
        <>
            <section id="hero" className="hero section bg--primary">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1 className="text--secondary">Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p className="lead-text">
                                We are a family owned Mediterranean restaurant,<br />focused on a traditional recipes served with a modern twist.
                            </p>
                            <Link to="/reservations" className="btn interaction bg--secondary">
                                <span>Reserve a table</span>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-5 ml-auto">
                            <div className="hero__image" style={{backgroundImage: 'url('+RestaurantFood+')'}}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="specials" className="specials section">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap align-center justify-space-between mb-6">
                                <h2 className="text-h1">Specials</h2>
                                <a href="/reservations" className="btn btn--size-large bg--secondary interaction">
                                    Online Menu
                                </a>
                            </div>
                        </div>
                        <div className="cols-12">
                            <div className="row">
                                {specials.map(special => (
                                    <div key={special.id} className="col-12 col-sm-4">
                                        <DishItem dish={special} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials section bg--surface">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-h1 text-center mb-6">
                                Testimonials
                            </h2>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {testimonials.map(testimonial => (
                                    <div key={testimonial.id} className="col-6 col-md-3 col-sm-6">
                                        <TestimonialItem testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about section">
                <div className="section__inner">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="text-h1 text--primary">Little Lemon</div>
                            <div className="text-h2">Chicago</div>
                            <p className="subtitle text-justify">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br></br>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                            </p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="about__images">
                                <div className="about__image about__image--a" style={{backgroundImage: 'url('+MarioAndAdrianAImage+')'}}></div>
                                <div className="about__image about__image--b" style={{backgroundImage: 'url('+MarioAndAdrianBImage+')'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}