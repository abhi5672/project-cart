
const Product = () => {
  return (
    <>
       <div>
        <img className="mb-2" src="\images\download.jpeg" alt="pizza" />
        <div className="text-center">
        <h3 className="text-lg font-bold py-2">Havana Special</h3>
       <span className="bg-gray-200 py-1 m-auto rounded-full text-small px-4">Small</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
            <span>Rs.599</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
            </div>
            </div>
    </>
  )
}

export default Product
