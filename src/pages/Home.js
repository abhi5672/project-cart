import Productscomp from '../components/Productscomp';
const Home = () => {
  return (
         <>
         <div className='h-cover bg-gradient-to-r from-violet-500 to-fuchsia-400'>
         <div className="hero py-16"> 
         <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2 ">
          <h6 className="text-lg text-white"><em>Are you hungry?</em></h6>
          <h1 className="text-3xl md:6-xl font-bold text-white">Dont wait!</h1>
          {/* classes added here for responsiveness */}
           <button className="px-4 py-1.5 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-700">Order Now </button>
          </div>

          <div className="w-1/2 relative mx-auto rounded-lg overflow-hidden">
           <img src="/images/pizza.jpg" alt="pizza" />
          </div>
          
            </div>

         </div>
         <div className="pb-24">
          <Productscomp />
         </div>
         </div>
         </>
        )
}

export default Home;
