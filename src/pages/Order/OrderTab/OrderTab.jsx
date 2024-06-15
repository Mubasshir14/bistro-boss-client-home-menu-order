import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({category}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto'>
            {
                category.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;