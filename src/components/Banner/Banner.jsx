import cover from '../../assets/images/cover.png'

const Banner = () => {
    return (
        <div className="lg:flex my-10  bg-[#1313130D] rounded-2xl items-center gap-10 mb-20">
            <div className='md:ml-10 p-10 space-y-10'>
                <h1 className='text-3xl lg:text-5xl font-bold items-center text-black'>
                Books to freshen<br /> 
                up your bookshelf</h1>
                <button className='bg-[#23BE0A] text-white  font-bold  px-4 py-3 rounded-lg'>View the list</button>
            </div>
            <div className='ml-10 p-2 my-10'><img className='w-80' src={cover} alt="" /></div>
            
        </div>
    );
};

export default Banner;