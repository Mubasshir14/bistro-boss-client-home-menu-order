

const MenuItem = ({item}) => {
    const styles = {
        borderRadius: '0px 200px 200px 200px',
    };
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4  p-5">
            <img style={styles} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-cinzel text-xl f text-[#151515]">{name}------</h3>
                <p className="text-[#737373] ">{recipe}</p>
            </div>
            <p  className="text-[#BB8506] text-xl font-cinzel">${price}</p>
        </div>
    );
};

export default MenuItem;