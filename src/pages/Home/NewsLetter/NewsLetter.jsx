import img from '../../../assets/home/chef-service.jpg'

const NewsLetter = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="hero h-[572px]  mb-24" style={{ backgroundImage: `url(${img})`, borderRadius: 20 }}>
                <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-[#FFFFFF] bg-opacity-80 py-24 px-[167px]">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-cinzel text-black font-bold">bistro boss</h1>
                        <p className="mb-5 text-black font-semibold"> Your go-to online food store for gourmet delights delivered fresh and fast. Explore our wide range of quality dishes, from artisanal pizzas to decadent pastries, crafted for food lovers like you.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;