import { useState } from 'react';
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
// import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS || ORDER FOOD</title>
            </Helmet>
            <div className='mb-20'>
                <Cover img={coverImg} title='MY SHOP' subTitle='WOULD YOU LIKE TO TRY A DISH' />
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='items-center flex justify-center mb-6 font-bold uppercase'>
                <TabList >
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                </div>
                <TabPanel>
                    <OrderTab category={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab category={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab category={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab category={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab category={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;