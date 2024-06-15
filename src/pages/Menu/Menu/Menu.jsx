import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dess from '../../../assets/menu/dessert-bg.jpeg';
import pizz from '../../../assets/menu/pizza-bg.jpg'
import sal from '../../../assets/menu/salad-bg.jpg'
import sou from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS || MENU</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu' subTitle='Would you like to try a dish?' />

            <SectionTitle heading="Today's Offer" subHeading="---Don't Miss---"></SectionTitle>

            {/* offered */}
            <div className='max-w-screen-lg mx-auto mb-20'>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            
            {/* dessert */}
            <Cover img={dess} title='Desserts' subTitle='A vast expanse of golden sands stretches endlessly beneath the scorching sun, embodying the serene and harsh beauty of the desert.' />
            <div className='max-w-screen-lg mx-auto mb-20 mt-20'>
                <MenuCategory items={dessert} title='dessert' coverImg={dess}></MenuCategory>
            </div>

            {/* pizza */}
            <Cover img={pizz} title='Pizza' subTitle='Pizza is a delicious dish originating from Italy, featuring a baked crust topped with tomato sauce, cheese, and various toppings.' />
            <div className='max-w-screen-lg mx-auto mb-20 mt-20'>
                <MenuCategory items={pizza} title='pizza' coverImg={dess}></MenuCategory>
            </div>

            {/* salad */}
            <Cover img={sal} title='Salads' subTitle='Salads are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' />
            <div className='max-w-screen-lg mx-auto mb-20 mt-20'>
                <MenuCategory items={salad} title='salad' coverImg={dess}></MenuCategory>
            </div>

            {/* soup */}
            <Cover img={sou} title='Soup' subTitle='Soup are a versatile and healthy dish, often combining fresh vegetables, fruits, proteins, and dressings to create a nutritious and flavorful meal.' />
            <div className='max-w-screen-lg mx-auto mb-20 mt-20'>
                <MenuCategory items={soup} title='soup' coverImg={dess}></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;