import{Link} from 'react-router-dom';



const Navigatation = () => {
  return (
    <>
     
       <div className='container mx-auto flex items-center justify-between navbar mt-2.5 rounded'>
        <Link to='/'>
            <img style={{height: 45 }} src="/images/pizzalogo.png" alt="logo" />
        </Link>
        <ul className='flex items-center gap-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products </Link></li>
            <li><Link to='cart'>
               <div className='container flex items-center justify-center'>
                <span>10</span>
                <img className='ml-1' style={{height:30}} src="/images/cart.jpg" alt="cart" />

               </div>
              </Link></li>

        </ul>
       </div>
      
    </>
  )
}

export default Navigatation
