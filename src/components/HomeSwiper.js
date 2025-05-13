import './HomeSwiper.scss';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

    const recipes = [
  { title: "Spaghetti Bolognese", image: "Images/swiper-img/spaghetti-bolognese.jpeg", dietType: "Vegetarian" },
  { title: "Margherita Pizza", image: "Images/swiper-img/margherita-pizza.webp", dietType: "Vegetarian" },
  { title: "Vegetable Stir Fry", image: "Images/swiper-img/vegetable-stir-fry.jpg", dietType: "Vegetarian" },
  { title: "Tomato Basil Pasta", image: "Images/swiper-img/tomato-basil-pasta.jpg", dietType: "Vegetarian" },
  { title: "Mushroom Risotto", image: "Images/swiper-img/mushroom-risotto.jpg", dietType: "Vegetarian" },
  { title: "Eggplant Parmesan", image: "Images/swiper-img/eggplant-parmesan.webp", dietType: "Vegetarian" },
  { title: "Caprese Salad", image: "Images/swiper-img/caprese-salad.jpg", dietType: "Vegetarian" },
  { title: "Broccoli Quiche", image: "Images/swiper-img/broccoli-quiche.jpg", dietType: "Vegetarian" },
  { title: "Vegan Buddha Bowl", image: "Images/swiper-img/vegan-buddha-bowl.jpg", dietType: "Vegan" },
  { title: "Chickpea Curry", image: "Images/swiper-img/chickpea-curry.jpg", dietType: "Vegan" },
  { title: "Vegan Tacos", image: "Images/swiper-img/vegan-tacos.jpg", dietType: "Vegan" },
  { title: "Lentil Soup", image: "Images/swiper-img/lentil-soup.jpg", dietType: "Vegan" },
  { title: "Tofu Stir Fry", image: "Images/swiper-img/tofu-stir-fry.jpg", dietType: "Vegan" },
  { title: "Vegan Chili", image: "Images/swiper-img/vegan-chili.jpg", dietType: "Vegan" },
  { title: "Sweet Potato Bowl", image: "Images/swiper-img/sweet-potato-bowl.jpg", dietType: "Vegan" },
  { title: "Quinoa Salad", image: "Images/swiper-img/quinoa-salad.jpg", dietType: "Vegan" },
  { title: "Grilled Salmon", image: "Images/swiper-img/grilled-salmon.jpg", dietType: "Gluten Free" },
  { title: "Zucchini Noodles", image: "Images/swiper-img/zucchini-noodles.jpg", dietType: "Gluten Free" },
  { title: "Stuffed Peppers", image: "Images/swiper-img/stuffed-peppers.jpg", dietType: "Gluten Free" },
  { title: "Chicken and Veggies", image: "Images/swiper-img/chicken-and-veggies.jpg", dietType: "Gluten Free" },
  { title: "Shrimp Skewers", image: "Images/swiper-img/shrimp-skewers.jpg", dietType: "Gluten Free" },
  { title: "Rice Paper Rolls", image: "Images/swiper-img/rice-paper-rolls.jpg", dietType: "Gluten Free" },
  { title: "Polenta with Mushrooms", image: "Images/swiper-img/polenta-with-mushrooms.jpg", dietType: "Gluten Free" },
  { title: "Baked Sweet Potato", image: "Images/swiper-img/baked-sweet-potato.jpg", dietType: "Gluten Free" },
  { title: "Chicken Stir Fry", image: "Images/swiper-img/chicken-stir-fry.jpg", dietType: "Dairy Free" },
  { title: "Vegan Pancakes", image: "Images/swiper-img/vegan-pancakes.jpg", dietType: "Dairy Free" },
  { title: "Grilled Chicken Salad", image: "Images/swiper-img/grilled-chicken-salad.jpg", dietType: "Dairy Free" },
  { title: "Beef Lettuce Wraps", image: "Images/swiper-img/beef-lettuce-wraps.jpg", dietType: "Dairy Free" },
  { title: "Egg Fried Rice", image: "Images/swiper-img/egg-fried-rice.jpg", dietType: "Dairy Free" },
  { title: "Coconut Curry", image: "Images/swiper-img/coconut-curry.jpg", dietType: "Dairy Free" },
  { title: "BBQ Chicken Thighs", image: "Images/swiper-img/bbq-chicken-thighs.jpg", dietType: "Dairy Free" },
  { title: "Tuna Avocado Salad", image: "Images/swiper-img/tuna-avocado-salad.jpg", dietType: "Dairy Free" }
];


const HomeSwiper = () => {
    const [selectedDiet, setSelectedDiet] = useState("All")
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const diets = ["All", "Vegetarian", "Vegan", "Gluten Free", "Dairy Free"]

    const handleDietType = (diet) => {
        setSelectedDiet(diet)
    }

    useEffect(() => {
        if(selectedDiet === "All") {
            setFilteredRecipes(recipes)
        } else {
            const filtered = recipes.filter(recipe => recipe.dietType === selectedDiet)
            setFilteredRecipes(filtered)
        }

    }, [selectedDiet])

  return (
    <div className='home-swiper'>
        <header>
            <h2 className="title leads">RECIPES BASED ON DIETARY PREFERENCES</h2>
            <div className="diet-type">
                {
                    diets.map((diet, j) => (
                        <div className={selectedDiet === diet ? "active" : ""} key={j} onClick={() => handleDietType(diet)}>{diet}</div>
                    ))
                }
            </div>
        </header>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            initialSlide={0}
            spaceBetween={20}
            speed={750}
            navigation
            scrollbar={{ draggable: true }}
              breakpoints={{
                100: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                500: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                },
                1280: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                }
            }}
        >
            {
                filteredRecipes.map((recipe, index) => (
                    <SwiperSlide key={index} onClick={() => alert("Hi this section was created for visual purposes only. The API does not include a 'diet' filter, so there is no data to display here.")}>
                        <div className="swiper-img" >
                            <img src={recipe.image} alt={recipe.title} loading='lazy' />
                        </div>
                        <div className='swiper-title'>{recipe.title}</div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default HomeSwiper